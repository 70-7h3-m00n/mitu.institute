import { ElementType, ComponentType } from 'react'

type TypeBtnTagWithLink = {
  // readonly element?: keyof JSX.IntrinsicElements
  // readonly tag?: ElementType | 'Link'
  readonly tag?: keyof JSX.IntrinsicElements | 'Link'
}

export default TypeBtnTagWithLink
