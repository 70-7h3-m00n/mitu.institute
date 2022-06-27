import stls from '@/styles/components/icons/IconFourSquares.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconFourSquaresProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
  color3?: TypeColor
  color4?: TypeColor
}

const IconFourSquares = ({
  classNames,
  color1,
  color2,
  color3,
  color4
}: TypeIconFourSquaresProps) => {
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
          />
          <g clipPath='url(#clip1_2356_9013)'>
            <rect
              width='40'
              height='40'
              transform='matrix(-1 0 0 1 40 0.00012207)'
              fill={color3 || colors.beta}
            />
          </g>
          <g clipPath='url(#clip2_2356_9013)'>
            <rect
              width='40'
              height='40'
              transform='matrix(-1 0 0 1 40 20.0001)'
              fill={color4 || colors.delta}
            />
          </g>
          <g clipPath='url(#clip3_2356_9013)'>
            <rect
              width='40'
              height='40'
              transform='matrix(-1 0 0 1 20 20.0001)'
              fill={color3 || colors.beta}
            />
          </g>
          <g clipPath='url(#clip4_2356_9013)'>
            <rect
              width='40'
              height='40'
              transform='matrix(-1 0 0 1 20 0.00012207)'
              fill={color2 || colors.gamma}
            />
          </g>
        </g>
        <defs>
          <clipPath id='clip0_2356_9013'>
            <rect
              width='40'
              height='40'
              fill={color1 || colors.upsilon}
              transform='matrix(-1 0 0 1 40 0)'
            />
          </clipPath>
          <clipPath id='clip1_2356_9013'>
            <rect
              width='20'
              height='20'
              fill={color1 || colors.upsilon}
              transform='matrix(-1 0 0 1 40 0)'
            />
          </clipPath>
          <clipPath id='clip2_2356_9013'>
            <rect
              width='20'
              height='20'
              fill={color1 || colors.upsilon}
              transform='matrix(-1 0 0 1 40 20)'
            />
          </clipPath>
          <clipPath id='clip3_2356_9013'>
            <rect
              width='20'
              height='20'
              fill={color1 || colors.upsilon}
              transform='matrix(-1 0 0 1 20 20)'
            />
          </clipPath>
          <clipPath id='clip4_2356_9013'>
            <rect
              width='20'
              height='20'
              fill={color1 || colors.upsilon}
              transform='matrix(-1 0 0 1 20 0)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default IconFourSquares
