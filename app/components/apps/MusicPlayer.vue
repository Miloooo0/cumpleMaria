<template>
  <div class="w-64">
    <h2 class="text-center text-pink-700 mb-2">🎵 Music</h2>
    <select v-model="currentIndex" class="w-full text-sm bg-white rounded px-2 py-1 border-pink-200">
      <option v-for="(song, i) in songs" :key="song.file" :value="i">{{ song.name }}</option>
    </select>
    <div class="flex items-center justify-center gap-2 mt-2">
      <button @click="prev" class="hover:text-pink-700">⏮</button>
      <button @click="toggle" class="hover:text-pink-700">{{ playing ? '⏸' : '▶️' }}</button>
      <button @click="next" class="hover:text-pink-700">⏭</button>
    </div>
    <input
      type="range"
      min="0"
      :max="duration"
      v-model="progress"
      @input="seek"
      class="w-full mt-2"
    />
    <div class="flex justify-end mt-2">
      <input type="range" min="0" max="1" step="0.01" v-model="volume" class="h-24" orient="vertical" />
    </div>
    <audio ref="audioRef" class="hidden" @timeupdate="update" @ended="next" />
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { songs } from '~/utils/songs'

const audioRef = ref<HTMLAudioElement | null>(null)
const currentIndex = ref(0)
const playing = ref(false)
const progress = ref(0)
const duration = ref(0)
const volume = ref(0.5)

watch(volume, v => {
  if (audioRef.value) audioRef.value.volume = v
})

function load() {
  const audio = audioRef.value
  if (!audio) return
  audio.src = songs[currentIndex.value].file
  audio.load()
  audio.play()
  playing.value = true
}

function toggle() {
  const audio = audioRef.value
  if (!audio) return
  if (playing.value) {
    audio.pause()
  } else {
    audio.play()
  }
  playing.value = !playing.value
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + songs.length) % songs.length
  load()
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % songs.length
  load()
}

function update() {
  const audio = audioRef.value
  if (!audio) return
  progress.value = audio.currentTime
  duration.value = audio.duration
}

function seek() {
  const audio = audioRef.value
  if (!audio) return
  audio.currentTime = progress.value
}

onMounted(() => {
  load()
  if (audioRef.value) audioRef.value.volume = volume.value
})
</script>
