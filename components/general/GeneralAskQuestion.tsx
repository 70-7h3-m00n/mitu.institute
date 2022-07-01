import stls from '@/styles/components/general/GeneralAskQuestion.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import {
  IconPen,
  IconWave,
  IconDecorationFourShadowSquares
} from '@/components/icons'

type TypeGeneralAskQuestionProps = TypeClassNames

const GeneralAskQuestion = ({ classNames }: TypeGeneralAskQuestionProps) => {
  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional'

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <div className={stls.top}>
        <div className={stls.icons}>
          {atAdditional ? (
            <>
              <IconDecorationFourShadowSquares
                classNames={[stls.IconDecorationFourShadowSquares]}
              />
            </>
          ) : (
            <>
              <IconPen classNames={[stls.iconPen]} />
              <IconWave variant='alpha' classNames={[stls.iconWave]} />
            </>
          )}
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
