import { Reducer } from 'react'
import { pathSeparator, prevPathFlag } from '../config'
import { HowToContactReducer } from '../types'

export const howToContactReducer: HowToContactReducer = (
  _prevValue,
  newValue
) => newValue

export const contactPathReducer: Reducer<string, string> = (prev, newValue) => {
  if (!prev) return newValue
  if (!newValue) return ''
  if (newValue === prevPathFlag)
    return prev.substring(0, prev.lastIndexOf(pathSeparator))
  return prev + pathSeparator + newValue
}

export const isValidReducer: Reducer<boolean, boolean | void> = (
  _prev,
  value
) => (typeof value === 'boolean' ? value : false)
