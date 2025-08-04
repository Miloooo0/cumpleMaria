<template>
  <div class="p-4">
    <Motion
      class="bg-yellow-100 p-4 rounded shadow cursor-pointer text-center"
      @click="next"
    >
      {{ facts[index] }}
    </Motion>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Motion } from 'motion-v'

const facts = [
  'Sabías que los gatos tienen más huesos que los humanos?',
  'El corazón humano late más cuando estás cerca',
  'Hoy es un buen día para quererte'
]
const index = ref(0)

function next() {
  index.value = (index.value + 1) % facts.length
}
</script>
