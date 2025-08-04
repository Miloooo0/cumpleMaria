<template>
  <div class="absolute bottom-16 left-4 flex flex-col items-center select-none">
    <Motion
      class="text-4xl cursor-pointer"
      :animate="{ y: [0, -6, 0] }"
      :transition="{ repeat: Infinity, duration: 2 }"
      @click="petClick"
    >{{ emoji }}</Motion>
    <div class="mt-1 bg-white/70 backdrop-blur-sm text-pink-700 text-xs px-2 py-1 rounded-xl">
      {{ message }}
    </div>
    <div class="flex gap-1 mt-2">
      <button @click.stop="feed" class="bg-pink-100 px-2 py-1 rounded text-xs">🍖</button>
      <button @click.stop="play" class="bg-pink-100 px-2 py-1 rounded text-xs">🎾</button>
      <button @click.stop="sleep" class="bg-pink-100 px-2 py-1 rounded text-xs">😴</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { Motion } from 'motion-v'

type Mood = 'happy' | 'hungry' | 'sleepy' | 'bored'

const state = ref<Mood>('happy')
const message = ref('¡Hola!')
const phrases = [
  '¡Qué guapa estás hoy!',
  '¿Jugamos al 3 en raya?',
  '¿Escuchamos música?',
  '¡Acaríciame más!'
]

const emoji = computed(() => {
  return {
    happy: '😺',
    hungry: '😿',
    sleepy: '😴',
    bored: '😾'
  }[state.value]
})

function petClick() {
  message.value = phrases[Math.floor(Math.random() * phrases.length)]
}

function feed() {
  state.value = 'happy'
  message.value = 'Nyam nyam 😋'
  resetTimer()
}

function play() {
  state.value = 'happy'
  message.value = '¡Qué divertido!'
  resetTimer()
}

function sleep() {
  state.value = 'sleepy'
  message.value = 'Zzz...'
  resetTimer()
}

let timer: ReturnType<typeof setInterval>

function resetTimer() {
  clearInterval(timer)
  timer = setInterval(() => {
    if (state.value === 'happy') state.value = 'bored'
    else if (state.value === 'bored') state.value = 'hungry'
  }, 15000)
}

function checkTime() {
  const h = new Date().getHours()
  if (h >= 22 || h < 6) state.value = 'sleepy'
}

onMounted(() => {
  checkTime()
  resetTimer()
})

onUnmounted(() => {
  clearInterval(timer)
})
</script>
