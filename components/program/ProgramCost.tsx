import stls from '@/styles/components/program/ProgramCost.module.sass'
import { addSpacesToNumber } from '@/helpers/index'

type ProgramCostProps = {
  price: number
  discount: number
  isHalf?: boolean
  isOneTwelfth?: boolean
  isRegular?: boolean
  withRubSign?: boolean
  withPerMonthLabel?: boolean
}

const ProgramCost = ({
  price,
  discount,
  isHalf,
  isOneTwelfth,
  isRegular,
  withRubSign,
  withPerMonthLabel
}: ProgramCostProps) => {
  let output = price

  if (isRegular)
    output =
      Math.round(Math.ceil((output / (100 - discount)) * 100) / 1000) * 1000

  if (isHalf) output = Math.round(Math.ceil(output / 2) / 100) * 100

  if (isOneTwelfth) output = Math.round(Math.ceil(output / 12) / 100) * 100

  // TODO: make this more generic. This component shoudn't have styles but should have a way to control perMonth & rubSign styles
  return (
    <>
      {addSpacesToNumber(output)}
      {withRubSign && (
        <>
          {' '}
          <br className={stls.phone} />
          &#8381;
          {withPerMonthLabel && <span className={stls.perMonth}>/мес</span>}
        </>
      )}
    </>
  )
}

export default ProgramCost
