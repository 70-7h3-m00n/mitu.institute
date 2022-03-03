import stls from '@/styles/components/sections/SectionCheckLicense.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import { IconCoatOfArmsRussia } from '@/components/icons'
import { BtnBeta } from '@/components/btns'

type TypeSectionCheckLicenseProps = TypeClassNames

const SectionCheckLicense = ({ classNames }: TypeSectionCheckLicenseProps) => {
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
      subtitle: mituinstitute
        ? 'Специализируемся на дистанционном обучении'
        : 'Специализируемся на дистанционном обучении'
    },
    {
      title: '>10 000',
      subtitle: 'Студентов уже обучили'
    }
  ]

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Проверьте лицензию</GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.top}>
            <div className={stls.left}>
              <div className={stls.pgroup}>
                <p className={cn(stls.p, stls.pTop)}>
                  Наш университет за современный подход в образовании. Мы
                  постоянно берем обратную связь от работодателей и адаптируем
                  учебные программы
                </p>
                <p className={cn(stls.p, stls.pBottom)}>
                  <GeneralTextHighlight alt>Наша миссия</GeneralTextHighlight> —
                  создать систему образования, которая будет доступна каждому.
                  Дистанционное обучение полностью отвечает поставленным целям и
                  задачам, поэтому инновационные технологии — неотъемлемая часть
                  образовательного процесса в нашем институте
                </p>
              </div>
              <div className={cn(stls.btns)}>
                <BtnBeta
                  variant='alpha'
                  classNames={[stls.btn, stls.btnLeft]}
                  tag='a'
                  href='https://isga.obrnadzor.gov.ru/rlic/details/0B100E0A-0A0B-110B-0D10-0E13110C0C111010110E/'
                  target='_blank'>
                  Государственная лицензия на право ведения образовательной
                  деятельности
                </BtnBeta>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionCheckLicense
