import stls from '@/styles/components/icons/IconHowTrainingGoesDecoration1.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconHowTrainingGoesDecoration1Props = TypeClassNames & {
  color1?: TypeColor
  color2?: TypeColor
}

const IconHowTrainingGoesDecoration1 = ({
  classNames,
  color1,
  color2
}: TypeIconHowTrainingGoesDecoration1Props) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 104 104' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path d='M104 0H0V104H104V0Z' fill={color1 || colors.delta} />
        <path
          d='M51.907 26.1235L25.9845 39.2162L0 52.247V26.1235V0L25.9845 13.0926L51.907 26.1235Z'
          fill={color2 || colors.zeta}
        />
        <path
          d='M51.907 77.8764L25.9845 90.9691L0 104V77.8764V51.7529L25.9845 64.8456L51.907 77.8764Z'
          fill={color2 || colors.zeta}
        />
        <path
          d='M104 26.1235L78.0157 39.2162L52.0312 52.247V26.1235V0L78.0157 13.0926L104 26.1235Z'
          fill={color2 || colors.zeta}
        />
        <path
          d='M104 77.8764L78.0157 90.9691L52.0312 104V77.8764V51.7529L78.0157 64.8456L104 77.8764Z'
          fill={color2 || colors.zeta}
        />
      </svg>
    </div>
  )
}

export default IconHowTrainingGoesDecoration1
