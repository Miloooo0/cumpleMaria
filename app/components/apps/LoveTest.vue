<template>
  <div class="w-80 h-96 relative overflow-hidden">
    <AnimatePresence v-if="!finished">
      <Motion
        v-for="(q, idx) in questions"
        v-show="current === idx"
        :key="idx"
        class="absolute inset-0 bg-rose-100 rounded-xl flex flex-col justify-center items-center p-4 text-center"
        :initial="{ x: 200, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :exit="{ x: -200, opacity: 0 }"
      >
        <p class="flex-1 flex items-center justify-center text-xl">{{ q }}</p>
        <div class="flex gap-4 mb-4">
          <button @click="next" class="px-4 py-2 bg-rose-300 rounded-full">❌</button>
          <button @click="next" class="px-4 py-2 bg-pink-300 rounded-full">💖</button>
        </div>
      </Motion>
    </AnimatePresence>
    <div v-else class="absolute inset-0 flex items-center justify-center text-2xl bg-pink-50 rounded-xl">
      Te quiere mucho 💖. Más que a nada.
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

const questions = [
  '¿Cuál es su postre favorito?',
  '¿Qué emoji te representa?',
  '¿A dónde iremos de viaje?'
]
const current = ref(0)
const finished = ref(false)

function next() {
  if (current.value < questions.length - 1) current.value++
  else finished.value = true
}
</script>
