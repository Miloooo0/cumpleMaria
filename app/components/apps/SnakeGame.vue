<template>
  <div class="w-64 h-64 bg-pink-50 grid grid-cols-16 grid-rows-16">
    <div
      v-for="i in 256"
      :key="i"
      :class="cellClass(i)"
      class="w-4 h-4"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const size = 16
const snake = ref([{ x: 8, y: 8 }])
const dir = ref<'up'|'down'|'left'|'right'>('right')
const food = ref({ x: 4, y: 4 })

function cellClass(i: number) {
  const x = (i - 1) % size
  const y = Math.floor((i - 1) / size)
  if (snake.value.some(p => p.x === x && p.y === y)) return 'bg-pink-400'
  if (food.value.x === x && food.value.y === y) return 'bg-pink-700'
  return 'bg-transparent'
}

function move() {
  const head = { ...snake.value[0] }
  if (dir.value === 'up') head.y--
  if (dir.value === 'down') head.y++
  if (dir.value === 'left') head.x--
  if (dir.value === 'right') head.x++

  if (head.x < 0 || head.y < 0 || head.x >= size || head.y >= size || snake.value.some(p => p.x === head.x && p.y === head.y)) {
    snake.value = [{ x: 8, y: 8 }]
    dir.value = 'right'
    return
  }

  snake.value.unshift(head)
  if (head.x === food.value.x && head.y === food.value.y) {
    food.value = { x: Math.floor(Math.random() * size), y: Math.floor(Math.random() * size) }
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
  setInterval(move, 200)
})
</script>
