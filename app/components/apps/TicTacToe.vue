<template>
  <div class="w-48">
    <div class="grid grid-cols-3 gap-1">
      <button
        v-for="(cell, i) in board"
        :key="i"
        class="w-16 h-16 bg-pink-50 rounded text-2xl"
        @click="play(i)"
      >{{ cell }}</button>
    </div>
    <div class="mt-2 text-center text-pink-700">{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const board = ref(Array(9).fill(''))
const player = '❌'
const ai = '⭕'
const message = ref('Tu turno')

function play(i: number) {
  if (board.value[i] || winner()) return
  board.value[i] = player
  if (winner()) {
    message.value = 'Eres un papu pro'
    return
  }
  aiTurn()
}

function aiTurn() {
  const empty = board.value.map((v, i) => (v ? -1 : i)).filter(i => i >= 0)
  if (empty.length === 0) {
    message.value = 'Empate'
    return
  }
  const choice = empty[Math.floor(Math.random() * empty.length)]
  board.value[choice] = ai
  if (winner()) message.value = 'No puede ser te ha ganado chatgpt y mira que lo he puesto para que no pueda ganar'
  else message.value = 'Tu turno'
}

function winner() {
  const lines = [
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6]
  ]
  return lines.some(([a,b,c]) => board.value[a] && board.value[a]===board.value[b] && board.value[a]===board.value[c])
}
</script>
