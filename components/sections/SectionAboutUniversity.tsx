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
    title: at.uz ? 'Institut haqida' : 'Об институте',
    pTop: at.uz
      ? "Bizning universitet ta'lim zamonaviy yondashuv uchun. Biz doimo ish beruvchilarning fikr-mulohazalarini qabul qilamiz va o'quv dasturlarini moslashtiramiz"
      : 'Наш университет за современный подход в образовании. Мы постоянно берем обратную связь от работодателей и адаптируем учебные программы',
    pBottomHighlight: at.uz ? 'Bizning vazifamiz' : 'Наша миссия',
    pBottom: at.uz
      ? "- hamma uchun ochiq bo'ladigan ta'lim tizimini yaratish. Masofaviy ta’lim belgilangan maqsad va vazifalarga to‘liq javob beradi, shuning uchun innovatsion texnologiyalar institutimizda o‘quv jarayonining ajralmas qismi hisoblanadi"
      : '— создать систему образования, которая будет доступна каждому. Дистанционное обучение полностью отвечает поставленным целям и задачам, поэтому инновационные технологии — неотъемлемая часть образовательного процесса в нашем институте',
    btnVal: at.uz
      ? "Ta'lim faoliyatini amalga oshirish huquqini beruvchi davlat litsenziyasi"
      : 'Государственная лицензия на право ведения образовательной деятельности',
    testimonial1Title: at.uz ? '10 yil' : '10 лет',
    testimonial1Subtitle: at.uz
      ? "Biz ta'lim bilan shug'ullanamiz"
      : 'Занимаемся образованием',
    testimonial2Title: at.uz ? '>2000' : '>2000',
    testimonial2Subtitle: at.uz ? "Hozir o'rganing" : 'Учатся прямо сейчас',
    testimonial3Title: at.uz ? '7 yil' : '7 лет',
    testimonial3Subtitle: at.uz
      ? "Masofaviy ta'lim bo'yicha ixtisoslashgan"
      : 'Специализируемся на дистанционном обучении',
    testimonial4Title: at.uz ? '>10 000' : '>10 000',
    testimonial4Subtitle: at.uz
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
