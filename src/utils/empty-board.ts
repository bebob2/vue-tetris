import { BOARD_SIZE } from '../consts'
import { Block } from '../types'

export const getEmptyBoard = () => Array.from<Block>({ length: BOARD_SIZE }).fill(Block.EMPTY)
