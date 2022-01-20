import { TypeRoute, TypeAnchor } from '@/types/index'

type TypeLinks = {
  readonly links: {
    href: TypeRoute | TypeAnchor
    val: string
  }[]
}

export default TypeLinks
