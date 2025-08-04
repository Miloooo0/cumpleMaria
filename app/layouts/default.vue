<template>
  <div class="min-h-screen flex flex-col bg-rose-50 text-pink-800 font-sans relative overflow-hidden">

    <!-- Header (barra superior estilo escritorio) -->
    <motion.div
        class="w-full bg-rose-100 shadow-md p-3 flex justify-between items-center border-b border-pink-200"
        :initial="{ opacity: 0, y: -20 }"
        :animate="{ opacity: 1, y: 0 }"
        transition="{ duration: 0.6, ease: 'easeOut' }"
    >
      <h1 class="text-lg font-bold tracking-wide">💖 Cumple María OS</h1>

      <motion.div
          class="cursor-pointer px-4 py-1 rounded-lg bg-white text-pink-700 shadow hover:shadow-xl transition-all"
          :whileHover="{ scale: 1.2 }"
          :transition="{ type: 'spring', stiffness: 200 }"
      >
        🕒 {{ currentTime }}
      </motion.div>
    </motion.div>

    <!-- Contenido principal -->
    <main class="flex-1 p-6">
      <slot />
    </main>

    <!-- Footer / Barra de tareas -->
    <motion.div
        class="w-full bg-rose-100 border-t border-pink-200 p-2 px-6 flex justify-between items-center shadow-inner relative"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        transition="{ duration: 0.6, delay: 0.3 }"
    >
      <!-- Iconos de tareas -->
      <div class="flex gap-6 items-center text-sm">
        <button @click="toggleWindow('inicio')" class="hover:bg-pink-200 px-3 py-1 rounded transition">🏠</button>
        <button @click="toggleWindow('carta')" class="hover:bg-pink-200 px-3 py-1 rounded transition">💌</button>
        <button @click="toggleWindow('juegos')" class="hover:bg-pink-200 px-3 py-1 rounded transition">🎮</button>
        <button @click="toggleWindow('galeria')" class="hover:bg-pink-200 px-3 py-1 rounded transition">🖼️</button>
      </div>

      <!-- Reproductor en esquina -->
      <motion.div
          class="absolute bottom-16 right-6 bg-white shadow-lg p-3 rounded-2xl border border-pink-100 flex items-center gap-2 backdrop-blur-sm"
          :initial="{ opacity: 0, y: 40 }"
          :animate="{ opacity: 1, y: 0 }"
          transition="{ delay: 0.7 }"
      >
        <select v-model="selectedSong" class="text-sm bg-white rounded px-2 py-1 border-pink-200">
          <option v-for="song in songs" :key="song.file" :value="song.file">
            {{ song.name }}
          </option>
        </select>
        <button @click="playSong(selectedSong)" class="text-pink-600 hover:text-pink-800">▶️</button>
        <audio ref="audioRef" controls class="hidden" />
      </motion.div>
    </motion.div>

    <!-- Ventanas flotantes -->
    <transition name="fade">
      <div
          v-if="openWindow === 'inicio'"
          class="absolute bottom-20 left-6 bg-white rounded-xl shadow-xl border border-pink-100 p-4 w-64 backdrop-blur-md"
      >
        <h3 class="font-semibold text-pink-700 mb-2">📂 Inicio</h3>
        <ul class="grid grid-cols-2 gap-3">
          <li class="text-center text-sm hover:scale-105 transition cursor-pointer">💌 Carta</li>
          <li class="text-center text-sm hover:scale-105 transition cursor-pointer">🎮 Juegos</li>
          <li class="text-center text-sm hover:scale-105 transition cursor-pointer">🖼️ Galería</li>
        </ul>
        <button @click="openWindow = null" class="block mt-4 text-xs text-right text-pink-500 hover:underline">Cerrar</button>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const currentTime = ref('')
const openWindow = ref<null | 'inicio' | 'carta' | 'juegos' | 'galeria'>(null)

const audioRef = ref<HTMLAudioElement | null>(null)
const selectedSong = ref('/songs/01-cancion.mp3')

const songs = [
  { name: 'Canción 1', file: '/songs/01-cancion.mp3' },
  { name: 'Canción 2', file: '/songs/02-cancion.mp3' },
  { name: 'Canción 3', file: '/songs/03-cancion.mp3' }
]

function playSong(file: string) {
  if (audioRef.value) {
    audioRef.value.src = file
    audioRef.value.play()
  }
}

function toggleWindow(name: typeof openWindow.value) {
  openWindow.value = openWindow.value === name ? null : name
}

onMounted(() => {
  const updateClock = () => {
    const now = new Date()
    currentTime.value = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  }
  updateClock()
  setInterval(updateClock, 15000)
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}
</style>
