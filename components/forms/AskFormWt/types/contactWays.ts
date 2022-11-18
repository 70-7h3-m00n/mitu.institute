import { IconType } from 'react-icons/lib'

export type MethodName = 'Позвонить' | 'Написать'
export type ValidationType = 'phone' | 'vk' | 'email'

export interface ContactMethods {
  name: MethodName
  icon: IconType
}

export interface ValidationRules {
  shouldBeValidated: boolean
  validationType: ValidationType
}

export default interface ContactWay {
  name: string
  stageStep: number
  svg: IconType
  contactMethods: ContactMethods[]
  validationRules: ValidationRules
  contactButtonClass: string
}

