<template>
  <div class="grid grid-cols-3 gap-2 w-64">
    <img
      v-for="(img, i) in images"
      :key="i"
      :src="img"
      class="w-20 h-20 object-cover rounded cursor-pointer"
      @click="open(i)"
    />
    <AnimatePresence>
      <Motion
        v-if="current !== null"
        key="modal"
        class="fixed inset-0 bg-black/50 flex items-center justify-center"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
      >
        <div class="bg-white p-4 rounded-xl shadow-xl">
          <img :src="images[current]" class="w-64 h-64 object-contain" />
          <div class="flex justify-between mt-2">
            <button @click="prev">⬅️</button>
            <button @click="next">➡️</button>
            <button @click="close" class="text-pink-700">Cerrar</button>
          </div>
        </div>
      </Motion>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

const modules = import.meta.glob('/public/gallery/*.{jpg,png}', { eager: true, as: 'url' })
const images = Object.values(modules)
const current = ref<number | null>(null)

function open(i: number) {
  current.value = i
}
function close() {
  current.value = null
}
function next() {
  if (current.value === null) return
  current.value = (current.value + 1) % images.length
}
function prev() {
  if (current.value === null) return
  current.value = (current.value - 1 + images.length) % images.length
}
</script>
