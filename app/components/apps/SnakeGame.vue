<template>
  <div class="relative">
    <div
      class="bg-pink-50 rounded-xl border-2 border-pink-200 overflow-hidden"
      :style="{
        width: boardSize + 'px',
        height: boardSize + 'px',
        display: 'grid',
        gridTemplateColumns: `repeat(${size}, 1fr)`,
        gridTemplateRows: `repeat(${size}, 1fr)`,
      }"
    >
      <div
        v-for="i in size * size"
        :key="i"
        class="w-full h-full flex items-center justify-center transition-colors"
        :class="cellClass(i)"
      >
        <span v-if="isFood(i)">🍎</span>
      </div>
    </div>

    <ClientOnly>
      <AnimatePresence>
        <Motion
          v-if="showLoveMessage"
          key="love"
          class="absolute inset-0 flex flex-col items-center justify-center bg-white/80 backdrop-blur-sm text-center p-4 rounded-xl"
          :initial="{ opacity: 0, scale: 0.8 }"
          :animate="{ opacity: 1, scale: 1 }"
          :exit="{ opacity: 0, scale: 0.8 }"
          :transition="{ duration: 0.3 }"
        >
          <p class="text-lg">¡Has ganado!</p>
          <p class="mt-2">Eso significa que me quieres tanto como yo a ti! (y que no te rindes y eres buena al snake)</p>
          <button
            class="mt-4 px-3 py-1 bg-pink-200 rounded hover:bg-pink-300"
            @click="exit"
          >Volver al escritorio</button>
        </Motion>
      </AnimatePresence>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { AnimatePresence, Motion } from 'motion-v'
import { useWindows } from '~/composables/useWindows'

const size = 16
const cell = 24
const boardSize = size * cell
const snake = ref([{ x: 8, y: 8 }])
const dir = ref<'up' | 'down' | 'left' | 'right'>('right')
const food = ref({ x: 4, y: 4 })
const applesEaten = ref(0)
const gameOver = ref(false)
const showLoveMessage = ref(false)
let timer: any

function indexToPos(i: number) {
  return { x: (i - 1) % size, y: Math.floor((i - 1) / size) }
}

function isFood(i: number) {
  const { x, y } = indexToPos(i)
  return food.value.x === x && food.value.y === y
}

function cellClass(i: number) {
  const { x, y } = indexToPos(i)
  if (snake.value.some((p) => p.x === x && p.y === y)) return 'bg-pink-300 rounded'
  return 'bg-transparent'
}

function move() {
  const head = { ...snake.value[0] }
  if (dir.value === 'up') head.y--
  if (dir.value === 'down') head.y++
  if (dir.value === 'left') head.x--
  if (dir.value === 'right') head.x++

  if (
    head.x < 0 ||
    head.y < 0 ||
    head.x >= size ||
    head.y >= size ||
    snake.value.some((p) => p.x === head.x && p.y === head.y)
  ) {
    gameOver.value = true
    snake.value = [{ x: 8, y: 8 }]
    dir.value = 'right'
    return
  }

  snake.value.unshift(head)
  if (head.x === food.value.x && head.y === food.value.y) {
    food.value = {
      x: Math.floor(Math.random() * size),
      y: Math.floor(Math.random() * size),
    }
    applesEaten.value++
    if (applesEaten.value >= 10) {
      gameOver.value = true
      showLoveMessage.value = true
      clearInterval(timer)
    }
  } else {
    snake.value.pop()
  }
}

function onKey(e: KeyboardEvent) {
  if (e.key === 'ArrowUp' && dir.value !== 'down') dir.value = 'up'
  if (e.key === 'ArrowDown' && dir.value !== 'up') dir.value = 'down'
  if (e.key === 'ArrowLeft' && dir.value !== 'right') dir.value = 'left'
  if (e.key === 'ArrowRight' && dir.value !== 'left') dir.value = 'right'
}

onMounted(() => {
  window.addEventListener('keydown', onKey)
  timer = setInterval(move, 150)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKey)
  clearInterval(timer)
})

function exit() {
  const { close } = useWindows()
  close('snake')
}
</script>
