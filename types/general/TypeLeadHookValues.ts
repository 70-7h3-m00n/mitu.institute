import { TypeFormAlphaValues, TypeUtms, TypeReferer } from '@/types/index'

type TypeLeadHookValues = TypeFormAlphaValues & {
  readonly utms: TypeUtms
}

export default TypeLeadHookValues
