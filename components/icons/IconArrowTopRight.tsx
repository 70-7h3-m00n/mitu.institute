import stls from '@/styles/components/icons/IconArrowTopRight.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconArrowTopRightProps = TypeClassNames

const IconArrowTopRight = ({ classNames }: TypeIconArrowTopRightProps) => {
  const at = useAt()

  const translations = {
    title: at.uz ? "O'ng tomonga o'q" : 'Стрелка вверх вправо'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <path
          d='M0.46967 10.4697C0.176777 10.7626 0.176777 11.2374 0.46967 11.5303C0.762563 11.8232 1.23744 11.8232 1.53033 11.5303L0.46967 10.4697ZM11 1H11.75C11.75 0.585786 11.4142 0.25 11 0.25V1ZM10.25 11C10.25 11.4142 10.5858 11.75 11 11.75C11.4142 11.75 11.75 11.4142 11.75 11H10.25ZM1 0.25C0.585786 0.25 0.25 0.585786 0.25 1C0.25 1.41421 0.585786 1.75 1 1.75V0.25ZM1.53033 11.5303L11.5303 1.53033L10.4697 0.46967L0.46967 10.4697L1.53033 11.5303ZM10.25 1V11H11.75V1H10.25ZM11 0.25H1V1.75H11V0.25Z'
          fill={colors.gamma}
        />
      </svg>
    </div>
  )
}

export default IconArrowTopRight
