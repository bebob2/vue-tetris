<script setup lang="ts">
import { Block, BlockVariant } from '../types'
import { getRandomBlock } from '../utils/get-random-block'
import Board from './board.vue'
import Score from './score.vue'
import UpcomingBlocks from './upcoming-blocks.vue'

const upcomingBlocks: BlockVariant[] = [
  getRandomBlock(),
  { block: Block.I, shapeIndex: 1 },
  { block: Block.S, shapeIndex: 0 },
]
</script>

<template>
  <div class="flex flex-row gap-4 border">
    <Board />
    <div class="flex flex-col">
      <UpcomingBlocks :upcomingBlocks />
      <Score />
      <button>start</button>
    </div>
  </div>
</template>
