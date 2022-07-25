import stls from '@/styles/components/icons/IconPen.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconPenProps = TypeClassNames

const IconPen = ({ classNames }: TypeIconPenProps) => {
  const at = useAt()

  const translations = {
    title: at.uz ? 'Qalam' : 'Ручка'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 68 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <path
          d='M67.5511 33.4497L62.1713 27.0277L5.95215 0.972656C4.69685 0.422197 3.08291 1.0644 2.45526 2.53229L1.91728 3.81669C1.28963 5.28458 1.82761 6.93596 3.08291 7.48642L59.2124 33.5415L67.5511 33.4497Z'
          fill='white'
        />
        <path
          d='M5.41406 8.58728L59.2123 33.5414L67.551 33.4497L62.1712 27.0277L12.6768 4.09187L5.86238 0.880859'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M3.08291 7.48642C1.82761 6.84422 1.28963 5.19284 1.91728 3.81669L2.45526 2.53229C3.08291 1.0644 4.69685 0.422197 5.95215 0.972656L4.24854 4.91761L3.08291 7.48642ZM3.08291 7.48642L7.65581 9.59653'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M7.26434 4.29262L6.32812 6.40869L23.8901 14.5432L24.8263 12.4271L7.26434 4.29262Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M61.9028 27.4863L59.2129 33.4496'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconPen
