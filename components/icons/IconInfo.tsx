import stls from '@/styles/components/icons/IconInfo.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconInfoProps = TypeClassNames & {
  color?: TypeColor
  color2?: TypeColor
}

const IconInfo = ({ classNames, color, color2 }: TypeIconInfoProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M12 22.5C17.5228 22.5 22 18.0228 22 12.5C22 6.97715 17.5228 2.5 12 2.5C6.47715 2.5 2 6.97715 2 12.5C2 18.0228 6.47715 22.5 12 22.5Z'
          stroke={color2 || colors.gamma}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 16.5V12.5'
          stroke={color || colors.gamma}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M12 8.5H12.01'
          stroke={color || colors.gamma}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconInfo
