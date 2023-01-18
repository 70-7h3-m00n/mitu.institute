import { ValidationRules } from './contactWays'

export type UseValidation = (
  value: string,
  validations: ValidationRules,
  setIsValid: React.Dispatch<React.SetStateAction<boolean>>
) => void
