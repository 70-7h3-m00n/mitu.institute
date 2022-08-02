import stls from '@/styles/components/sections/SectionStudyingWithUsIs.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
// import { studyingWithUsIs } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import {
  ContextCategoriesContext,
  ContextProgramContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'

type TypeStudyingWithUsIs = string[]

type TypeSectionStudyingWithUsIsProps = TypeClassNames

const SectionStudyingWithUsIs = ({
  classNames
}: TypeSectionStudyingWithUsIsProps) => {
  const at = useAt()

  const { program } = useContext(ContextProgramContext)

  const translations = {
    studyingWithUsIsBachelorMaster: at.uz
      ? [
          "Masofaviy ta'lim. Dunyoning istalgan joyidan o'rganishingiz mumkin",
          "Ish beruvchilar talablariga moslashtirilgan o'quv dasturlari",
          "24/7 kuratorni qo'llab-quvvatlash",
          "O'qish xarajatlarining 13 foizini qaytarish imkoniyati",
          "Kursni yo'qotmasdan boshqa universitetlardan tarjima"
        ]
      : [
          'Дистанционное обучение. Можете обучаться из любой точки мира',
          'Образовательные программы, адаптированные под требования работодателей',
          'Поддержка куратора 24/7',
          'Возможность вернуть 13% от стоимости обучения',
          'Перевод из других ВУЗов без потери курса'
        ],
    studyingWithUsIs: at.uz
      ? [
          "Masofaviy ta'lim. Dunyoning istalgan joyidan o'rganishingiz mumkin",
          "Ish beruvchilar talablariga moslashtirilgan o'quv dasturlari",
          "24/7 kuratorni qo'llab-quvvatlash",
          "O'qish xarajatlarining 13 foizini qaytarish imkoniyati"
        ]
      : [
          'Дистанционное обучение. Можете обучаться из любой точки мира',
          'Образовательные программы, адаптированные под требования работодателей',
          'Поддержка куратора 24/7',
          'Возможность вернуть 13% от стоимости обучения'
        ],
    title: at.uz ? (
      <>
        <GeneralTextHighlight>
          &quot;Moskva texnologiya va menejment instituti&quot;
        </GeneralTextHighlight>{' '}
        da o&apos;qish
      </>
    ) : (
      <>
        Обучение в{' '}
        <GeneralTextHighlight>
          «Московском институте технологий <br /> и управления»
        </GeneralTextHighlight>{' '}
        — это
      </>
    )
  }

  const { curCategory } = useContext(ContextCategoriesContext)

  const studyingWithUsIsDynamic =
    program?.studyingWithUsIt && program?.studyingWithUsIt?.length !== 0
      ? program?.studyingWithUsIt
          ?.filter(item => item?.item)
          .map(item => item.item?.toString())
      : null

  // @TODO: figure out better types
  const studyingWithUsIs: any[] =
    studyingWithUsIsDynamic ||
    (curCategory?.type === 'bachelor' ||
    curCategory?.type === 'master' ||
    curCategory?.type === 'GVD'
      ? translations.studyingWithUsIsBachelorMaster
      : translations.studyingWithUsIs)

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          {translations.title}
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
