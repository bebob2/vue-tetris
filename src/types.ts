export const Block = {
  EMPTY: 0,
  J: 'J',
  L: 'L',
  S: 'S',
  Z: 'Z',
  T: 'T',
  I: 'I',
  O: 'O',
} as const

export type Block = (typeof Block)[keyof typeof Block]

export type BlockNoEmpty = Exclude<Block, typeof Block.EMPTY>

export type BoardShape = Block[]

export type BlockShape = Block[][]

export type ShapeObject = {
  [key in BlockNoEmpty]: { shapes: BlockShape[] }
}

export type BlockVariant = {
  block: BlockNoEmpty
  shapeIndex: number
}
