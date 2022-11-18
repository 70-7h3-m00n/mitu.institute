import ContactWay from './contactWays'
import { HandleValue, ResetValue, Value } from './useInput'

export type FormContext = {
  isFormHidden: boolean
  handleHideForm: () => void
  question: Value
  handleQuestion: HandleValue
  resetQuestion: ResetValue
  phoneNumber: Value
  handlePhoneNumber: HandleValue
  resetPhoneNumber: ResetValue
  email: Value
  handleEmail: HandleValue
  resetEmail: ResetValue
  vkID: Value
  handleVkID: HandleValue
  resetVkID: ResetValue
  waysToContact: ContactWay[]
}
