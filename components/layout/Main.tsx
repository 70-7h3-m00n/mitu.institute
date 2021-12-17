import stls from '@/styles/components/layout/Main.module.sass'
import { TypeChildren, TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeMainProps = {
  classNames?: TypeClassNames
  children: TypeChildren
}

const Main = ({ classNames = [], children }: TypeMainProps) => {
  const container = getClassNames({ classNames })
  return (
    <main className={cn([stls.container], container) || undefined}>
      {children}
    </main>
  )
}

export default Main
