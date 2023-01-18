import { Reducer } from 'react'
import { AddFields } from './AddFields'
import { ValidationType } from './contactWays'

export type HowToContactProps =
  | ValidationType
  | 'question'
  | 'contactWay'
  | 'contactMethod'
  | 'leadPage'
  | 'programTitle'

export type HowToContact =
  | Partial<Record<HowToContactProps, string>>
  | AddFields
  | null

export type HowToContactReducer = Reducer<HowToContact, HowToContact>
