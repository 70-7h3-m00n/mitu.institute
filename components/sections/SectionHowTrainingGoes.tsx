import stls from '@/styles/components/sections/SectionHowTrainingGoes.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionHowTrainingGoesProps = TypeClassNames

const SectionHowTrainingGoes = ({
  classNames
}: TypeSectionHowTrainingGoesProps) => {
  const cards = [
    {
      title: 'Изучайте темы',
      desc: 'В курсе — практические видеоуроки'
    },
    {
      title: 'Выполняете задания',
      desc: 'В тот темпе, в котором Вам удобно'
    },
    {
      title: 'Общайтесь с единомышленниками',
      desc: 'У нас большое сообщество выпускников и студентов, которые всегда помогут и подскажут'
    },
    {
      title: 'Работаете с преподавателями',
      desc: 'Закрепляете знания и исправляете ошибки'
    },
    {
      title: mituinstitute ? 'Получаете диплом гособразца' : 'Получаете диплом',
      desc: 'Защищаете дипломную работу и дополняете ею своё портфолио'
    },
    {
      title: 'Готовитесь к собеседованию',
      desc: 'Мы поможем подготовить резюме и расскажем как вести себя на собеседовании в компаниях'
    }
  ]

  return (
    <section className={cn(stls.container, getClassNames({ classNames }))}>
      <Wrapper>
        <GeneralSectionTitle>Как проходит обучение?</GeneralSectionTitle>
        <ul className={stls.cards}>
          {cards.map((item, idx) => {
            return (
              <li key={item.title + idx} className={stls.card}>
                <div className={stls.count}>{idx + 1}</div>
                <p className={stls.title}>{item.title}</p>
                <p className={stls.desc}>{item.desc}</p>
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </section>
  )
}
export default SectionHowTrainingGoes
