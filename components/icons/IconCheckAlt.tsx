import stls from '@/styles/components/icons/IconCheckAlt.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconCheckAltProps = TypeClassNames & {
  color?: TypeColor
}

const IconCheckAlt = ({ classNames, color }: TypeIconCheckAltProps) => {
  const at = useAt()

  const translations = {
    title: at.uz ? '' : ''
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M13.3332 4L5.99984 11.3333L2.6665 8'
          stroke={color || colors.upsilon}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconCheckAlt
