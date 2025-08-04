<template>
  <div class="absolute bottom-16 left-4 flex flex-col items-center cursor-pointer select-none" @click="petClick">
    <Motion
      class="text-4xl"
      :animate="{ y: [0, -5, 0] }"
      :transition="{ repeat: Infinity, duration: 2 }"
    >{{ pet }}</Motion>
    <div class="mt-1 bg-white/70 backdrop-blur-sm text-pink-700 text-xs px-2 py-1 rounded-xl">
      {{ message }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Motion } from 'motion-v'

const phrases = [
  '¡Qué guapa estás hoy!',
  '¿Jugamos al 3 en raya?',
  '¿Escuchamos música?'
]
const message = ref(phrases[0])
const pet = ref('🐱')

function randomMessage() {
  message.value = phrases[Math.floor(Math.random() * phrases.length)]
}

function petClick() {
  pet.value = '😸'
  randomMessage()
  setTimeout(() => (pet.value = '🐱'), 1000)
}

setInterval(randomMessage, 10000)
</script>
