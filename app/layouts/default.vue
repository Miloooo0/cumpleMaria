<template>
  <div class="h-screen bg-rose-50 text-pink-800 font-sans relative overflow-hidden">
    <slot />
    <Taskbar />
  </div>
</template>
<script setup lang="ts">
import Taskbar from "~/components/ui/Taskbar.vue"
</script>
