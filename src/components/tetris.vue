<script setup lang="ts">
import Board from './board.vue'
import Score from './score.vue'
import UpcomingBlocks from './upcoming-blocks.vue'
</script>

<template>
  <div class="flex flex-row gap-4 border">
    <Board />
    <div class="flex flex-col">
      <UpcomingBlocks />
      <Score />
      <button>start</button>
    </div>
  </div>
</template>
