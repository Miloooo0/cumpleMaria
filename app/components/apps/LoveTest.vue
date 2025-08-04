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
          LE AMAS AL 100% NO HAY NINGUNA DUDA
        </div>
      </Motion>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

const questions = [
  '¿Me seguirías queriendo si me obsesiono con coleccionar piedras?',
  '¿Si me convierto en un calcetín solitario, buscarías al otro?',
  '¿Qué harías si como la última croqueta y te miro con cara de :o?',
  '¿Me querrías si me peino como personaje de anime en público?',
  '¿Me amarías incluso si no entiendo los finales de las pelis y te pregunto cada 5 minutos?',
  '¿Y si mi forma de decir “te quiero” es lanzarte galletas?',
  '¿Me defenderías si me peleo verbalmente con una paloma en el parque?',
  '¿Me seguirías amando si usara calcetines con sandalias en nuestra cita?',
  '¿Si me pongo celoso del microondas porque te mira mientras cocinas... me calmas o me dejas?',
  '¿Me querrías si todos mis audios empiezan con “escúchame bien porque esto es importante” y no lo son?',
  '¿Seguirías a mi lado si quisiera nombrar a nuestro hijo “pilin”?',
  '¿Me querrías si cada vez que digo “hola” también hago un bailecito obligatorio?',
  '¿Y si me da por hablarle a las plantas como si fueran nuestros hijos?',
  '¿Si me obsesiono con aprender magia solo para sorprenderte en el desayuno, me apoyarías?'
]
const current = ref(0)

function answer() {
  current.value++
}
</script>
