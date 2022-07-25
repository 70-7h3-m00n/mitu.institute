import { useAt } from '@/hooks/index'

const ProgramAdmission = () => {
  const at = useAt()
  const translations = {
    january: at.uz ? 'yanvar' : 'января',
    february: at.uz ? 'fevral' : 'февраля',
    march: at.uz ? 'mart' : 'марта',
    april: at.uz ? 'aprel' : 'апреля',
    may: at.uz ? 'may' : 'мая',
    june: at.uz ? 'iyun' : 'июня',
    july: at.uz ? 'iyul' : 'июля',
    august: at.uz ? 'avgust' : 'августа',
    september: at.uz ? 'sentyabr' : 'сентября',
    october: at.uz ? 'oktyabr' : 'октября',
    november: at.uz ? 'noyabr' : 'ноября',
    december: at.uz ? 'dekabr' : 'декабря'
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
  return (
    <>
      {currentDay < 20 ? '20' : '5'} {/* 20{' '} */}
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
