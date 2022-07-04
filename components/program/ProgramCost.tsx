import stls from '@/styles/components/program/ProgramCost.module.sass'
import { addSpacesToNumber } from '@/helpers/index'
import { useAt, useSSLocale } from '@/hooks/index'

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

  const at = useAt()
  const SSLocale = useSSLocale()

  const atKz =
    at.kz || SSLocale === 'kz' || SSLocale === 'kk' || SSLocale === 'kk_KZ'

  const atUz = at.uz || SSLocale === 'uz' || SSLocale === 'uz_UZ'

  if (atUz) output = output * 140

  if (atKz) output = output * 8.4

  const currencySymbol = atUz ? 'сум' : atKz ? '₸' : <>&#8381;</>

  // TODO: make this more generic. This component shoudn't have styles but should have a way to control perMonth & rubSign styles
  return (
    <>
      {addSpacesToNumber(output)}
      {withRubSign && (
        <>
          {' '}
          {/* <br className={stls.phone} /> */}
          <span className={stls.currencySymbol}>
            {currencySymbol}
            {withPerMonthLabel && <span className={stls.perMonth}>/мес</span>}
          </span>
        </>
      )}
    </>
  )
}

export default ProgramCost
