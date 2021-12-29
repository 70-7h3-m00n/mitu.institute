import stls from '@/styles/components/icons/IconCheck.module.sass'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { TypeClassNames } from '@/types/index'

type TypeIconCheckProps = TypeClassNames

const IconCheck = ({ classNames = [] }: TypeIconCheckProps) => {
  return (
    <div className={cn(stls.container, getClassNames({ classNames }))}>
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <title>Check</title>
        <path d="M20 6L9 17L4 12" stroke="#2969E3" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </div>
  )
}

export default IconCheck