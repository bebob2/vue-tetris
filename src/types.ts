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
