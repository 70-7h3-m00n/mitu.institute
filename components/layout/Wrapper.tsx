import stls from '@/styles/components/layout/Wrapper.module.sass'
import { TypeChildren, TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeWrapperProps = {
  classNames?: TypeClassNames
  children: TypeChildren
}

const Wrapper = ({ classNames = [], children }: TypeWrapperProps) => {
  const container = getClassNames({ classNames })
  return (
    <div className={cn([stls.container], container) || undefined}>
      {children}
    </div>
  )
}

export default Wrapper
