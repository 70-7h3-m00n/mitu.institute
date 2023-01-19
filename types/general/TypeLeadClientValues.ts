import { TypeFormAlphaValues, TypeUtms, TypeReferer } from '@/types/index'

type TypeLeadClientValues = TypeFormAlphaValues & {
  readonly id: string
  readonly programTitle?: string
  readonly leadPage: string
  readonly utms: TypeUtms
  readonly referer: TypeReferer
  readonly question?: string | null
  readonly contactWay?: string | null
  readonly contactMethod?: string | null
  readonly vk?: string | null
}

export default TypeLeadClientValues
