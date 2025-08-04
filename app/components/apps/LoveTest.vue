<template>
  <div class="w-72 h-60 relative overflow-hidden">
    <AnimatePresence>
      <Motion
        v-if="current < questions.length"
        :key="current"
        class="absolute inset-0 bg-rose-100 rounded-xl flex flex-col justify-center items-center p-4 text-center"
        :initial="{ x: 100, opacity: 0 }"
        :animate="{ x: 0, opacity: 1 }"
        :exit="{ x: -100, opacity: 0 }"
      >
        <p class="flex-1 flex items-center justify-center text-lg">{{ questions[current] }}</p>
        <div class="flex gap-4 mb-4">
          <Motion
            as="button"
            @click="answer"
            class="px-4 py-2 bg-pink-300 rounded-full"
            :whileTap="{ scale: 0.9 }"
          >Sí</Motion>
          <Motion
            as="button"
            @click="answer"
            class="px-4 py-2 bg-rose-300 rounded-full"
            :whileTap="{ scale: 0.9 }"
          >No</Motion>
        </div>
      </Motion>
      <Motion
        v-else
        key="end"
        class="absolute inset-0 bg-pink-50 rounded-xl flex items-center justify-center p-4 text-center"
        :initial="{ opacity: 0 }"
        :animate="{ opacity: 1 }"
      >
        <div class="text-pink-700 text-xl">
          💖 Resultado: Te quiere, muchísimo. Aunque lo niegue.
        </div>
      </Motion>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

const questions = [
  '¿Me quieres?',
  '¿Me dejarías comer la última croqueta?',
  '¿Me harías un té si estoy triste?'
]

const current = ref(0)

function answer() {
  current.value++
}
</script>
