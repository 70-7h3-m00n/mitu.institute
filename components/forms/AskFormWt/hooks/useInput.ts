import { useState } from 'react'
import { HandleValue, UseInput } from '../types'

export const useInput: UseInput = initialValue => {
  const [value, setValue] = useState(initialValue)
  const handleValue: HandleValue = e => setValue(e.target.value)
  const resetValue = () => setValue(initialValue)
  return [value, handleValue, resetValue]
}
