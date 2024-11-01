<script setup lang="ts">
import { BlockVariant } from '../types'
import { getShape } from '../utils/get-shape'
import Cell from './cell.vue'

type Props = {
  upcomingBlocks: BlockVariant[]
}

const { upcomingBlocks } = defineProps<Props>()
const [nextBlockVariant] = upcomingBlocks
const nextBlockShape = getShape(nextBlockVariant)
</script>

<template>
  <div class="flex h-44 w-36 flex-col items-center gap-4 border bg-black/70 p-4 shadow-glow">
    <div class="uppercase text-white">next:</div>
    <div class="flex flex-col gap-px">
      <div class="flex flex-row gap-px" v-for="row in nextBlockShape">
        <Cell v-for="cell in row" :cell="cell" />
      </div>
    </div>
  </div>
</template>
