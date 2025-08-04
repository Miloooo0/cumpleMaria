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
  '¿Sabías que si bostezas y estornudas a la vez, viajas 3 segundos al pasado?',
  '¿Sabías que los abrazos bien dados pueden derretir cucharas de plástico?',
  '¿Sabías que el 87% de los gatos son en realidad pequeños funcionarios del gobierno?',
  '¿Sabías que el amor verdadero puede cargar el móvil un 3%?',
  '¿Sabías que las croquetas son legalmente consideradas patrimonio de la UNESCO?',
  '¿Sabías que los helados escuchan cuando estás triste?',
  '¿Sabías que los calcetines solteros se reúnen los martes para hablar de sus ex?',
  '¿Sabías que todos los paraguas perdidos viven juntos en una ciudad secreta llamada Paravilla?',
  '¿Sabías que si alguien te acaricia la cabeza, tus ideas florecen más rápido?',
  '¿Sabías que las tostadoras a veces sueñan con ser lámparas?',
  '¿Sabías que si haces pucheros durante una discusión ganas automáticamente?',
  '¿Sabías que si te ríes mucho, los planetas giran un poquito más felices?',
]

const index = ref(0)

function next() {
  index.value = (index.value + 1) % facts.length
}
</script>
