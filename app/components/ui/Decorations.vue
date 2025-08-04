<template>
  <div class="pointer-events-none absolute inset-0 overflow-hidden select-none">
    <img src="/cute/cat.svg" class="w-16 absolute left-4 bottom-24 animate-bounce" />
    <img src="/cute/bunny.svg" class="w-12 absolute right-10 top-10 animate-spin-slow" />
    <img src="/cute/bow.svg" class="w-10 absolute left-1/3 top-1/4" />
    <Motion
      v-for="heart in hearts"
      :key="heart.id"
      class="absolute text-pink-400"
      :style="{ left: heart.x + 'px', top: heart.y + 'px' }"
      :initial="{ scale: 0, opacity: 1 }"
      :animate="{ scale: 1.5, y: heart.y - 40, opacity: 0 }"
      :transition="{ duration: 1 }
      "
    >
      ❤️
    </Motion>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Motion } from 'motion-v'

interface Heart { id: number; x: number; y: number }
const hearts = ref<Heart[]>([])

function spawn(e: MouseEvent) {
  hearts.value.push({ id: Date.now(), x: e.clientX, y: e.clientY })
  setTimeout(() => hearts.value.shift(), 1000)
}

onMounted(() => window.addEventListener('click', spawn))
onUnmounted(() => window.removeEventListener('click', spawn))
</script>

<style scoped>
.animate-spin-slow {
  animation: spin 10s linear infinite;
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
