import { Block, ShapeObject } from './types'

export const BOARD_WIDTH = 10
export const BOARD_HEIGHT = 20
export const BOARD_SIZE = BOARD_HEIGHT * BOARD_WIDTH

export const shapes: ShapeObject = {
  [Block.I]: {
    shapes: [
      [
        [Block.EMPTY, Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.I, Block.I, Block.I, Block.I],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.I, Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.I, Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.I, Block.EMPTY, Block.EMPTY, Block.EMPTY],
        [Block.I, Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
    ],
  },
  [Block.J]: {
    shapes: [
      [
        [Block.J, Block.J, Block.J],
        [Block.EMPTY, Block.EMPTY, Block.J],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.J, Block.EMPTY],
        [Block.EMPTY, Block.J, Block.EMPTY],
        [Block.J, Block.J, Block.EMPTY],
      ],
      [
        [Block.J, Block.EMPTY, Block.EMPTY],
        [Block.J, Block.J, Block.J],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.J, Block.J],
        [Block.EMPTY, Block.J, Block.EMPTY],
        [Block.EMPTY, Block.J, Block.EMPTY],
      ],
    ],
  },
  [Block.L]: {
    shapes: [
      [
        [Block.L, Block.L, Block.L],
        [Block.L, Block.EMPTY, Block.EMPTY],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.L],
      ],
      [
        [Block.EMPTY, Block.EMPTY, Block.L],
        [Block.L, Block.L, Block.L],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.L, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.EMPTY],
        [Block.EMPTY, Block.L, Block.EMPTY],
      ],
    ],
  },
  [Block.O]: {
    shapes: [
      [
        [Block.O, Block.O],
        [Block.O, Block.O],
      ],
    ],
  },
  [Block.T]: {
    shapes: [
      [
        [Block.T, Block.T, Block.T],
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.EMPTY, Block.T, Block.EMPTY],
      ],
      [
        [Block.T, Block.EMPTY, Block.EMPTY],
        [Block.T, Block.T, Block.T],
        [Block.T, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.EMPTY, Block.T],
        [Block.T, Block.T, Block.T],
        [Block.EMPTY, Block.EMPTY, Block.T],
      ],
      [
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.EMPTY, Block.T, Block.EMPTY],
        [Block.T, Block.T, Block.T],
      ],
    ],
  },
  [Block.Z]: {
    shapes: [
      [
        [Block.Z, Block.Z, Block.EMPTY],
        [Block.EMPTY, Block.Z, Block.Z],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.EMPTY, Block.EMPTY, Block.Z],
        [Block.EMPTY, Block.Z, Block.Z],
        [Block.EMPTY, Block.Z, Block.EMPTY],
      ],
    ],
  },
  [Block.S]: {
    shapes: [
      [
        [Block.EMPTY, Block.S, Block.S],
        [Block.S, Block.S, Block.EMPTY],
        [Block.EMPTY, Block.EMPTY, Block.EMPTY],
      ],
      [
        [Block.S, Block.EMPTY, Block.EMPTY],
        [Block.S, Block.S, Block.EMPTY],
        [Block.EMPTY, Block.S, Block.EMPTY],
      ],
    ],
  },
} as const
