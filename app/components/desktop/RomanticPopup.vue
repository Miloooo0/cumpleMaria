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
  'Tu existencia ha sido registrada con éxito por el universo.',
  'Nuevo parche de cariño aplicado. Reinicia tu corazón.',
  'Si estás leyendo esto, probablemente eres genial.',
  'Has ganado una notificación emocional. No puedes rechazarla.',
  'No es un mal día, es un plot twist.',
  'No tienes que entenderlo todo. Sólo respira.',
  'Estás haciendo lo mejor que puedes. A veces eso es suficiente.',
  '¿Y si hoy no haces nada útil y aún así mereces aplausos?',
  'Cuidado: nivel de ternura en aumento no autorizado.',
  'Tu nombre fue mencionado en una conversación entre nubes.',
  'Alguien en otro plano acaba de decir “gracias por existir”.',
  'Has sido seleccionado para recibir afecto gratuito.',
  'No te preocupes, el caos también tiene fans.',
  'Tu historial de pensamientos absurdos ha sido respaldado.',
  'El silencio también te quiere. Sólo que no lo dice en voz alta.',
  'Esta es una interrupción programada para recordarte que molas.',
  'Informe diario: tu presencia ha causado una leve mejora global.',
  'Eres la prueba de que las estadísticas fallan a veces para bien.',
  'Si hoy estás raro, enhorabuena: estás vivo.',
  'Se ha detectado un 98% de posibilidad de que alguien te eche de menos.'
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
