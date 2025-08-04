<template>
  <div class="p-4 text-center">
    <Motion
      class="bg-pink-50 p-4 rounded-xl"
      :initial="{ scale: 0.8 }"
      :animate="{ scale: 1 }"
    >
      <div v-if="item.type === 'gif'">
        <img :src="item.value" class="w-48 h-48 object-contain mx-auto" />
      </div>
      <div v-else class="text-lg">{{ item.value }}</div>
    </Motion>
  </div>
</template>

<script setup lang="ts">
import { Motion } from 'motion-v'

const items = [
  { type: 'gif', value: 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif' },
  { type: 'text', value: 'Frase de amor: te adoro 💞' },
  { type: 'text', value: 'Cupón de 1 abrazo digital 🤗' },
  { type: 'text', value: 'Icono sorpresa: 🐰' }
]

const item = items[Math.floor(Math.random() * items.length)]
</script>
