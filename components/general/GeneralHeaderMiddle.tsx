import stls from '@/styles/components/general/GeneralHeaderMiddle.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralLogo,
  GeneralPhoneNumber,
  GeneralAddress,
  GeneralPopup
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'

type TypeGeneralHeaderMiddleProps = TypeClassNames

const GeneralHeaderMiddle = ({ classNames }: TypeGeneralHeaderMiddleProps) => {
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
                  classNames={[stls.btn, stls.btnAlpha]}>
                  <span className={stls.btnTextAlt}>Связаться</span>
                  <span className={stls.btnText}>Заказать звонок</span>
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
