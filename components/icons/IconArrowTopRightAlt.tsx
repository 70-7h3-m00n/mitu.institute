import stls from '@/styles/components/icons/IconArrowTopRightAlt.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconArrowTopRightAltProps = TypeClassNames

const IconArrowTopRightAlt = ({
  classNames
}: TypeIconArrowTopRightAltProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? '' : at.uz ? '' : ''
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 26 26' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M1 25.0988L24.0988 1.99999'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M25 24L25 1'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M25 1L2 1'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconArrowTopRightAlt
