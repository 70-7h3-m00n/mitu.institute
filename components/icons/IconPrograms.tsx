import stls from '@/styles/components/icons/IconPrograms.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconProgramsProps = TypeClassNames

const IconPrograms = ({ classNames }: TypeIconProgramsProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? 'Programs' : at.uz ? 'Dasturlar' : 'Программы'
  }

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <svg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <path
          d='M8 6H21'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 12H21'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M8 18H21'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3 6H3.01'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3 12H3.01'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3 18H3.01'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconPrograms
