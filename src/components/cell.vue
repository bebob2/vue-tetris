<script setup lang="ts">
import { Block } from '../types'
import { cn } from '../utils/class-names'

type Props = {
  cell: Block
}

defineProps<Props>()
</script>

<template>
  <div
    class="size-7"
    :class="
      cn(
        Block.EMPTY === cell && 'bg-transparent',
        Block.I === cell && 'bg-cyan-500',
        Block.J === cell && 'bg-blue-500',
        Block.L === cell && 'bg-orange-500',
        Block.O === cell && 'bg-yellow-500',
        Block.S === cell && 'bg-green-500',
        Block.T === cell && 'bg-purple-500',
        Block.Z === cell && 'bg-red-500'
      )
    "
  ></div>
</template>
