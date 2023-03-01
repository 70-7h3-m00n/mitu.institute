import { useAt } from '@/hooks/index'

const ProgramAdmission = () => {
  const at = useAt()
  const translations = {
    january: at.en ? 'January' : at.uz ? 'yanvar' : 'января',
    february: at.en ? 'February' : at.uz ? 'fevral' : 'февраля',
    march: at.en ? 'March' : at.uz ? 'mart' : 'марта',
    april: at.en ? 'April' : at.uz ? 'aprel' : 'апреля',
    may: at.en ? 'May' : at.uz ? 'may' : 'мая',
    june: at.en ? 'June' : at.uz ? 'iyun' : 'июня',
    july: at.en ? 'July' : at.uz ? 'iyul' : 'июля',
    august: at.en ? 'August' : at.uz ? 'avgust' : 'августа',
    september: at.en ? 'September' : at.uz ? 'sentyabr' : 'сентября',
    october: at.en ? 'October' : at.uz ? 'oktyabr' : 'октября',
    november: at.en ? 'November' : at.uz ? 'noyabr' : 'ноября',
    december: at.en ? 'December' : at.uz ? 'dekabr' : 'декабря'
  }

  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  let currentMonth = currentDate.getMonth()

  const months = [
    translations.january,
    translations.february,
    translations.march,
    translations.april,
    translations.may,
    translations.june,
    translations.july,
    translations.august,
    translations.september,
    translations.october,
    translations.november,
    translations.december
  ]

  return <>10 {months[2]}</>
  // return <>10 {months[0]}</>
  return (
    <>
      {currentDay < 20 ? '20' : '5'} 20{' '}
      {(() => {
        let output
        if (currentDay < 20) {
          output = months[currentMonth]
        } else {
          currentMonth === 11
            ? (output = months[0])
            : (output = months[currentMonth + 1])
        }
        return output
      })()}
    </>
  )
}

export default ProgramAdmission
