<template>
  <div class="p-4">
    <div class="grid grid-cols-3 gap-4">
      <div
        v-for="img in images"
        :key="img"
        class="text-center cursor-pointer"
        @click="open(img)"
      >
        <img :src="`/amorcitos/${img}`" class="w-20 h-20 object-cover rounded border border-pink-200" />
        <span class="block mt-1 text-xs">❤️{{ img }}</span>
      </div>
    </div>
    <AnimatePresence>
      <Motion
        v-if="selected"
        class="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
        @click="selected = ''"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
        :exit="{ opacity: 0 }"
      >
        <Motion
          class="bg-white p-2 rounded-xl"
          :initial="{ scale: 0.8 }"
          :animate="{ scale: 1 }"
        >
          <img :src="`/amorcitos/${selected}`" class="w-64 h-64 object-cover rounded" />
        </Motion>
      </Motion>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

const images = [
  'Img01.jpeg',
  'Img02.jpeg',
  'Img03.jpeg',
  'Img04.jpeg',
  'Img05.jpeg',
  'Img06.jpeg',
  'Img07.jpeg',
  'Img08.jpeg',
  'Img09.jpeg',
  'Img10.jpeg',
  'Img11.jpeg',
  'Img12.jpeg',
  'Img13.jpeg'
]
const selected = ref('')

function open(name: string) {
  selected.value = name
}
</script>
