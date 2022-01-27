import { TypeRoute, TypeAnchor } from '@/types/index'

type TypeLinks = {
  readonly links:
    | {
        // href: TypeRoute | TypeAnchor
        href: string
        val: string
      }[]
    | null
}

export default TypeLinks
