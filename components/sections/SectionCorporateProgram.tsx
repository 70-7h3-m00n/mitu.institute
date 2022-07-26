import stls from '@/styles/components/sections/SectionCorporateProgram.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesExternal, mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ImgGeneralCorporateProgram } from '@/components/imgs'
import { IconRhombusStar } from '@/components/icons'

type TypeSectionCorporateProgramProps = TypeClassNames

const SectionCorporateProgram = ({
  classNames
}: TypeSectionCorporateProgramProps) => {
  const at = useAt()

  const translations = {
    title: at.uz ? (
      'Kompaniya xodimlari uchun dastur kerakmi?'
    ) : (
      <>
        Нужна программа <br /> для сотрудников компании?
      </>
    ),
    p: at.uz
      ? "Agar siz xodimlaringizni o'qitishni tashkil qilishingiz kerak bo'lsa, so'rov qoldiring. Siz uchun alohida taklif tayyorladik"
      : 'Если нужно организовать обучение своих сотрудников – оставьте заявку. Мы подготовили для Вас индивидуальное предложение',
    learnMore: at.uz ? "Ko'proq" : 'Подробнее'
  }

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <div className={stls.left}>
            <GeneralSectionTitle classNames={[stls.title, stls.specificity]}>
              {translations.title}
            </GeneralSectionTitle>
            <p className={stls.p}>{translations.p}</p>

            <Popup
              trigger={() => (
                <BtnAlpha classNames={[stls.btn]} variant='alpha-reverse'>
                  {translations.learnMore}
                </BtnAlpha>
              )}
              modal
              lockScroll
              nested
              closeOnDocumentClick>
              {(close: MouseEventHandler) => (
                <GeneralPopup close={close}>
                  <UIFormAlpha isPopup />
                </GeneralPopup>
              )}
            </Popup>
          </div>
          <div className={stls.right}>
            <ImgGeneralCorporateProgram
              classNames={[stls.ImgGeneralCorporateProgram]}
            />
            <div className={stls.IconRhombusStarContainer}>
              <IconRhombusStar classNames={[stls.IconRhombusStar]} />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionCorporateProgram
