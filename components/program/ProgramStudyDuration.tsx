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

  const years = Math.floor(+studyDurationMonths / 12)
  const months = +studyDurationMonths - 12 * years

  const translations = {
    monthsOnly: at.en
      ? 'month'
      : at.uz
      ? 'oy'
      : getCasedRuMonthString({ months: studyDurationMonths }),
    yearsOnly: at.en
      ? 'year'
      : at.uz
      ? 'yil'
      : getCasedRuYearString({ studyDurationMonths }),
    default: at.en ? (
      <>
        {years} year{years > 1 && 's'} {months} month{months > 1 && 's'}
      </>
    ) : at.uz ? (
      <>
        {years} yil {months} oy
      </>
    ) : (
      <>
        {getCasedRuYearString({ years })} {getCasedRuMonthString({ months })}
      </>
    )
  }

  let content = (
    <>
      {monthsOnly && translations.monthsOnly}{' '}
      {yearsOnly && translations.yearsOnly}
      {!monthsOnly && !yearsOnly && translations.default}
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
