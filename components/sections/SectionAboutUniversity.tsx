import stls from '@/styles/components/sections/SectionAboutUniversity.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import { IconCoatOfArmsRussia } from '@/components/icons'

type TypeSectionAboutUniversityProps = TypeClassNames

const SectionAboutUniversity = ({
  classNames
}: TypeSectionAboutUniversityProps) => {
  const testimonials = [
    {
      title: '10 лет',
      subtitle: 'Занимаемся образованием'
    },
    {
      title: '>2000',
      subtitle: 'Учатся прямо сейчас'
    },
    {
      title: '7 лет',
      subtitle: 'Специализируется на дистанционном обучении'
    },
    {
      title: '>10 000',
      subtitle: 'Студентов уже обучили'
    }
  ]

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Об университете</GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.left}>
            <div className={stls.pgroup}>
              <p className={cn(stls.p, stls.pTop)}>
                Наш университет за современный подход в образовании. Мы
                постоянно берем обратную связь от работодателей и адаптируем
                учебные программы
              </p>
              <p className={stls.p}>
                <GeneralTextHighlight alt>Наша миссия</GeneralTextHighlight> —
                создать систему образования, которая будет доступна каждому.
                Дистанционное обучение полностью отвечает поставленным целям и
                задачам, поэтому инновационные технологии — неотъемлемая часть
                образовательного процесса в нашем институте
              </p>
            </div>
            <button>
              Государственная лицензия на право ведения образовательной
              деятельности
            </button>
          </div>
          <div className={stls.right}>
            <ul className={stls.testimonials}>
              {testimonials.map((testimonial, idx) => (
                <li key={testimonial.title + idx} className={stls.testimonial}>
                  <h3 className={stls.testimonialTitle}>{testimonial.title}</h3>
                  <p className={stls.testimonialP}>{testimonial.subtitle}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Wrapper>
    </div>
  )
}

export default SectionAboutUniversity
