import { FieldError, UseFormRegister } from 'react-hook-form'
import { TypeFormAlphaValues } from '@/types/index'

type TypeInput = {
  readonly register: UseFormRegister<TypeFormAlphaValues>
  readonly error: FieldError | undefined
}

export default TypeInput
