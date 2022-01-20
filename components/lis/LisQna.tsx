import stls from '@/styles/components/lis/LisQna.module.sass'
import { TypeClassNames } from '@/types/index'
import { useState } from 'react'
import { qnas } from '@/data/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeLisQnaProps = TypeClassNames & {
  qna: typeof qnas[number]
}

const LisQna = ({ classNames, qna }: TypeLisQnaProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <li
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <button className={cn(stls.btn, { [stls.isOpen]: isOpen })}>
        {qna.question}
      </button>
    </li>
  )
}

export default LisQna
