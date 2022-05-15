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
        ? 'Дистанционный формат обучения, позволяет осуществлять  подачу всех документов удаленно'
        : 'В курсе — практические видеоуроки'
    },
    {
      title: mituinstitute ? 'Лекции в онлайн формате' : 'Выполняете задания',
      desc: mituinstitute
        ? 'У каждого студента есть личный кабинет, где проходят лекции. Записи всех занятий хранятся в личном кабинете до конца обучения'
        : 'В том темпе, в котором Вам удобно'
    },
    {
      title: mituinstitute
        ? 'Практические занятия'
        : 'Общайтесь с единомышленниками',
      desc: mituinstitute
        ? 'Все практические занятия проходят в личном кабинете на нашей образовательной онлайн платформе'
        : 'У нас большое сообщество выпускников и студентов, которые всегда помогут и подскажут'
    },
    {
      title: mituinstitute ? 'Сессии' : 'Работаете с преподавателями',
      desc: mituinstitute
        ? 'Экзамены сдаются онлайн через систему дистанционного обучения'
        : 'Постоянное взаимодействие с высококвалифицированными преподавателями-практиками, экспертами'
    },
    {
      title: mituinstitute ? 'Написание дипломной работы' : 'Получаете диплом',
      desc: mituinstitute
        ? 'Выбираете тему выпускной квалификационной работы и при консультации научного руководителя пишете дипломную работу'
        : 'Защищаете дипломную работу и дополняете ею своё портфолио'
    },
    {
      title: mituinstitute ? 'Защита диплома' : 'Готовитесь к собеседованию',
      desc: mituinstitute
        ? 'Итоговая аттестация будет проходить в Институте. При желании можно пройти дистанционно'
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
