<template>
  <div class="relative">
    <motion.button
      class="w-8 h-8 flex items-center justify-center rounded hover:bg-pink-200"
      :whileHover="{ scale: 1.1 }"
      :transition="{ type: 'spring', stiffness: 300 }"
      @click="togglePlayer"
    >
      🎵
    </motion.button>

    <AnimatePresence>
      <motion.div
        v-if="playerOpen"
        key="player"
        class="absolute bottom-12 left-0 w-56 bg-white rounded-xl shadow-xl border border-pink-100 p-4"
        :initial="{ opacity: 0, y: 20 }"
        :animate="{ opacity: 1, y: 0 }"
        :exit="{ opacity: 0, y: 20 }"
        transition="{ duration: 0.3 }"
      >
        <select v-model="selected" class="w-full text-sm bg-white rounded px-2 py-1 border-pink-200">
          <option v-for="song in songs" :key="song.file" :value="song.file">
            {{ song.name }}
          </option>
        </select>
        <div class="flex gap-2 mt-2 justify-center">
          <button @click="playSong" class="text-pink-600 hover:text-pink-800">▶️</button>
          <button @click="pauseSong" class="text-pink-600 hover:text-pink-800">⏸</button>
        </div>
        <audio ref="audioRef" class="hidden" />
      </motion.div>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { songs } from '~/utils/songs'

const { playerOpen, togglePlayer } = useTaskbar()
const audioRef = ref<HTMLAudioElement | null>(null)
const selected = ref(songs[0].file)

function playSong() {
  if (audioRef.value) {
    audioRef.value.src = selected.value
    audioRef.value.play()
  }
}

function pauseSong() {
  audioRef.value?.pause()
}
</script>
