<template>
  <Motion
    class="absolute bg-white rounded-2xl shadow-xl border border-pink-100 overflow-hidden"
    :class="{ 'rounded-none': maximized }"
    :style="styleObject"
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
        <button @click="toggleMaximize" class="hover:text-pink-900">▢</button>
        <button @click="closeWindow" class="hover:text-pink-900">✕</button>
      </div>
    </div>
    <div class="p-4 bg-white w-full h-[calc(100%-32px)] overflow-auto">
      <slot />
    </div>
  </Motion>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Motion } from 'motion-v'
import { useWindows } from '~/composables/useWindows'

const props = defineProps<{ id: string; title: string; x?: number; y?: number; w?: number; h?: number }>()
const { close, toggle } = useWindows()
const width = ref(props.w ?? 384)
const height = ref(props.h ?? 384)
const position = ref({ x: props.x ?? 0, y: props.y ?? 0 })
const maximized = ref(false)
const styleObject = computed(() =>
  maximized.value
    ? { left: '0px', top: '0px', width: '100vw', height: '100vh' }
    : {
        left: position.value.x + 'px',
        top: position.value.y + 'px',
        width: width.value + 'px',
        height: height.value + 'px',
      }
)
let startX = 0
let startY = 0
let dragging = false

function startDrag(e: MouseEvent) {
  if (maximized.value) return
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

function toggleMaximize() {
  maximized.value = !maximized.value
}

onMounted(() => {
  if (props.x === undefined) position.value.x = window.innerWidth / 2 - width.value / 2
  if (props.y === undefined) position.value.y = window.innerHeight / 2 - height.value / 2
})
</script>
