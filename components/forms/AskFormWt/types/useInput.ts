export type Value = string
export type HandleValue = (
  e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
) => void
export type ResetValue = () => void

export type UseInput = (
  initialValue: Value
) => [value: Value, handleValue: HandleValue, resetValue: ResetValue]
