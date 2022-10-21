import stls from '@/styles/components/icons/IconCross.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconCrossProps = TypeClassNames & {
  color?: TypeColor
}

const IconCross = ({ classNames, color }: TypeIconCrossProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? 'Close' : at.uz ? 'Yopish' : 'Закрыть'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 35 27' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <line
          x1='6'
          y1='25.3343'
          x2='29.3345'
          y2='1.9998'
          stroke={color || colors.kappa}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <line
          x1='1'
          y1='-1'
          x2='34'
          y2='-1'
          transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 29.8743 26.374)'
          stroke={color || colors.kappa}
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconCross
