<template>
  <div class="w-48 flex flex-col items-center">
    <div class="mb-2 text-pink-700 font-semibold">🧮 Calculadora rota</div>
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

const messages = ['Muchísimo', 'Poquitito', 'Infinito 💫', '🦄43', 'Error 404 amor']

function calc(op: string) {
  const msg = messages[Math.floor(Math.random() * messages.length)]
  result.value = `${a.value} ${op} ${b.value} = ${msg}`
}
</script>
