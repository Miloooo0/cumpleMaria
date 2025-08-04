<template>
  <div class="p-2 w-72">
    <canvas
      ref="canvas"
      width="256"
      height="256"
      class="border border-pink-200 bg-white cursor-crosshair"
      @mousedown="start"
      @mousemove="draw"
      @mouseup="end"
      @mouseleave="end"
    ></canvas>
    <div class="flex items-center gap-2 mt-2 text-sm">
      <input type="color" v-model="color" />
      <input type="range" min="1" max="20" v-model="size" class="w-24" />
      <button @click="clear" class="px-2 py-1 bg-pink-100 rounded">🧽</button>
      <button @click="save" class="px-2 py-1 bg-pink-200 rounded">Guardar</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const canvas = ref<HTMLCanvasElement | null>(null)
const drawing = ref(false)
const color = ref('#000000')
const size = ref(5)

function getCtx() {
  return canvas.value ? canvas.value.getContext('2d') : null
}

function start(e: MouseEvent) {
  drawing.value = true
  const ctx = getCtx()
  if (!ctx) return
  ctx.strokeStyle = color.value
  ctx.lineWidth = size.value
  ctx.beginPath()
  ctx.moveTo(e.offsetX, e.offsetY)
}

function draw(e: MouseEvent) {
  if (!drawing.value) return
  const ctx = getCtx()
  if (!ctx) return
  ctx.lineTo(e.offsetX, e.offsetY)
  ctx.stroke()
}

function end() {
  drawing.value = false
}

function clear() {
  const ctx = getCtx()
  if (!ctx) return
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
}

function save() {
  alert('Dibujo guardado en mi corazón :3')
}
</script>
