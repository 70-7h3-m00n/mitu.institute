import stls from '@/styles/components/general/GeneralFullProgram.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { IconElderScroll } from '@/components/icons'

type TypeGeneralFullProgramProps = TypeClassNames

const GeneralFullProgram = ({ classNames }: TypeGeneralFullProgramProps) => {
  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <div className={stls.left}>
        <IconElderScroll classNames={[stls.icon, stls.laptopDesktop]} />
      </div>
      <div className={stls.right}>
        <h2 className={stls.title}>Полная программа</h2>
        <p className={stls.desc}>
          Оставьте свои контактные данные, чтобы мы прислали учебный план
          направления
        </p>
        <IconElderScroll classNames={[stls.icon, stls.phone]} />
        <Popup
          trigger={() => (
            <BtnAlpha variant='alpha-reverse' classNames={[stls.btn]}>
              Оставить заявку
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
    </div>
  )
}

export default GeneralFullProgram
