import { Reducer } from 'react'
import { pathSeparator } from '../data'

export const contactPathReducer: Reducer<string, string> = (prev, newValue) => {
  if (!prev) return newValue
  if (!newValue) return ''
  if (newValue === 'prev')
    return prev.substring(0, prev.lastIndexOf(pathSeparator))
  return prev + pathSeparator + newValue
}
