import stls from '@/styles/components/sections/SectionHowTrainingGoes.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import {
  IconArrowRight,
  IconHowTrainingGoesDecoration1,
  IconOpenBook
} from '@/components/icons'
import { ImgGeneralHowProcessGoesDecoration } from '@/components/imgs'

type TypeSectionHowTrainingGoesProps = TypeClassNames

const SectionHowTrainingGoes = ({
  classNames
}: TypeSectionHowTrainingGoesProps) => {
  const at = useAt()

  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional' && mituinstitute

  const translations = {
    title: at.uz
      ? 'Trening qanday amalga oshiriladi?'
      : 'Как проходит обучение?',
    card1Title: at.uz
      ? 'Onlayn hujjatlarni taqdim etish'
      : 'Онлайн-подача документов',
    card1Desc: at.uz
      ? "Masofaviy o'qitish formati barcha hujjatlarni masofadan taqdim etishga imkon beradi"
      : 'Дистанционный формат обучения, позволяет осуществлять  подачу всех документов удаленно',
    card2Title: at.uz ? "Onlayn shaklda ma'ruzalar" : 'Лекции в онлайн формате',
    card2Desc: at.uz
      ? "Har bir talabaning shaxsiy hisobi bor, u erda ma'ruzalar o'tkaziladi. Barcha darslarning yozuvlari o'qish oxirigacha shaxsiy hisobingizda saqlanadi"
      : 'У каждого студента есть личный кабинет, где проходят лекции. Записи всех занятий хранятся в личном кабинете до конца обучения',
    card3Title: at.uz ? "Amaliy mashg'ulotlar" : 'Практические занятия',
    card3Desc: at.uz
      ? "Barcha amaliy mashg'ulotlar shaxsiy hisobimizda bizning onlayn ta'lim platformamizda o'tkaziladi"
      : 'Все практические занятия проходят в личном кабинете на нашей образовательной онлайн платформе',
    card4Title: at.uz ? 'Sessiyalar' : 'Сессии',
    card4Desc: at.uz
      ? "Imtihonlar masofaviy ta'lim tizimi orqali onlayn tarzda o'tkaziladi"
      : 'Экзамены сдаются онлайн через систему дистанционного обучения',
    card5Title: at.uz ? 'Tezis yozish' : 'Написание дипломной работы',
    card5Desc: at.uz
      ? 'Yakuniy malakaviy ish mavzusini tanlang va ilmiy rahbar bilan maslahatlashganda tezisni yozing'
      : 'Выбираете тему выпускной квалификационной работы и при консультации научного руководителя пишете дипломную работу',
    card6Title: at.uz ? 'Diplomni himoya qilish' : 'Защита диплома',
    card6Desc: at.uz
      ? "Yakuniy attestatsiya institutda o'tkaziladi. Agar xohlasangiz, masofadan o'tishingiz mumkin"
      : 'Итоговая аттестация будет проходить в Институте. При желании можно пройти дистанционно'
  }

  const cards =
    program?.howProcessGoes && program?.howProcessGoes?.length > 0
      ? program.howProcessGoes
      : [
          {
            title: mituinstitute ? translations.card1Title : 'Изучайте темы',
            description: mituinstitute
              ? translations.card1Desc
              : 'В курсе — практические видеоуроки'
          },
          {
            title: mituinstitute
              ? translations.card2Title
              : 'Выполняете задания',
            description: mituinstitute
              ? translations.card2Desc
              : 'В том темпе, в котором Вам удобно'
          },
          {
            title: mituinstitute
              ? translations.card3Title
              : 'Общайтесь с единомышленниками',
            description: mituinstitute
              ? translations.card3Desc
              : 'У нас большое сообщество выпускников и студентов, которые всегда помогут и подскажут'
          },
          {
            title: mituinstitute
              ? translations.card4Title
              : 'Работаете с преподавателями',
            description: mituinstitute
              ? translations.card4Desc
              : 'Постоянное взаимодействие с высококвалифицированными преподавателями-практиками, экспертами'
          },
          {
            title: mituinstitute ? translations.card5Title : 'Получаете диплом',
            description: mituinstitute
              ? translations.card5Desc
              : 'Защищаете дипломную работу и дополняете ею своё портфолио'
          },
          {
            title: mituinstitute
              ? translations.card6Title
              : 'Готовитесь к собеседованию',
            description: mituinstitute
              ? translations.card6Desc
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
      <Wrapper
        classNames={[cn(stls.wrapper, { [stls.atAdditional]: atAdditional })]}>
        <GeneralSectionTitle classNames={[stls.GeneralSectionTitle]}>
          {translations.title}
        </GeneralSectionTitle>
        <ul className={cn(stls.cards, { [stls.atAdditional]: atAdditional })}>
          {cards.map((item, idx, arr) => {
            return (
              <li
                key={`${
                  item?.title || 'SectionHowTrainingGoes__cards-card'
                }-${idx}`}
                className={cn(stls.card, {
                  [stls.atAdditional]: atAdditional
                })}>
                <div
                  className={cn(stls.count, {
                    [stls.atAdditional]: atAdditional
                  })}>
                  {idx + 1}
                </div>
                {atAdditional && (
                  <div className={cn(stls.iconContainer)}>
                    {arr.length - 1 === idx ? (
                      <IconOpenBook classNames={[stls.icon]} />
                    ) : (
                      <>
                        <IconArrowRight
                          classNames={[stls.icon, stls.IconArrowRight]}
                        />
                      </>
                    )}
                  </div>
                )}
                <p
                  className={cn(stls.title, {
                    [stls.atAdditional]: atAdditional
                  })}>
                  {item.title}
                </p>
                <p
                  className={cn(stls.desc, {
                    [stls.atAdditional]: atAdditional
                  })}>
                  {item.description}
                </p>
              </li>
            )
          })}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionHowTrainingGoes
