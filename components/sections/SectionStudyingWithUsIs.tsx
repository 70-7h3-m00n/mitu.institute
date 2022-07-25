import stls from '@/styles/components/sections/SectionStudyingWithUsIs.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
// import { studyingWithUsIs } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { ContextCategoriesContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'

type TypeStudyingWithUsIs = string[]

type TypeSectionStudyingWithUsIsProps = TypeClassNames

const SectionStudyingWithUsIs = ({
  classNames
}: TypeSectionStudyingWithUsIsProps) => {
  const at = useAt()

  const { curCategory } = useContext(ContextCategoriesContext)

  const studyingWithUsIs: TypeStudyingWithUsIs =
    curCategory?.type === 'bachelor' || curCategory?.type === 'master'
      ? [
          'Дистанционное обучение. Можете обучаться из любой точки мира',
          // 'Отсрочка от армии',
          'Образовательные программы, адаптированные под требования работодателей',
          'Поддержка куратора 24/7',
          'Возможность вернуть 13% от стоимости обучения',
          'Перевод из других ВУЗов без потери курса'
        ]
      : [
          'Дистанционное обучение. Можете обучаться из любой точки мира',
          // 'Отсрочка от армии',
          'Образовательные программы, адаптированные под требования работодателей',
          'Поддержка куратора 24/7',
          'Возможность вернуть 13% от стоимости обучения'
          // 'Перевод из других ВУЗов без потери курса'
        ]

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          Обучение в{' '}
          <GeneralTextHighlight>
            «Московском институте технологий <br /> и управления»
          </GeneralTextHighlight>{' '}
          — это
        </GeneralSectionTitle>
        <ul className={stls.items}>
          {studyingWithUsIs.map((item, idx) => (
            <li
              key={(item || 'studyingWithUsIsItem') + idx}
              className={stls.item}>
              <div className={stls.dot}></div>
              <p className={stls.p}>{item}</p>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionStudyingWithUsIs
