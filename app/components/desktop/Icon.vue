<template>
  <div
    class="absolute w-16 text-center cursor-pointer select-none"
    :style="{ left: position.x + 'px', top: position.y + 'px' }"
    @dblclick="openApp"
    @mousedown.prevent="startDrag"
  >
    <div class="flex flex-col items-center">
      <slot />
      <span class="mt-1 text-xs text-pink-700">{{ label }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useWindows } from '~/composables/useWindows'

const props = defineProps<{ app: string; label: string; x?: number; y?: number }>()
const { open } = useWindows()

const position = ref({ x: props.x ?? 20, y: props.y ?? 20 })
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

function openApp() {
  open(props.app)
}
</script>
