import { RGB, createColorsFromMap, rgbHex } from 'color-map'

import { rainbow } from './colors'
import { BrushOption, Brush } from './interfaces'

export class CSSBrush implements Brush {
  private count = 0
  private colors: RGB[]
  private map: { [index: string]: RGB } = {}
  private option: BrushOption

  constructor(option: Partial<BrushOption> = {}) {
    this.option = {
      maxColor: option.maxColor || 20,
      coloringText: option.coloringText || false
    }
    this.colors = createColorsFromMap(rainbow, option.maxColor || 20)
  }

  paint(text: string) {
    // TODO style (italic, bold, underscore) rotation
    const rgb = this.getRgb(text)
    const background = rgbHex(rgb)
    const border = rgbHex(rgb.map(x => Math.max(0, x - 32)))
    const color = rgb.every(x => x < 220) ? '#ffffff' : '#000000'

    return `padding: 2px; margin: 2px; line-height: 1.8em;background: ${background};bother: 1px solid ${border};color: ${color};`
  }

  private getRgb(text: string) {
    // It is ok to overlep color.
    // Not trying to be too smart about it.
    return this.map[text] = this.map[text] || this.colors[this.count++ % this.option.maxColor]
  }
}
