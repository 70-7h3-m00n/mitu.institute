import stls from '@/styles/components/lis/LisQna.module.sass'
import { TypeClassNames, TypeLibProgramQuestion } from '@/types/index'
import { useState } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconCrossAlt } from '@/components/icons'

type TypeLisQnaProps = TypeClassNames & {
  qna: TypeLibProgramQuestion
  idx: number
  variant?: 'alpha' | 'beta'
}

const LisQna = ({
  classNames,
  qna,
  idx,
  variant = 'alpha'
}: TypeLisQnaProps) => {
  const [isOpen, setIsOpen] = useState(idx === 0)

  return (
    <li
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <button
        className={cn(stls.btn, {
          [stls.isOpen]: isOpen,
          [stls.btnVariantBeta]: variant === 'beta'
        })}
        onClick={() => setIsOpen(!isOpen)}>
        {qna.question}
        <IconCrossAlt classNames={[stls.cross]} />
      </button>
      <p className={stls.answer}>{qna.answer}</p>
    </li>
  )
}

export default LisQna
