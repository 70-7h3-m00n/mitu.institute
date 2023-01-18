import stls from '@/styles/components/icons/IconMortarboardAlt.module.sass'
import { TypeClassNames, TypeStyle } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconMortarboardAltProps = TypeClassNames & TypeStyle

const IconMortarboardAlt = ({
  classNames,
  style
}: TypeIconMortarboardAltProps) => {
  const at = useAt()

  const translations = {
    title: at.en
      ? 'Academic hat'
      : at.uz
      ? 'Kvadrat akademik qopqoq'
      : 'Квадратная академическая шапочка'
  }

  return (
    <span
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      style={style}
      aria-hidden={'true'}>
      <svg viewBox='0 0 36 28' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <path
          d='M34.8827 9.85586L33.216 8.93919L18.216 0.605859H18.0327C17.9305 0.562657 17.8245 0.529176 17.716 0.505859H17.3994H17.0994C16.9855 0.529191 16.8739 0.562658 16.766 0.605859H16.5827L1.58271 8.93919C1.32621 9.08456 1.11286 9.29536 0.964431 9.55009C0.815998 9.80482 0.737793 10.0944 0.737793 10.3892C0.737793 10.684 0.815998 10.9736 0.964431 11.2283C1.11286 11.483 1.32621 11.6938 1.58271 11.8392L5.73271 14.1392V22.0392C5.73271 23.3653 6.25949 24.637 7.19717 25.5747C8.13485 26.5124 9.40662 27.0392 10.7327 27.0392H24.066C25.3921 27.0392 26.6639 26.5124 27.6016 25.5747C28.5393 24.637 29.066 23.3653 29.066 22.0392V14.1392L32.3994 12.2725V17.0392C32.3994 17.4812 32.575 17.9051 32.8875 18.2177C33.2001 18.5303 33.624 18.7059 34.066 18.7059C34.5081 18.7059 34.932 18.5303 35.2445 18.2177C35.5571 17.9051 35.7327 17.4812 35.7327 17.0392V11.3059C35.7322 11.0105 35.6532 10.7206 35.5039 10.4659C35.3545 10.2111 35.1401 10.0006 34.8827 9.85586V9.85586ZM25.7327 22.0392C25.7327 22.4812 25.5571 22.9051 25.2445 23.2177C24.932 23.5303 24.5081 23.7059 24.066 23.7059H10.7327C10.2907 23.7059 9.86675 23.5303 9.55419 23.2177C9.24163 22.9051 9.06604 22.4812 9.06604 22.0392V15.9892L16.5827 20.1559L16.8327 20.2559H16.9827C17.121 20.2733 17.261 20.2733 17.3994 20.2559C17.5377 20.2733 17.6777 20.2733 17.816 20.2559H17.966C18.0545 20.2372 18.1391 20.2034 18.216 20.1559L25.7327 15.9892V22.0392ZM17.3994 16.8059L5.83271 10.3725L17.3994 3.93919L28.966 10.3725L17.3994 16.8059Z'
          fill={colors.delta}
        />
      </svg>
    </span>
  )
}

export default IconMortarboardAlt
