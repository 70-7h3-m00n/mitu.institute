import { Reducer, useReducer, useState } from 'react'
import { HandleValue, UseInput } from '../types'

export const useInput: UseInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  const handleValue: HandleValue = e => setValue(e.target.value)
  const resetValue = () => setValue(initialValue)
  const [isDirty, setIsDirty] = useReducer<Reducer<boolean, boolean | void>>(
    (_prev, value) => (typeof value === 'boolean' ? value : false),
    false
  )
  return [value, handleValue, resetValue, isDirty, setIsDirty]
}
