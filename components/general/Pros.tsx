import stls from '@/styles/components/general/Pros.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { pros } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { IconCheck } from '@/components/icons'

type TypeProsProps = TypeClassNames

const Pros = ({ classNames }: TypeProsProps) => {
  console.log(pros)
  return (
    <ul
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {pros.map(pro => (
        <li key={pro} className={stls.pro}>
          <IconCheck classNames={[stls.icon]} />
          <span className={stls.text}>{pro}</span>
        </li>
      ))}
    </ul>
  )
}

export default Pros
