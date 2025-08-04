<template>
  <div>
    <motion.div
      class="fixed bottom-0 left-0 right-0 h-12 bg-rose-100 border-t border-pink-200 flex items-center px-3 shadow-inner z-50 relative"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      transition="{ duration: 0.4 }"
    >
      <button
        @click="toggleStart"
        class="w-8 h-8 flex items-center justify-center hover:bg-pink-200 rounded"
      >
        🪟
      </button>

      <MusicPlayer class="ml-2" />

      <div class="flex-1" />

      <div class="text-sm px-2">{{ currentTime }}</div>
    </motion.div>

    <StartMenu />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const { toggleStart } = useTaskbar()
const currentTime = ref('')

onMounted(() => {
  const update = () => {
    const now = new Date()
    currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  update()
  setInterval(update, 15000)
})
</script>
