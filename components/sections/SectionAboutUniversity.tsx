import stls from '@/styles/components/sections/SectionAboutUniversity.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { routesExternal, mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import { IconCoatOfArmsRussia } from '@/components/icons'
import { BtnBeta } from '@/components/btns'

type TypeSectionAboutUniversityProps = TypeClassNames

const SectionAboutUniversity = ({
  classNames
}: TypeSectionAboutUniversityProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? 'About us' : at.uz ? 'Institut haqida' : 'Об институте',
    pTop: at.en
      ? 'We stand for the modern approach to education. We take a feedback from the employers to keep on updating our programs'
      : at.uz
      ? "Bizning universitet ta'lim zamonaviy yondashuv uchun. Biz doimo ish beruvchilarning fikr-mulohazalarini qabul qilamiz va o'quv dasturlarini moslashtiramiz"
      : 'Наш университет за современный подход в образовании. Мы постоянно берем обратную связь от работодателей и адаптируем учебные программы',
    pBottomHighlight: at.en
      ? 'The mission statement'
      : at.uz
      ? 'Bizning vazifamiz'
      : 'Наша миссия',
    pBottom: at.en
      ? '- to create the education system which would be affordable for everybody. The online education goes a long way with our mission so the innovative technologies is a huge part of our educational process'
      : at.uz
      ? "- hamma uchun ochiq bo'ladigan ta'lim tizimini yaratish. Masofaviy ta’lim belgilangan maqsad va vazifalarga to‘liq javob beradi, shuning uchun innovatsion texnologiyalar institutimizda o‘quv jarayonining ajralmas qismi hisoblanadi"
      : '— создать систему образования, которая будет доступна каждому. Дистанционное обучение полностью отвечает поставленным целям и задачам, поэтому инновационные технологии — неотъемлемая часть образовательного процесса в нашем институте',
    btnVal: at.en
      ? 'State licence that allows us to provide online education'
      : at.uz
      ? "Ta'lim faoliyatini amalga oshirish huquqini beruvchi davlat litsenziyasi"
      : 'Государственная лицензия на право ведения образовательной деятельности',
    testimonial1Title: at.en ? '10 years' : at.uz ? '10 yil' : '10 лет',
    testimonial1Subtitle: at.en
      ? 'On the market'
      : at.uz
      ? "Biz ta'lim bilan shug'ullanamiz"
      : 'Занимаемся образованием',
    testimonial2Title: at.en ? '>8500' : at.uz ? '>8500' : '>8500',
    testimonial2Subtitle: at.en
      ? 'Studying now'
      : at.uz
      ? "Hozir o'rganing"
      : 'Учатся прямо сейчас',
    testimonial3Title: at.en ? '7 years' : at.uz ? '7 yil' : '7 лет',
    testimonial3Subtitle: at.en
      ? 'specializing in online education'
      : at.uz
      ? "Masofaviy ta'lim bo'yicha ixtisoslashgan"
      : 'Специализируемся на дистанционном обучении',
    testimonial4Title: at.en ? '>10 000' : at.uz ? '>10 000' : '>10 000',
    testimonial4Subtitle: at.en
      ? 'Graduates'
      : at.uz
      ? "Talabalar allaqachon o'qitilgan"
      : 'Студентов уже обучили'
  }

  const testimonials = [
    {
      title: translations.testimonial1Title,
      subtitle: translations.testimonial1Subtitle
    },
    {
      title: translations.testimonial2Title,
      subtitle: translations.testimonial2Subtitle
    },
    {
      title: translations.testimonial3Title,
      subtitle: translations.testimonial3Subtitle
    },
    {
      title: translations.testimonial4Title,
      subtitle: translations.testimonial4Subtitle
    }
  ]

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>
          {mituinstitute ? translations.title : 'Об Институте'}
        </GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.top}>
            <div className={stls.left}>
              <div className={stls.pgroup}>
                <p className={cn(stls.p, stls.pTop)}>{translations.pTop}</p>
                <p className={cn(stls.p, stls.pBottom)}>
                  <GeneralTextHighlight alt>
                    {translations.pBottomHighlight}
                  </GeneralTextHighlight>
                  {translations.pBottom}
                </p>
              </div>
              <div className={cn(stls.btns)}>
                <BtnBeta
                  variant='alpha'
                  classNames={[stls.btn, stls.btnLeft]}
                  tag='a'
                  href={routesExternal.license}
                  target='_blank'>
                  {translations.btnVal}
                </BtnBeta>
                {/* <BtnBeta variant='beta' classNames={[stls.btn]}>
                  Свидетельство о государственной аккредитации
                </BtnBeta> */}
              </div>
            </div>
            <div className={stls.right}>
              <ul className={stls.testimonials}>
                {testimonials.map((testimonial, idx) => (
                  <li
                    key={testimonial.title + idx}
                    className={stls.testimonial}>
                    <h3 className={stls.testimonialTitle}>
                      {testimonial.title}
                    </h3>
                    <p className={stls.testimonialP}>{testimonial.subtitle}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* <div className={cn(stls.btns, stls.btnsDesktop)}>
            <BtnBeta
              variant='alpha'
              classNames={[stls.btn, stls.btnLeft]}
              tag='a'
              href={routesExternal.license}
              target='_blank'>
              Государственная лицензия на право ведения образовательной
              деятельности
            </BtnBeta>
            <BtnBeta variant='beta' classNames={[stls.btn]}>
              Свидетельство о государственной аккредитации
            </BtnBeta>
          </div> */}
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionAboutUniversity
