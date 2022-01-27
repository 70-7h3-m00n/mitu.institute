import stls from '@/styles/components/general/GeneralAskQuestion.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { IconPen, IconWave } from '@/components/icons'

type TypeGeneralAskQuestionProps = TypeClassNames

const GeneralAskQuestion = ({ classNames }: TypeGeneralAskQuestionProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <div className={stls.top}>
        <div className={stls.icons}>
          <IconPen classNames={[stls.iconPen]} />
          <IconWave variant='alpha' classNames={[stls.iconWave]} />
        </div>
        <h3 className={stls.title}>
          У Вас есть вопросы? Оставьте заявку! И мы перезвоним Вам!
        </h3>
      </div>
      <Popup
        trigger={() => (
          <BtnAlpha variant='gamma-reverse' classNames={[stls.btn]}>
            Задать вопрос
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
  )
}

export default GeneralAskQuestion
