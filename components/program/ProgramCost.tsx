import { addSpacesToNumber } from '@/helpers/index'

type ProgramCostProps = {
  price: number
  discount: number
  isHalf?: boolean
  isOneTwelfth?: boolean
  isRegular?: boolean
  withRubSign?: boolean
}

const ProgramCost = ({
  price,
  discount,
  isHalf,
  isOneTwelfth,
  isRegular,
  withRubSign
}: ProgramCostProps) => {
  let output = price

  if (isRegular)
    output =
      Math.round(Math.ceil((output / (100 - discount)) * 100) / 1000) * 1000

  if (isHalf) output = Math.round(Math.ceil(output / 2) / 100) * 100

  if (isOneTwelfth) output = Math.round(Math.ceil(output / 12) / 100) * 100

  return (
    <>
      {addSpacesToNumber(output)}
      {withRubSign && <> &#8381;</>}
    </>
  )
}

export default ProgramCost
