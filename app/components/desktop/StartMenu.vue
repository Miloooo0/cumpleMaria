<template>
  <ClientOnly>
    <AnimatePresence>
      <Motion
        v-if="startOpen"
        key="start"
        class="fixed bottom-12 left-0 w-64 bg-white rounded-xl shadow-xl border border-pink-100 p-4"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: 20 }"
        :transition="{ duration: 0.3 }"
      >
        <h3 class="font-semibold text-pink-700 mb-2">📂 Inicio</h3>
        <ul class="grid grid-cols-2 gap-3">
          <li
            v-for="item in items"
            :key="item.id"
            class="text-center text-sm hover:scale-105 transition cursor-pointer"
            @click="open(item.id); toggleStart()"
          >
            {{ item.icon }} {{ item.label }}
          </li>
        </ul>
        <div class="mt-4 flex items-center justify-between text-xs">
          <button @click="toggle" class="px-2 py-1 rounded bg-rose-100 text-pink-700">
            {{ mode === 'large' ? 'Iconos grandes' : 'Iconos mini' }}
          </button>
          <button @click="toggleStart" class="text-pink-500 hover:underline">Cerrar</button>
        </div>
      </Motion>
    </AnimatePresence>
  </ClientOnly>
</template>

<script setup lang="ts">
import { Motion, AnimatePresence } from 'motion-v'
import { useTaskbar } from '~/composables/useTaskbar'
import { useWindows } from '~/composables/useWindows'
import { useIconMode } from '~/composables/useIconMode'

const { startOpen, toggleStart } = useTaskbar()
const { open } = useWindows()
const { mode, toggle } = useIconMode()

const items = [
  { id: 'music', label: 'Música', icon: '🎵' },
  { id: 'snake', label: 'Snake', icon: '🐍' },
  { id: 'calc', label: 'Calc', icon: '🧮' },
  { id: 'notes', label: 'Notas', icon: '📝' },
  { id: 'tictactoe', label: '3 en raya', icon: '⭕' },
  { id: 'love', label: 'LoveTest', icon: '💘' },
  { id: 'amorcitos', label: 'Amorcitos', icon: '📁' },
  { id: 'dibuja', label: 'Dibuja', icon: '🎨' },
  { id: 'sabias', label: 'Sabías que', icon: '🧠' },
  { id: 'sorpresa', label: 'Sorpresa', icon: '🎁' },
  { id: 'recuerdos', label: 'Recuerdos', icon: '📦' },
  { id: 'tv', label: 'TV', icon: '📺' }
]
</script>
