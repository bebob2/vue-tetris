<script setup lang="ts">
import { ref } from 'vue'
import Cell from './cell.vue'
import { Block } from '../types'
import { getEmptyBoard } from '../utils/empty-board'

const board = ref(getEmptyBoard())

board.value[190] = Block.J
board.value[180] = Block.J
</script>

<template>
  <div class="grid grid-cols-10 gap-px bg-black/70 p-px shadow-glow">
    <Cell v-for="cell in board" :cell="cell" />
  </div>
</template>
