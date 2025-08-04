<template>
  <ClientOnly>
    <AnimatePresence>
      <Motion
        v-if="visible"
        key="popup"
        class="fixed top-20 right-6 w-56 bg-white border border-pink-200 rounded-xl shadow-xl p-4 text-pink-700 z-40"
        :initial="{ opacity: 0, scale: 0.8 }"
        :animate="{ opacity: 1, scale: 1 }"
        :exit="{ opacity: 0, scale: 0.8 }"
        :transition="{ duration: 0.3 }"
      >
        <button class="absolute top-1 right-2 text-pink-400" @click="visible = false">✖</button>
        <p class="text-sm">{{ message }}</p>
      </Motion>
    </AnimatePresence>
  </ClientOnly>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { Motion, AnimatePresence } from 'motion-v'

const messages = [
  '¡Recuerda que eres amada! 💖',
  'Nuevo abrazo disponible para recoger 🤗',
  'Alguien piensa en ti ahora mismo...'
]

const visible = ref(false)
const message = ref('')

onMounted(() => {
  setTimeout(() => {
    message.value = messages[Math.floor(Math.random() * messages.length)]
    visible.value = true
  }, 2000)
})
</script>
