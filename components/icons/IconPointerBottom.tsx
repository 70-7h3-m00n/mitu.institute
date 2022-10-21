import stls from '@/styles/components/icons/IconPointerBottom.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconPointerBottomProps = TypeClassNames & {
  color?: TypeColor
}

const IconPointerBottom = ({
  classNames,
  color
}: TypeIconPointerBottomProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? '' : at.uz ? '' : ''
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 14 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 1L7 7L13 1'
          stroke={color || colors.upsilon}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconPointerBottom
