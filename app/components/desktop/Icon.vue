<template>
  <Motion
    class="absolute text-center cursor-pointer select-none z-10 rounded-xl transition-shadow"
    :class="sizeClass"
    :style="{ left: position.x + 'px', top: position.y + 'px' }"
    @dblclick="openApp"
    @mousedown.prevent="startDrag"
    :while-hover="{ scale: 1.1 }"
  >
    <div class="flex flex-col items-center justify-center h-full w-full">
      <slot />
      <span class="mt-1 text-xs text-pink-700">{{ label }}</span>
    </div>
  </Motion>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { Motion } from 'motion-v'
import { useWindows } from '~/composables/useWindows'
import { useIconMode } from '~/composables/useIconMode'

const props = defineProps<{ app: string; label: string; x?: number; y?: number }>()
const { open } = useWindows()
const { mode } = useIconMode()

const position = ref({ x: props.x ?? 20, y: props.y ?? 20 })
let startX = 0
let startY = 0
let dragging = false

const sizeClass = computed(() =>
  mode.value === 'large'
    ? 'w-20 h-20 text-4xl hover:shadow-lg hover:shadow-pink-200'
    : 'w-12 h-12 text-2xl hover:shadow-md hover:shadow-pink-200'
)

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
