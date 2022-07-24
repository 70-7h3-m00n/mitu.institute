import stls from '@/styles/components/general/GeneralPros.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { usePros } from '@/hooks/index'
import { IconCheck } from '@/components/icons'

type TypeGeneralProsProps = TypeClassNames

const GeneralPros = ({ classNames }: TypeGeneralProsProps) => {
  const pros = usePros()

  return (
    <ul
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {pros.map(pro => (
        <li key={pro} className={stls.pro}>
          <IconCheck classNames={[stls.icon]} withBg />
          <span className={stls.text}>{pro}</span>
        </li>
      ))}
    </ul>
  )
}

export default GeneralPros
