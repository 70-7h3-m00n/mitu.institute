import { useEffect } from 'react'
import { UseValidation } from '../types'

export const useValidation: UseValidation = (
  value,
  validations,
  setIsValid
) => {
  useEffect(() => {
    if (!validations) return
    if (!value) return
    const { shouldBeValidated, validationType } = validations
    if (!shouldBeValidated) return
    const validationPatterns = {
      phone: /\+?.[^A-Za-zа-яёА-ЯЁ]{5,}/,
      email:
        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
      vk: /.+/
    }
    const isValid = validationPatterns[validationType].test(value)
    setIsValid(isValid)
  }, [setIsValid, validations, value])
}
