<template>
  <AnimatePresence>
    <Motion
      v-if="startOpen"
      key="start"
      class="fixed bottom-12 left-0 w-64 bg-white rounded-xl shadow-xl border border-pink-100 p-4"
      :initial="{ opacity: 0, y: 20 }"
      :animate="{ opacity: 1, y: 0 }"
      :exit="{ opacity: 0, y: 20 }"
      :transition="{ duration: 0.3 }"
    >
      <h3 class="font-semibold text-pink-700 mb-2">📂 Inicio</h3>
      <ul class="grid grid-cols-2 gap-3">
        <li class="text-center text-sm hover:scale-105 transition cursor-pointer">💌 Carta</li>
        <li class="text-center text-sm hover:scale-105 transition cursor-pointer">🎮 Juegos</li>
        <li class="text-center text-sm hover:scale-105 transition cursor-pointer">🖼️ Galería</li>
      </ul>
      <button @click="toggleStart" class="block mt-4 text-xs text-right text-pink-500 hover:underline">Cerrar</button>
    </Motion>
  </AnimatePresence>
</template>

<script setup lang="ts">
const { startOpen, toggleStart } = useTaskbar()
</script>
