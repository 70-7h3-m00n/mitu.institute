type TypeGetCasedRuYearString = {
  years?: number
  studyDurationMonths?: number
}

const getCasedRuYearString = ({
  years,
  studyDurationMonths
}: TypeGetCasedRuYearString) => {
  if (years) {
    if (years === 1) return `${years} год`
    // if (years === 1) return `${years} г.`

    if (years > 1 && years < 5) return `${years} года`
    // if (years > 1 && years < 5) return `${years} г.`

    if (years >= 5) return `${years} лет`
    // if (years >= 5) return `${years} л.`
  }

  if (studyDurationMonths) {
    if (studyDurationMonths % 12 === 1)
      return `${Math.floor((studyDurationMonths / 12) * 10) / 10} год`

    if (studyDurationMonths % 12 > 1 && studyDurationMonths % 12 < 5)
      return `${Math.floor((studyDurationMonths / 12) * 10) / 10} года`

    if (studyDurationMonths % 12 >= 5)
      return `от ${Math.floor((studyDurationMonths / 12) * 10) / 10} лет`
  }

  return ''
}

export default getCasedRuYearString
