import stls from '@/styles/components/general/GeneralTextHighlight.module.sass'
import { TypeClassNames, TypeChildren } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralTextHighlightProps = TypeClassNames &
  TypeChildren & {
    reverse?: boolean
  }

const GeneralTextHighlight = ({
  classNames,
  children,
  reverse = false
}: TypeGeneralTextHighlightProps) => {
  return (
    <span
      className={
        cn(
          [stls.container],
          { [stls.regular]: !reverse, [stls.reverse]: reverse },
          getClassNames({ classNames })
        ) || undefined
      }>
      {children}
    </span>
  )
}

export default GeneralTextHighlight
