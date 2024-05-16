// @flow

import { Aligner } from './Aligner'
import type { Alignment } from './Alignment'
import type { AlignOptions } from '../../Options'

const LEFT_ALIGN = 'left'
const CENTER_ALIGN = 'center'
const RIGHT_ALIGN = 'right'

export default class DefaultAligner implements Aligner {
  alignments: { [string]: Alignment }

  constructor(options: AlignOptions) {
    this.alignments = {
      [LEFT_ALIGN]: {
        name: LEFT_ALIGN,
        icon: options.icons.left,
        apply: (el: HTMLElement) => this.setAlignment(el, LEFT_ALIGN)
      },
      [CENTER_ALIGN]: {
        name: CENTER_ALIGN,
        icon: options.icons.center,
        apply: (el: HTMLElement) => this.setAlignment(el, CENTER_ALIGN)
      },
      [RIGHT_ALIGN]: {
        name: RIGHT_ALIGN,
        icon: options.icons.right,
        apply: (el: HTMLElement) => this.setAlignment(el, RIGHT_ALIGN)
      },
    }
  }

  getAlignments(): Alignment[] {
    return Object.values(this.alignments)
  }

  clear(el: HTMLElement): void {
    el.classList.remove('qbf-align-center', 'qbf-align-left', 'qbf-align-right')
  }

  isAligned(el: HTMLElement, alignment: Alignment): boolean {
    return el.classList.contains(`qbf-align-${alignment.name}`)
  }

  setAlignment(el: HTMLElement, value: string) {
    this.clear()
    el.classList.add(`qbf-align-${value}`)
  }
}
