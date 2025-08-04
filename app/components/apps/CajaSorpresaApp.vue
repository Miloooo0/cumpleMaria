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
  { type: 'gif', value: 'https://media.giphy.com/media/VbnUQpnihPSIgIXuZv/giphy.gif' }, // conejito
  { type: 'text', value: 'Icono sorpresa: 🐙' },
  { type: 'gif', value: 'https://media.giphy.com/media/3ohzdYJK1wAdPWVk88/giphy.gif' }, // corazón pixel
  { type: 'gif', value: 'https://media.giphy.com/media/L95W4wv8nnb9K/giphy.gif' }, // gato bailando
  { type: 'text', value: 'Te doy un abrazo invisible ahora mismo' },
  { type: 'text', value: 'Cupón de 1 besito con sonido “mua”' },
  { type: 'gif', value: 'https://media.giphy.com/media/JIX9t2j0ZTN9S/giphy.gif' }, // gato tecleando
  { type: 'gif', value: 'https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif' },
  { type: 'text', value: 'Consejo del día: acaricia un peluche (o una sardina que se deje)' },
  { type: 'text', value: 'Nuevo sticker desbloqueado: 🌸✨🥺' },
  { type: 'gif', value: 'https://media.giphy.com/media/l0ExncehJzexFpRHq/giphy.gif' }, // osito bailando
  { type: 'text', value: 'Premio emocional: estar contigo (enorabuena!)' },
  { type: 'text', value: 'Mensaje secreto: me gustas cuando pones esa carita' },
  { type: 'text', value: 'Cupón de 1 siesta en silencio (este hasta lo usas pa que me calle)' },
  { type: 'gif', value: 'https://media.giphy.com/media/13borq7Zo2kulO/giphy.gif' }, // gato contento
  { type: 'gif', value: 'https://media.giphy.com/media/duzpaTbCUy9Vu/giphy.gif' } // perro emocionado
]


const item = items[Math.floor(Math.random() * items.length)]
</script>
