<template>
  <div>
    <Motion
      class="fixed bottom-0 left-0 right-0 h-12 bg-rose-100 border-t border-pink-200 flex items-center px-3 shadow-inner z-50 relative"
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

      <div class="text-sm px-2">{{ currentTime }}</div>
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
  tictactoe: '3 en raya'
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
