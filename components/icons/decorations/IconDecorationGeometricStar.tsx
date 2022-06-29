import stls from '@/styles/components/icons/decorations/IconDecorationFourShadowSquares.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconDecorationFourShadowSquaresProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
}

const IconDecorationFourShadowSquares = ({
  classNames,
  color1,
  color2
}: TypeIconDecorationFourShadowSquaresProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath='url(#clip0_2356_9325)'>
          <rect
            width='40'
            height='40'
            transform='matrix(-1 0 0 1 40 8.39233e-05)'
            fill={color1 || colors.gamma}
          />
          <g clipPath='url(#clip1_2356_9325)'>
            <path
              d='M15.2355 21.9944L15.2428 21.9872C12.1243 21.9872 9.02024 21.9872 5.90172 21.9872V18.0128C9.02024 18.0128 12.1243 18.0128 15.2428 18.0128L15.2355 18.0056H15.25C12.1388 14.8943 9.02024 11.7758 5.90897 8.66453L5.90172 5.85786L8.70113 5.85786C11.8124 8.96913 14.9309 12.0877 18.0422 15.1989V15.1844L18.0494 15.1917C18.0494 12.0732 18.0495 8.96914 18.0495 5.85061L22.0238 5.85061C22.0238 8.96913 22.0238 12.0732 22.0238 15.1917L22.031 15.1844V15.1989C25.1423 12.0877 28.2608 8.96913 31.3721 5.85786L34.186 5.85786L34.186 8.65728C31.0747 11.7686 27.9562 14.8871 24.8449 17.9983L24.8594 17.9983L24.8522 18.0056C27.9707 18.0056 31.0747 18.0056 34.1932 18.0056L34.1932 21.9799C31.0747 21.9799 27.9707 21.9799 24.8522 21.9799L24.8594 21.9872L24.8449 21.9872C27.9562 25.0984 31.0747 28.2169 34.186 31.3282L34.186 34.1421L31.3866 34.1421C28.2753 31.0309 25.1568 27.9123 22.0455 24.8011L22.0455 24.8156L22.0383 24.8083C22.0383 27.9268 22.0383 31.0309 22.0383 34.1494L18.064 34.1494C18.064 31.0309 18.064 27.9268 18.064 24.8083L18.0567 24.8156L18.0567 24.8011C14.9454 27.9123 11.8269 31.0309 8.71564 34.1421H5.90172L5.90172 31.3427C9.02024 28.2242 12.1315 25.1129 15.2355 21.9944C15.2428 21.9872 15.2355 21.9944 15.2355 21.9944Z'
              fill={color2 || colors.beta}
            />
          </g>
        </g>
        <defs>
          <clipPath id='clip0_2356_9325'>
            <rect
              width='40'
              height='40'
              fill='white'
              transform='matrix(-1 0 0 1 40 0)'
            />
          </clipPath>
          <clipPath id='clip1_2356_9325'>
            <rect
              width='40'
              height='40'
              fill='white'
              transform='matrix(-0.707107 -0.707107 -0.707107 0.707107 48.3281 20)'
            />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default IconDecorationFourShadowSquares
