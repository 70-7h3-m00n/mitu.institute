import { useContext } from 'react'
import { formContext } from '../context'

export const useFormContext = () => useContext(formContext)
