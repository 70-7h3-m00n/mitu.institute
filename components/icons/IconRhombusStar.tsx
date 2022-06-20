import stls from '@/styles/components/icons/IconRhombusStar.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconRhombusStarProps = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
}

const IconRhombusStar = ({
  classNames,
  color1,
  color2
}: TypeIconRhombusStarProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 55 55' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M0.152927 27.8079C0.152927 27.9804 0.152927 28.1097 0.152927 28.2822C0.411919 42.9409 12.3688 54.754 27.0882 54.754C41.8076 54.754 53.7644 42.9409 54.0234 28.2822C54.0234 28.1097 54.0234 27.9804 54.0234 27.8079C54.0234 12.9337 41.9803 0.90493 27.0882 0.861816C12.1961 0.861816 0.152927 12.9337 0.152927 27.8079Z'
          fill={color1 || colors.upsilon}
        />
        <path
          d='M27.0882 1.24984C27.0882 15.9085 38.9587 27.8079 53.6349 27.8079C53.7644 27.8079 53.8939 27.8079 54.0234 27.8079C54.0234 12.9337 41.9803 0.90493 27.0882 0.861816C27.0882 0.991158 27.0882 1.1205 27.0882 1.24984Z'
          fill={color2 || colors.beta}
        />
        <path
          d='M0.158498 27.8079C0.287994 27.8079 0.417488 27.8079 0.546985 27.8079C15.2232 27.8079 27.0938 15.9085 27.0938 1.24984C27.0938 1.1205 27.0938 0.991158 27.0938 0.861816C12.2017 0.861816 0.158498 12.9337 0.158498 27.8079Z'
          fill={color2 || colors.beta}
        />
        <path
          d='M27.0882 54.7546C41.8076 54.7546 53.7644 42.9414 54.0234 28.2827C53.8939 28.2827 53.7644 28.2827 53.6349 28.2827C39.0019 28.2827 27.1314 40.0959 27.0882 54.7546Z'
          fill={color2 || colors.beta}
        />
        <path
          d='M0.158498 28.2827C0.417491 42.9414 12.3743 54.7546 27.0938 54.7546C27.0506 40.139 15.1801 28.2827 0.546985 28.2827C0.417488 28.2827 0.287994 28.2827 0.158498 28.2827Z'
          fill={color2 || colors.beta}
        />
      </svg>
    </div>
  )
}

export default IconRhombusStar
