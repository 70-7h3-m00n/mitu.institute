import stls from '@/styles/components/sections/SectionHowTrainingGoes.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import { IconHowTrainingGoesDecoration1 } from '../icons'
import { ImgGeneralHowProcessGoesDecoration } from '../imgs'

type TypeSectionHowTrainingGoesProps = TypeClassNames

const SectionHowTrainingGoes = ({
  classNames
}: TypeSectionHowTrainingGoesProps) => {
  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional'

  console.log(program?.howProcessGoes)

  const cards =
    program?.howProcessGoes && program?.howProcessGoes?.length > 0
      ? program.howProcessGoes
      : [
          {
            title: mituinstitute ? 'Онлайн-подача документов' : 'Изучайте темы',
            description: mituinstitute
              ? 'Дистанционный формат обучения, позволяет осуществлять  подачу всех документов удаленно'
              : 'В курсе — практические видеоуроки'
          },
          {
            title: mituinstitute
              ? 'Лекции в онлайн формате'
              : 'Выполняете задания',
            description: mituinstitute
              ? 'У каждого студента есть личный кабинет, где проходят лекции. Записи всех занятий хранятся в личном кабинете до конца обучения'
              : 'В том темпе, в котором Вам удобно'
          },
          {
            title: mituinstitute
              ? 'Практические занятия'
              : 'Общайтесь с единомышленниками',
            description: mituinstitute
              ? 'Все практические занятия проходят в личном кабинете на нашей образовательной онлайн платформе'
              : 'У нас большое сообщество выпускников и студентов, которые всегда помогут и подскажут'
          },
          {
            title: mituinstitute ? 'Сессии' : 'Работаете с преподавателями',
            description: mituinstitute
              ? 'Экзамены сдаются онлайн через систему дистанционного обучения'
              : 'Постоянное взаимодействие с высококвалифицированными преподавателями-практиками, экспертами'
          },
          {
            title: mituinstitute
              ? 'Написание дипломной работы'
              : 'Получаете диплом',
            description: mituinstitute
              ? 'Выбираете тему выпускной квалификационной работы и при консультации научного руководителя пишете дипломную работу'
              : 'Защищаете дипломную работу и дополняете ею своё портфолио'
          },
          {
            title: mituinstitute
              ? 'Защита диплома'
              : 'Готовитесь к собеседованию',
            description: mituinstitute
              ? 'Итоговая аттестация будет проходить в Институте. При желании можно пройти дистанционно'
              : 'Мы поможем подготовить резюме и расскажем как вести себя на собеседовании в компаниях'
          }
        ]

  return (
    <section
      className={cn(
        stls.container,
        { [stls.atAdditional]: atAdditional },
        getClassNames({ classNames })
      )}>
      <Wrapper
        classNames={[cn(stls.wrapper, { [stls.atAdditional]: atAdditional })]}>
        {atAdditional && (
          <div className={stls.decorations}>
            <IconHowTrainingGoesDecoration1
              classNames={[stls.IconHowTrainingGoesDecoration1]}
            />
            <ImgGeneralHowProcessGoesDecoration
              classNames={[stls.ImgGeneralHowProcessGoesDecoration]}
            />
          </div>
        )}

        <GeneralSectionTitle>Как проходит обучение?</GeneralSectionTitle>
        <ul className={stls.cards}>
          {cards.map((item, idx) => {
            return (
              <li
                key={`${
                  item?.title || 'SectionHowTrainingGoes__cards-card'
                }-${idx}`}
                className={stls.card}>
                <div className={stls.count}>{idx + 1}</div>
                <p className={stls.title}>{item.title}</p>
                <p className={stls.desc}>{item.description}</p>
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </section>
  )
}
export default SectionHowTrainingGoes
