import { TypeRoute, TypeAnchor } from '@/types/index'
import { HTMLAttributeAnchorTarget } from 'react'

type TypeLinks = {
  readonly links:
    | {
        // href: TypeRoute | TypeAnchor
        href: string
        val: string
        isActive?: boolean
        passHref?: boolean
        target?: HTMLAttributeAnchorTarget
      }[]
    | null
}

export default TypeLinks
