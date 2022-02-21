import stls from '@/styles/components/program/ProgramStudyDuration.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import {
  getClassNames,
  getCasedRuYearString,
  getCasedRuMonthString
} from '@/helpers/index'

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
  const years = Math.floor(+studyDurationMonths / 12)
  const months = +studyDurationMonths - 12 * years

  return (
    <span
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      {monthsOnly && getCasedRuMonthString({ months: studyDurationMonths })}{' '}
      {yearsOnly && getCasedRuYearString({ studyDurationMonths })}
      {!monthsOnly && !yearsOnly && (
        <>
          {getCasedRuYearString({ years })} {getCasedRuMonthString({ months })}
        </>
      )}
    </span>
  )
}

export default ProgramStudyDuration
