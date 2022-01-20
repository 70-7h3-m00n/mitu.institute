import stls from '@/styles/components/lis/LisQna.module.sass'
import { TypeClassNames } from '@/types/index'
import { useState } from 'react'
import { qnas } from '@/data/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconCrossAlt } from '@/components/icons'

type TypeLisQnaProps = TypeClassNames & {
  qna: typeof qnas[number]
  idx: number
}

const LisQna = ({ classNames, qna, idx }: TypeLisQnaProps) => {
  const [isOpen, setIsOpen] = useState(idx === 0)

  return (
    <li
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <button
        className={cn(stls.btn, { [stls.isOpen]: isOpen })}
        onClick={() => setIsOpen(!isOpen)}>
        {qna.question}
        <IconCrossAlt classNames={[stls.cross]} />
      </button>
      <p className={stls.answer}>{qna.answer}</p>
    </li>
  )
}

export default LisQna
