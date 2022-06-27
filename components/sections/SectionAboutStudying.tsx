import stls from '@/styles/components/sections/SectionAboutStudying.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
// import { studyingWithUsIs } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'

type TypeStudyingWithUsIs = string[]

type TypeSectionAboutStudyingProps = TypeClassNames

const SectionAboutStudying = ({
  classNames
}: TypeSectionAboutStudyingProps) => {
  const { curCategory } = useContext(ContextCategoriesContext)

  const list = [
    'Только актуальный контент',
    'Программа разработана так, чтобы ее было комфортно проходить в удаленном формате, без отрыва от основной деятельности',
    'Мы регулярно отслеживаем изменения на рынке и адаптируем программы, под новые реалии',
    'Мы проводим внутренние исследования и на их основе адаптируем программы, под требования работадателей'
  ]

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          Об обучении
        </GeneralSectionTitle>
        <ul className={stls.list}>
          {list.map((item, idx) => (
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
