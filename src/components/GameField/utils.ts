type FieldCellType = 'bomb' | 'number' | 'empty' | 'button'

export type FieldCell = {
  x: number,
  y: number,
  type: FieldCellType,
  number?: 1 | 2 | 3
}

export const filedSize = 24;

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const generateField = (): FieldCell[] => {
  const field: FieldCell[] = []
  for(let x = 0; x < filedSize; x++) {
    for(let y = 0; y < filedSize; y++) {
      const random = Math.random();

      switch (true) {
        case random < 0.05:
          field.push({
            x,
            y,
            type: 'bomb'
          })
          break;
        case random >= 0.05 && random < 0.15:
          field.push({
            x,
            y,
            type: 'number',
            number: getRandomInt(1, 4) as 1 | 2 | 3
          })
          break
        case random >= 0.15 && random < 0.35:
          field.push({
            x,
            y,
            type: 'empty',
          })
          break
        default:
          field.push({
            x,
            y,
            type: 'button',
          })
      }
    }
  }
  return field
}

export class Field {
  field: FieldCell[]

  constructor() {
    this.field = generateField()
  }

  getCell(x: number, y: number) {
    return this.field.find(el => el.x === x && el.y === y)!
  }
}
