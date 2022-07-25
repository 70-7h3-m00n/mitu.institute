import stls from '@/styles/components/program/ProgramStudyDuration.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { ContextProgramContext } from '@/context/index'
import { mituinstitute } from '@/config/index'
import {
  getClassNames,
  getCasedRuYearString,
  getCasedRuMonthString
} from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeProgramStudyDurationProps = TypeClassNames & {
  studyDurationMonths: number
  monthsOnly?: boolean
  yearsOnly?: boolean
}

const ProgramStudyDuration = ({
  classNames,
  studyDurationMonths,
  monthsOnly,
  yearsOnly
}: TypeProgramStudyDurationProps) => {
  const at = useAt()
  const { program } = useContext(ContextProgramContext)

  const translations = {}

  const years = Math.floor(+studyDurationMonths / 12)
  const months = +studyDurationMonths - 12 * years

  let content = (
    <>
      {monthsOnly && getCasedRuMonthString({ months: studyDurationMonths })}{' '}
      {yearsOnly && getCasedRuYearString({ studyDurationMonths })}
      {!monthsOnly && !yearsOnly && (
        <>
          {getCasedRuYearString({ years })} {getCasedRuMonthString({ months })}
        </>
      )}
    </>
  )

  if (!mituinstitute && program?.category?.type === 'master')
    content = <>2.5 года</>
  if (!mituinstitute && program?.category?.type !== 'master')
    content = <>3.5-4.5 года</>

  return (
    <span
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {content}
    </span>
  )
}

export default ProgramStudyDuration
