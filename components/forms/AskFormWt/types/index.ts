import ContactWay, {
  ContactMethods,
  MethodName,
  ValidationRules,
  ValidationType
} from './contactWays'
import { HowToContactReducer } from './howToContact'
import { UseInput, HandleValue, ResetValue, Value } from './useInput'
import { AskFormState } from './askFormState'
import { UseValidation } from './useValidation'
import { UseAskFormState } from './useAskFormState'
import TypeUtms from './TypeUtms'
import TypeReferer from './TypeReferer'
import { LeadValues } from './LeadValues'
import { OnSubmitForm } from './useOnSubmitForm'
import TypeNextApiResponseLeadData from './TypeNextApiResponseLeadData'
import TypeRoutesFront from './TypeRoutesFront'
import { AddFields } from './AddFields'

export type {
  ContactWay,
  ValidationRules,
  ContactMethods,
  ValidationType,
  MethodName,
  UseInput,
  Value,
  HandleValue,
  ResetValue,
  HowToContactReducer,
  AskFormState,
  UseValidation,
  UseAskFormState,
  TypeUtms,
  TypeReferer,
  LeadValues,
  OnSubmitForm,
  AddFields,
  TypeNextApiResponseLeadData,
  TypeRoutesFront
}
