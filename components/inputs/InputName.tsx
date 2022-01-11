import stls from '@/styles/components/inputs/InputName.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeInputNameProps = TypeClassNames

const InputName = ({ classNames }: TypeInputNameProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }></div>
  )
}

export default InputName
