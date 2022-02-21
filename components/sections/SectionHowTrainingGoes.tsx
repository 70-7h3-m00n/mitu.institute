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
      title: mituinstitute ? 'Онлайн-подача документов' : 'Изучайте темы',
      desc: mituinstitute
        ? 'Однако, по желанию, студент может приехать и лично подать документы на обучение в нашем институте'
        : 'В курсе — практические видеоуроки'
    },
    {
      title: mituinstitute ? 'Лекции в онлайн формате' : 'Выполняете задания',
      desc: mituinstitute
        ? 'У каждого студента есть личный кабинет, где проходят лекции. Записи все занятий хранятся в личном кабинете до конца обучения'
        : 'В тот темпе, в котором Вам удобно'
    },
    {
      title: mituinstitute
        ? 'Практические занятия'
        : 'Общайтесь с единомышленниками',
      desc: mituinstitute
        ? 'Все практические занятия также проходят онлайн'
        : 'У нас большое сообщество выпускников и студентов, которые всегда помогут и подскажут'
    },
    {
      title: mituinstitute ? 'Сессии' : 'Работаете с преподавателями',
      desc: mituinstitute
        ? 'Экзамены сдаются онлайн через систему дистанционного обучения'
        : 'Постоянное взаимодействие с высококвалифицированными преподавателями-практиками, экспертами'
    },
    {
      title: mituinstitute ? 'Написание диплома' : 'Получаете диплом',
      desc: mituinstitute
        ? 'Выбираете тему выпускной дипломной работы и при помощи научного руководителя пишете диплом'
        : 'Защищаете дипломную работу и дополняете ею своё портфолио'
    },
    {
      title: mituinstitute ? 'Защита диплома' : 'Готовитесь к собеседованию',
      desc: mituinstitute
        ? 'Защита диплома происходит дистанционно, но при желании Вы можете приехать в наш институт'
        : 'Мы поможем подготовить резюме и расскажем как вести себя на собеседовании в компаниях'
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
