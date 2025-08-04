<template>
  <div>
    <div
      v-for="note in notesState"
      :key="note.id"
      class="bg-yellow-100 p-2 rounded shadow w-32 h-32 absolute"
      :style="{ left: note.x + 'px', top: note.y + 'px' }"
      @mousedown.prevent="startDrag(note, $event)"
    >
      <textarea v-model="note.text" class="w-full h-full bg-transparent resize-none" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { notes as base } from '~/utils/notes'

const notesState = reactive(base.map((n, i) => ({ ...n, x: i * 40, y: i * 40 })))
let current: any = null
let startX = 0
let startY = 0

function startDrag(note: any, e: MouseEvent) {
  current = note
  startX = e.clientX - note.x
  startY = e.clientY - note.y
  window.addEventListener('mousemove', onMove)
  window.addEventListener('mouseup', endDrag)
}

function onMove(e: MouseEvent) {
  if (!current) return
  current.x = e.clientX - startX
  current.y = e.clientY - startY
}

function endDrag() {
  current = null
  window.removeEventListener('mousemove', onMove)
  window.removeEventListener('mouseup', endDrag)
}
</script>

<style scoped>
textarea {
  outline: none;
}
</style>
