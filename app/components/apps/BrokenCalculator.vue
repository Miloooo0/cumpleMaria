<template>
  <div class="w-48 flex flex-col items-center">
    <div class="mb-2 text-pink-700 font-semibold">🧮 Calculadora</div>
    <input v-model.number="a" type="number" class="border rounded px-1 mb-1 w-full" />
    <input v-model.number="b" type="number" class="border rounded px-1 mb-1 w-full" />
    <div class="grid grid-cols-2 gap-1 w-full mb-2">
      <button class="bg-pink-200 rounded" @click="calc('+')">+</button>
      <button class="bg-pink-200 rounded" @click="calc('-')">-</button>
      <button class="bg-pink-200 rounded" @click="calc('*')">×</button>
      <button class="bg-pink-200 rounded" @click="calc('/')">÷</button>
    </div>
    <div class="w-full bg-pink-50 p-2 rounded text-center min-h-[2rem]">{{ result }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const a = ref(0)
const b = ref(0)
const result = ref('')

const messages = [
  'Muchísimo 💖',
  'Poquitito 🐣',
  'Infinito 💫',
  '🦄43',
  'Error 404: amor no encontrado',
  'Un montón y medio',
  'Cuarenta y gato 🐱',
  'El doble de lo que piensas',
  'Calculando... Nah, da igual',
  'Amor dividido por cero 💥',
  '¿Tú qué crees? 💅',
  'No tengo ganas de contar',
  'sí',
  'Se fue a hacer la croqueta 🐾',
  'Error cósmico 🌌',
  'Magia pura ✨',
  'Pregunta en otro universo',
  'Eso no se pregunta 😳',
  'Demasiado para explicar',
  '∞ y más allá 🚀',
  'Sumado con ternura 💓',
  'Cachito de cielo',
  'Recalculando... todavía no',
  'Eso es confidencial 😼',
  'Solo lo sabe el gatito 🐈',
  'Yo qué sé, soy una calculadora rota',
  '42... ¿no era esa la respuesta? 🤖',
  'Beso al cuadrado 😘²',
  '¿Más que ayer? Sí.',
  'Ternura comprimida en bytes',
  '5 + amor = tú',
  'Rompe-matemáticas 😵‍💫'
]

function calc(op: string) {
  const msg = messages[Math.floor(Math.random() * messages.length)]
  result.value = `${a.value} ${op} ${b.value} = ${msg}`
}
</script>
