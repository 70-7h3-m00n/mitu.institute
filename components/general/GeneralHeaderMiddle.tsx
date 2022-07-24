import stls from '@/styles/components/general/GeneralHeaderMiddle.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralLogo,
  GeneralPhoneNumber,
  GeneralAddress,
  GeneralPopup
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { IconPhone } from '@/components/icons'

type TypeGeneralHeaderMiddleProps = TypeClassNames

const GeneralHeaderMiddle = ({ classNames }: TypeGeneralHeaderMiddleProps) => {
  const at = useAt()

  const translations = {
    btn: {
      title: at.uz ? "Qo'ng'iroqni buyurtma qiling" : 'Заказать звонок',
      value: at.uz ? (
        <>Qo&apos;ng&apos;iroqni buyurtma qiling</>
      ) : (
        <>Заказать&nbsp;звонок</>
      )
    }
  } as const

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <div className={stls.content}>
          <GeneralLogo classNames={[stls.logo]} withTitle />
          <div className={stls.phoneAddress}>
            <GeneralPhoneNumber
              withIcon
              withLabel
              classNames={[stls.phoneNumber, stls.laptopDesktop]}
            />
            <GeneralAddress
              classNames={[stls.address, stls.laptopDesktop]}
              withIcon
            />
          </div>

          <Popup
            trigger={open => {
              return (
                <BtnAlpha
                  variant='delta'
                  classNames={[stls.btn, stls.btnAlpha]}
                  title={translations.btn.title}>
                  <span className={stls.btnTextAlt}>
                    <IconPhone
                      classNames={[stls.IconPhone]}
                      color={colors.upsilon}
                    />
                  </span>
                  <span className={stls.btnText}>{translations.btn.value}</span>
                </BtnAlpha>
              )
            }}
            modal
            lockScroll
            nested
            closeOnDocumentClick>
            {(close: MouseEventHandler) => {
              return (
                <GeneralPopup close={close}>
                  <UIFormAlpha isPopup />
                </GeneralPopup>
              )
            }}
          </Popup>
        </div>
      </Wrapper>
    </div>
  )
}

export default GeneralHeaderMiddle
