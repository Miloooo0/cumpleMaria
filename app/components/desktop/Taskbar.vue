<template>
  <div>
    <ClientOnly>
      <Motion
        class="fixed bottom-0 left-0 w-full h-12 bg-rose-100 backdrop-blur-sm border-t border-pink-200 flex items-center px-3 shadow-inner rounded-t-xl z-50"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :transition="{ duration: 0.4 }"
      >
        <Motion
          tag="button"
          @click="toggleStart"
          class="w-8 h-8 flex items-center justify-center rounded hover:bg-pink-200"
          :while-hover="{ scale: 1.1 }"
        >
          🪟
        </Motion>

        <div class="flex gap-2 ml-4">
          <Motion
            v-for="(win, id) in windows"
            :key="id"
            tag="button"
            class="w-8 h-8 flex items-center justify-center rounded hover:bg-pink-200"
            :class="win.minimized ? 'opacity-50' : 'bg-pink-200'"
            @click="restore(id, win.minimized)"
            :while-hover="{ scale: 1.1 }"
          >
            {{ icons[id] || '❓' }}
          </Motion>
        </div>

        <div class="flex-1" />

        <Motion
          class="text-sm px-2"
          :key="currentTime"
          :initial="{ opacity: 0 }"
          :animate="{ opacity: 1 }"
          :transition="{ duration: 0.3 }"
          :while-hover="{ scale: 1.1 }"
        >
          {{ currentTime }}
        </Motion>
        <Motion
          class="text-xl ml-2"
          :animate="{ y: [0, -3, 0] }"
          :transition="{ repeat: Infinity, duration: 2 }"
        >
          {{ emoji }}
        </Motion>
      </Motion>
    </ClientOnly>

    <StartMenu />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Motion } from 'motion-v'
import StartMenu from '~/components/desktop/StartMenu.vue'
import { useTaskbar } from '~/composables/useTaskbar'
import { useWindows } from '~/composables/useWindows'

const { toggleStart } = useTaskbar()
const { windows } = useWindows()

const currentTime = ref('')
const emoji = '🐱'
const icons: Record<string, string> = {
  music: '🎵',
  snake: '🐍',
  calc: '🧮',
  gallery: '🖼️',
  notes: '📝',
  tictactoe: '⭕',
  love: '💘',
  amorcitos: '📁'
}

function restore(id: string, minimized: boolean) {
  windows.value[id].minimized = !minimized
}

onMounted(() => {
  const update = () => {
    const now = new Date()
    currentTime.value = now.toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit'
    })
  }
  update()
  setInterval(update, 60000)
})
</script>

