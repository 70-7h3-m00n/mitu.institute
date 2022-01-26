type TypeGetCasedRuMonthString = {
  months: number
}

const getCasedRuMonthString = ({ months }: TypeGetCasedRuMonthString) => {
  if (+months === 1) return `${months} месяц`

  if (+months > 1 && +months < 5) return `${months} месяца`

  if (+months >= 5) return `${months} месяцев`

  return ''
}

export default getCasedRuMonthString
