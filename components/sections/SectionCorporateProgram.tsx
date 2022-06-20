import stls from '@/styles/components/sections/SectionCorporateProgram.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesExternal, mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
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
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <div className={stls.left}>
            <GeneralSectionTitle classNames={[stls.title, stls.specificity]}>
              Нужна программа <br /> для сотрудников компании?
            </GeneralSectionTitle>
            <p className={stls.p}>
              Если нужно организовать обучение своих сотрудников – оставьте
              заявку. Мы подготовили для Вас индивидуальное предложение
            </p>

            <Popup
              trigger={() => (
                <BtnAlpha classNames={[stls.btn]} variant='alpha-reverse'>
                  Подробнее
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
