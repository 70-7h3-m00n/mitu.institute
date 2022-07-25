import stls from '@/styles/components/icons/IconArrowRight.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconArrowRightProps = TypeClassNames & {
  color?: TypeColor
}

const IconArrowRight = ({ classNames, color }: TypeIconArrowRightProps) => {
  const at = useAt()

  const translations = {
    title: at.uz ? '' : ''
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M5 12H19'
          stroke={color || colors.upsilon}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 5L19 12L12 19'
          stroke={color || colors.upsilon}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconArrowRight
