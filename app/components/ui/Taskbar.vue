<template>
  <div>
    <Motion
      class="fixed bottom-0 left-1/2 -translate-x-1/2 max-w-xl w-full h-12 bg-rose-100/70 backdrop-blur-md border-t border-pink-200 flex items-center px-3 shadow-inner rounded-t-2xl z-50 relative"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :transition="{ duration: 0.4 }"
    >
      <button
        @click="toggleStart"
        class="w-8 h-8 flex items-center justify-center hover:bg-pink-200 rounded"
      >
        🪟
      </button>

      <div class="flex gap-2 ml-4">
        <button
          v-for="(win, id) in windows"
          :key="id"
          class="px-2 py-1 text-sm bg-pink-50 rounded hover:bg-pink-200"
          @click="toggle(id)"
        >
          {{ titles[id] || id }}
        </button>
      </div>

      <div class="flex-1" />

      <Motion
        class="text-sm px-2"
        :key="currentTime"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :transition="{ duration: 0.3 }"
      >
        {{ currentTime }}
      </Motion>
      <Motion
        class="text-xl ml-2"
        :animate="{ y: [0, -3, 0] }"
        :transition="{ repeat: Infinity, duration: 2 }"
      >🐱</Motion>
    </Motion>

    <StartMenu />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Motion } from 'motion-v'
import StartMenu from '~/components/ui/StartMenu.vue'
import { useTaskbar } from '~/composables/useTaskbar'
import { useWindows } from '~/composables/useWindows'

const { toggleStart } = useTaskbar()
const { windows, toggle } = useWindows()

const currentTime = ref('')
const titles: Record<string, string> = {
  music: 'Música',
  snake: 'Snake',
  calc: 'Calc',
  gallery: 'Fotos',
  notes: 'Notas',
  tictactoe: '3 en raya',
  love: 'Love',
  amorcitos: 'Amorcitos'
}

onMounted(() => {
  const update = () => {
    const now = new Date()
    currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  update()
  setInterval(update, 15000)
})
</script>
