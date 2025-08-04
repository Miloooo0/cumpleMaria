<template>
  <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
    <Motion
      v-for="(el, i) in elements"
      :key="i"
      class="absolute text-3xl opacity-80"
      :style="{ top: el.top + '%', left: el.left + '%' }"
      :animate="{ y: [0, -el.float, 0] }"
      :transition="{ duration: el.duration, repeat: Infinity, repeatType: 'reverse' }"
    >
      <component :is="el.component" />
    </Motion>
  </div>
</template>

<script setup lang="ts">
import { h } from 'vue'
import { Motion } from 'motion-v'

const elements = [
  { component: () => h('span', '💖'), top: 20, left: 10, float: 20, duration: 8 },
  { component: () => h('span', '🌟'), top: 70, left: 80, float: 15, duration: 6 },
  { component: () => h('img', { src: '/cute/cat.svg', class: 'w-8 h-8' }), top: 40, left: 50, float: 25, duration: 10 }
]
</script>
