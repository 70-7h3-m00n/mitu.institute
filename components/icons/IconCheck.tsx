import stls from '@/styles/components/icons/IconCheck.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconCheckProps = TypeClassNames & {
  withBg?: boolean
}

const IconCheck = ({ classNames, withBg = false }: TypeIconCheckProps) => {
  return (
    <div
      className={
        cn(
          stls.container,
          { [stls.withBg]: withBg },
          getClassNames({ classNames })
        ) || undefined
      }>
      <svg viewBox='0 0 18 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Галочка</title>
        <path
          d='M17 1L6 12L1 7'
          stroke={colors.beta}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconCheck
