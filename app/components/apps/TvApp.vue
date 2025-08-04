<template>
  <div class="p-4 w-72 text-center">
    <div class="border-4 border-gray-800 bg-black rounded-lg h-40 flex items-center justify-center mb-2">
      <template v-if="channels[index].type === 'gif'">
        <img :src="channels[index].value" class="h-full object-contain" />
      </template>
      <template v-else>
        <span class="text-white">{{ channels[index].value }}</span>
      </template>
    </div>
    <div class="flex justify-center gap-2 text-sm">
      <button @click="prev" class="px-2 bg-pink-100 rounded">◀️</button>
      <button @click="next" class="px-2 bg-pink-100 rounded">▶️</button>
      <input type="range" min="0" max="1" step="0.1" v-model="vol" class="w-24" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const channels = [
  { type: 'gif', value: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif' },
  { type: 'text', value: 'Hola María 💖' },
  { type: 'gif', value: 'https://media.giphy.com/media/mlvseq9yvZhba/giphy.gif' }
]
const index = ref(0)
const vol = ref(0.5)
function next() {
  index.value = (index.value + 1) % channels.length
}
function prev() {
  index.value = (index.value - 1 + channels.length) % channels.length
}
</script>
