import { FieldError, UseFormRegister } from 'react-hook-form'
import { TypeFormAlphaValues } from '@/types/index'

type TypeInput = {
  register: UseFormRegister<TypeFormAlphaValues>
  error: FieldError | undefined
}

export default TypeInput
