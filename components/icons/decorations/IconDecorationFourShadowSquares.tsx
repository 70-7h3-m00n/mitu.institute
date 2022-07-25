import stls from '@/styles/components/icons/decorations/IconDecorationFourShadowSquares.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconDecorationFourShadowSquaresProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
  color3?: TypeColor
}

const IconDecorationFourShadowSquares = ({
  classNames,
  color1,
  color2,
  color3
}: TypeIconDecorationFourShadowSquaresProps) => {
  const at = useAt()

  const translations = {
    title: at.uz ? '' : ''
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_2356_9335)'>
          <rect width='72' height='72.4091' fill={color1 || colors.gamma} />
          <g clipPath='url(#clip1_2356_9335)'>
            <path
              d='M0 20.0032L15.9617 36.1613H36.1078V16.1581L20.1462 0L0 20.0032Z'
              fill={color2 || colors.beta}
            />
            <path d='M20.405 0H0V20.0032H20.405V0Z' fill='white' />
            <path
              d='M71.9974 15.4669L56.5535 0L36.1484 20.0032L52.3258 36.1613H71.9974V15.4669Z'
              fill={color3 || colors.alpha}
            />
            <path d='M56.5535 0H36.1484V20.0032H56.5535V0Z' fill='white' />
            <path
              d='M0 56.2941L16.0911 72.409H36.4098V52.4922L20.3188 36.334L0 56.2941Z'
              fill={color3 || colors.alpha}
            />
            <path
              d='M20.3188 36.2046H0V56.2078H20.3188V36.2046Z'
              fill='white'
            />
            <path
              d='M71.9937 52.0171L56.334 36.1182L36.1016 56.2079L52.1495 72.4092H71.9937V52.0171Z'
              fill={color2 || colors.beta}
            />
            <path
              d='M56.334 36.1182H36.1016V56.1647H56.334V36.1182Z'
              fill='white'
            />
          </g>
        </g>
        <defs>
          <clipPath id='clip0_2356_9335'>
            <rect width='72' height='72' fill='white' />
          </clipPath>
          <clipPath id='clip1_2356_9335'>
            <rect width='72' height='72.4091' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default IconDecorationFourShadowSquares
