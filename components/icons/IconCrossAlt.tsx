import stls from '@/styles/components/icons/IconCrossAlt.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconCrossAltProps = TypeClassNames

const IconCrossAlt = ({ classNames }: TypeIconCrossAltProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Крестик</title>
        <path
          d='M8 1V15'
          stroke={colors.upsilon}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M1 8H15'
          stroke={colors.upsilon}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconCrossAlt
