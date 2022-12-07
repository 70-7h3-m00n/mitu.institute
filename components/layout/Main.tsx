import stls from '@/styles/components/layout/Main.module.sass'
import { TypeChildren, TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { routesFront, selectors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { AskFormWt } from '../forms'
import { useProgramContext } from '@/hooks/index'

type TypeMainProps = TypeClassNames & TypeChildren

const Main = ({ classNames, children }: TypeMainProps) => {
  const { program } = useProgramContext()
  return (
    <main
      id={selectors.main}
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
      <AskFormWt
        addFields={{ program: program?.title }}
        routeFront={routesFront.apiLead}
      />
    </main>
  )
}

export default Main
