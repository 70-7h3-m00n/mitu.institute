import { Reducer } from 'react'
import { pathSeparator, prevPathFlag } from '../config'

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
