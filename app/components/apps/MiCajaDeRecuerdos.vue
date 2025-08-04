<template>
  <div class="p-4 w-72">
    <ul class="mb-2 max-h-40 overflow-auto">
      <li v-for="(m, i) in memories" :key="i" class="text-sm mb-1">
        <span class="font-semibold">{{ m.date }} - </span>{{ m.text }}
      </li>
    </ul>
    <div class="flex gap-2 text-sm">
      <input v-model="newText" class="flex-1 border border-pink-200 rounded px-2 py-1" placeholder="Nuevo recuerdo" />
      <button @click="add" class="px-2 bg-pink-200 rounded">Añadir</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

interface Memory { date: string; text: string }

const memories = ref<Memory[]>([
      { date: '18/12/2023', text: 'La primera vez que nos vimos en persona' },
      { date: '18/12/2023', text: 'Nuestro primer beso. "me acabas de dar un beso?"' },
      { date: '20/12/2023', text: 'El día que decidimos ser novios (oficialmente)' },
      { date: '18/12/2023', text: 'Dormir abrazaditos por primera vez' },
      { date: 'nunca', text: 'Nos viciamos a "Cómo conocí a vuestra madre" 💡' },
      { date: '23/12/2023', text: 'Empezamos The Office y tú eras claramente Pam' },
      { date: '24/06/2024', text: 'Nos comimos un elao de la Lauri' }
    ]
)

const newText = ref('')

function add() {
  if (!newText.value.trim()) return
  const d = new Date()
  const date = d.toLocaleDateString('es-ES')
  memories.value.push({ date, text: newText.value })
  newText.value = ''
}
</script>
