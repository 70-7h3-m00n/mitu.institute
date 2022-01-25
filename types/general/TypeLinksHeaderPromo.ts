import { TypeAnchor } from '@/types/index'

type TypeLinksHeaderPromo =
  | {
      readonly href: TypeAnchor | null
      readonly val: string | null
      readonly payload: string | null
    }[]
  | null

export default TypeLinksHeaderPromo
