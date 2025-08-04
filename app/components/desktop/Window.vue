<template>
  <Motion
    class="absolute bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden"
    :style="{ left: position.x + 'px', top: position.y + 'px' }"
    :initial="{ opacity: 0, scale: 0.9 }"
    :animate="{ opacity: 1, scale: 1 }"
    :exit="{ opacity: 0, scale: 0.9 }"
  >
    <div
      class="bg-pink-200 text-pink-800 px-3 py-1 flex justify-between items-center cursor-move"
      @mousedown.prevent="startDrag"
    >
      <span class="text-sm">{{ title }}</span>
      <div class="flex gap-1">
        <button @click="minimize" class="hover:text-pink-900">_</button>
        <button @click="closeWindow" class="hover:text-pink-900">✕</button>
      </div>
    </div>
    <div class="p-4 bg-white">
      <slot />
    </div>
  </Motion>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Motion } from 'motion-v'
import { useWindows } from '~/composables/useWindows'

const props = defineProps<{ id: string; title: string; x?: number; y?: number }>()
const { close, toggle } = useWindows()

const position = ref({ x: props.x ?? 100, y: props.y ?? 100 })
let startX = 0
let startY = 0
let dragging = false

function startDrag(e: MouseEvent) {
  dragging = true
  startX = e.clientX - position.value.x
  startY = e.clientY - position.value.y
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', endDrag)
}

function onMove(e: MouseEvent) {
  if (!dragging) return
  position.value = { x: e.clientX - startX, y: e.clientY - startY }
}

function endDrag() {
  dragging = false
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', endDrag)
}

function closeWindow() {
  close(props.id)
}

function minimize() {
  toggle(props.id)
}
</script>
