import { TypeFormAlphaValues, TypeUtms, TypeReferer } from '@/types/index'

type TypeLeadClientValues = TypeFormAlphaValues & {
  readonly id: string
  readonly programTitle?: string
  readonly leadPage: string
  readonly utms: TypeUtms
  readonly referer: TypeReferer
}

export default TypeLeadClientValues
