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

export type BordShape = Block[]

export type BlockShape = Block[][]

export type ShapeObject = {
  [key in BlockNoEmpty]: { shapes: BlockShape[] }
}
