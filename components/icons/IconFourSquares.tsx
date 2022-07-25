import stls from '@/styles/components/icons/IconFourSquares.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconFourSquaresProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
  color3?: TypeColor
  color4?: TypeColor
  fillOpacity1?: string
  fillOpacity2?: string
  fillOpacity3?: string
  fillOpacity4?: string
}

const IconFourSquares = ({
  classNames,
  color1,
  color2,
  color3,
  color4,
  fillOpacity1,
  fillOpacity2,
  fillOpacity3,
  fillOpacity4
}: TypeIconFourSquaresProps) => {
  const at = useAt()

  const translations = {
    title: at.uz ? '' : ''
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_2356_9013)'>
          <rect
            width='40'
            height='40'
            transform='matrix(-1 0 0 1 40 0.00012207)'
            fill={color2 || colors.gamma}
            {...(fillOpacity2 ? { fillOpacity: fillOpacity2 } : undefined)}
          />
          <g clipPath='url(#clip1_2356_9013)'>
            <rect
              width='40'
              height='40'
              transform='matrix(-1 0 0 1 40 0.00012207)'
              fill={color3 || colors.beta}
              {...(fillOpacity3 ? { fillOpacity: fillOpacity3 } : undefined)}
            />
          </g>
          <g clipPath='url(#clip2_2356_9013)'>
            <rect
              width='40'
              height='40'
              transform='matrix(-1 0 0 1 40 20.0001)'
              fill={color4 || colors.delta}
              {...(fillOpacity4 ? { fillOpacity: fillOpacity4 } : undefined)}
            />
          </g>
          <g clipPath='url(#clip3_2356_9013)'>
            <rect
              width='40'
              height='40'
              transform='matrix(-1 0 0 1 20 20.0001)'
              fill={color3 || colors.beta}
              {...(fillOpacity3 ? { fillOpacity: fillOpacity3 } : undefined)}
            />
          </g>
          <g clipPath='url(#clip4_2356_9013)'>
            <rect
              width='40'
              height='40'
              transform='matrix(-1 0 0 1 20 0.00012207)'
              fill={color2 || colors.gamma}
              {...(fillOpacity2 ? { fillOpacity: fillOpacity2 } : undefined)}
            />
          </g>
        </g>
        <defs>
          <clipPath id='clip0_2356_9013'>
            <rect
              width='40'
              height='40'
              fill={color1 || colors.upsilon}
              {...(fillOpacity1 ? { fillOpacity: fillOpacity1 } : undefined)}
              transform='matrix(-1 0 0 1 40 0)'
            />
          </clipPath>
          <clipPath id='clip1_2356_9013'>
            <rect
              width='20'
              height='20'
              fill={color1 || colors.upsilon}
              {...(fillOpacity1 ? { fillOpacity: fillOpacity1 } : undefined)}
              transform='matrix(-1 0 0 1 40 0)'
            />
          </clipPath>
          <clipPath id='clip2_2356_9013'>
            <rect
              width='20'
              height='20'
              fill={color1 || colors.upsilon}
              {...(fillOpacity1 ? { fillOpacity: fillOpacity1 } : undefined)}
              transform='matrix(-1 0 0 1 40 20)'
            />
          </clipPath>
          <clipPath id='clip3_2356_9013'>
            <rect
              width='20'
              height='20'
              fill={color1 || colors.upsilon}
              {...(fillOpacity1 ? { fillOpacity: fillOpacity1 } : undefined)}
              transform='matrix(-1 0 0 1 20 20)'
            />
          </clipPath>
          <clipPath id='clip4_2356_9013'>
            <rect
              width='20'
              height='20'
              fill={color1 || colors.upsilon}
              {...(fillOpacity1 ? { fillOpacity: fillOpacity1 } : undefined)}
              transform='matrix(-1 0 0 1 20 0)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default IconFourSquares
