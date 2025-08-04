<template>
  <div class="w-screen h-screen bg-pink-50 relative overflow-hidden">
    <Icon app="music" label="Música" :x="20" :y="20">🎵</Icon>
    <Icon app="snake" label="Snake" :x="20" :y="100">🐍</Icon>
    <Icon app="calc" label="Calc" :x="20" :y="180">🧮</Icon>
    <Icon app="notes" label="Notas" :x="100" :y="20">📝</Icon>
    <Icon app="tictactoe" label="3 en raya" :x="100" :y="100">⭕</Icon>
    <Icon app="love" label="LoveTest" :x="100" :y="180">💘</Icon>
    <Icon app="amorcitos" label="Amorcitos" :x="180" :y="20">📁</Icon>
    <Icon app="dibuja" label="Dibuja" :x="180" :y="100">🎨</Icon>
    <Icon app="sabias" label="Sabías que" :x="180" :y="180">🧠</Icon>
    <Icon app="sorpresa" label="Sorpresa" :x="260" :y="20">🎁</Icon>
    <Icon app="recuerdos" label="Recuerdos" :x="260" :y="100">📦</Icon>
    <Icon app="tv" label="TV" :x="260" :y="180">📺</Icon>

    <AnimatePresence>
      <template v-for="(win, id) in windows">
        <Window
          v-if="!win.minimized"
          :key="id"
          :id="id"
          :title="titles[id]"
          :x="200"
          :y="80"
        >
          <component :is="apps[id]" />
        </Window>
      </template>
    </AnimatePresence>
  </div>
</template>

<script setup lang="ts">
import { AnimatePresence } from 'motion-v'
import Icon from '~/components/desktop/Icon.vue'
import Window from '~/components/desktop/Window.vue'
import MusicPlayer from '~/components/apps/MusicPlayer.vue'
import SnakeGame from '~/components/apps/SnakeGame.vue'
import BrokenCalculator from '~/components/apps/BrokenCalculator.vue'
import NotesApp from '~/components/apps/NotesApp.vue'
import TicTacToe from '~/components/apps/TicTacToe.vue'
import LoveTest from '~/components/apps/LoveTest.vue'
import Amorcitos from '~/components/apps/Amorcitos.vue'
import DibujaConmigoApp from '~/components/apps/DibujaConmigoApp.vue'
import SabiasQueApp from '~/components/apps/SabiasQueApp.vue'
import CajaSorpresaApp from '~/components/apps/CajaSorpresaApp.vue'
import MiCajaDeRecuerdos from '~/components/apps/MiCajaDeRecuerdos.vue'
import TvApp from '~/components/apps/TvApp.vue'
import { useWindows } from '~/composables/useWindows'

const { windows } = useWindows()

const apps: Record<string, any> = {
  music: MusicPlayer,
  snake: SnakeGame,
  calc: BrokenCalculator,
  notes: NotesApp,
  tictactoe: TicTacToe,
  love: LoveTest,
  amorcitos: Amorcitos,
  dibuja: DibujaConmigoApp,
  sabias: SabiasQueApp,
  sorpresa: CajaSorpresaApp,
  recuerdos: MiCajaDeRecuerdos,
  tv: TvApp
}

const titles: Record<string, string> = {
  music: 'Reproductor',
  snake: 'Snake',
  calc: 'Calculadora',
  notes: 'Notas',
  tictactoe: '3 en raya',
  love: 'Love Test',
  amorcitos: 'Amorcitos',
  dibuja: 'Dibuja conmigo',
  sabias: 'Sabías que',
  sorpresa: 'Caja sorpresa',
  recuerdos: 'Caja de recuerdos',
  tv: 'TV'
}
</script>
