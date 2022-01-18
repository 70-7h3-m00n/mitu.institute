import stls from '@/styles/components/layout/Main.module.sass'
import { TypeChildren, TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeMainProps = TypeClassNames & TypeChildren

const Main = ({ classNames, children }: TypeMainProps) => {
  return (
    <main
      id='main'
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </main>
  )
}

export default Main
