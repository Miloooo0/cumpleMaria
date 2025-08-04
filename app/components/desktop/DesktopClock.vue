<template>
  <div class="absolute top-4 left-1/2 -translate-x-1/2 text-3xl text-rose-500 flex items-center gap-2 pointer-events-none z-30">
    <span>{{ time }}</span>
    <span>😊</span>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const time = ref('')
let interval: ReturnType<typeof setInterval>

const update = () => {
  const now = new Date()
  time.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
}

onMounted(() => {
  update()
  interval = setInterval(update, 1000)
})

onUnmounted(() => clearInterval(interval))
</script>
