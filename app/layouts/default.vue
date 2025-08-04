<template>
  <div class="h-screen bg-rose-50 text-pink-800 font-sans relative overflow-hidden">
    <Decorations />
    <slot />
    <Pet />
    <Taskbar />
  </div>
</template>
<script setup lang="ts">
import Taskbar from "~/components/ui/Taskbar.vue"
import Decorations from "~/components/ui/Decorations.vue"
import Pet from "~/components/ui/Pet.vue"
</script>
