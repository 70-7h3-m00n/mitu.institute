import { TypeRoute, TypeAnchor } from '@/types/index'

type TypeLinks = {
  readonly links:
    | {
        // href: TypeRoute | TypeAnchor
        href: string
        val: string
        isActive?: boolean
      }[]
    | null
}

export default TypeLinks
