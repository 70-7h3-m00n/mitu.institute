type TypeGetCasedRuMonthString = {
  months: number
}

const getCasedRuMonthString = ({ months }: TypeGetCasedRuMonthString) => {
  if (+months === 1) return `${months} месяц`
  // if (+months === 1) return `${months} мес.`

  if (+months > 1 && +months < 5) return `${months} месяца`
  // if (+months > 1 && +months < 5) return `${months} мес.`

  if (+months >= 5) return `${months} месяцев`
  // if (+months >= 5) return `${months} мес.`

  return ''
}

export default getCasedRuMonthString
