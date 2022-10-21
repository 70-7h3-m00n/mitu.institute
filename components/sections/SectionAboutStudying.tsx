import stls from '@/styles/components/sections/SectionAboutStudying.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
// import { studyingWithUsIs } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'

type TypeStudyingWithUsIs = string[]

type TypeSectionAboutStudyingProps = TypeClassNames

const SectionAboutStudying = ({
  classNames
}: TypeSectionAboutStudyingProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? 'About education' : at.uz ? "Ta'lim haqida" : 'Об обучении',
    list: at.en
      ? [
          'Only relevant content',
          'Online first approach with flexible schedule',
          'We track market changes and update our programs accordingly',
          "We do research to find out what's and develop new programs",
          'We never stop researching and developing our programs based on the market needs'
        ]
      : at.uz
      ? [
          'Faqat haqiqiy tarkib',
          "Dastur asosiy faoliyatdan ajralmasdan uzoq formatda o'tish uchun qulay bo'lishi uchun ishlab chiqilgan",
          "Biz bozordagi o'zgarishlarni muntazam ravishda kuzatib boramiz va dasturlarni yangi haqiqatlarga moslashtiramiz",
          'Biz ichki tadqiqotlar olib boramiz va ularning asosida dasturlarni ish beruvchilarning talablariga moslashtiramiz'
        ]
      : [
          'Только актуальный контент',
          'Программа разработана так, чтобы ее было комфортно проходить в удаленном формате, без отрыва от основной деятельности',
          'Мы регулярно отслеживаем изменения на рынке и адаптируем программы, под новые реалии',
          'Мы проводим внутренние исследования и на их основе адаптируем программы, под требования работадателей'
        ]
  }

  const { curCategory } = useContext(ContextCategoriesContext)

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          {translations.title}
        </GeneralSectionTitle>
        <ul className={stls.list}>
          {translations.list.map((item, idx) => (
            <li
              key={(item || 'studyingWithUsIsItem') + idx}
              className={stls.listItem}>
              <div className={stls.dot}></div>
              <p className={stls.p}>{item}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionAboutStudying
