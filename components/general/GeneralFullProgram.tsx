import stls from '@/styles/components/general/GeneralFullProgram.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { IconElderScroll, IconFourSquares } from '@/components/icons'
import { ImgGeneralFullProgramDecoration } from '@/components/imgs'
import mituinstitute from '@/config/mituinstitute'

type TypeGeneralFullProgramProps = TypeClassNames

const GeneralFullProgram = ({ classNames }: TypeGeneralFullProgramProps) => {
  const at = useAt()
  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional' && mituinstitute

  const translations = {
    title: at.en
      ? 'Full program'
      : at.uz
      ? "To'liq dastur"
      : 'Полная программа',
    desc: at.en
      ? 'Submit a form so we could send you the full curriculum plan'
      : at.uz
      ? "Yo'nalish o'quv dasturini yuborish uchun aloqa ma'lumotlaringizni qoldiring"
      : 'Оставьте свои контактные данные, чтобы мы прислали учебный план направления',
    btnValue: at.en ? 'Submit' : at.uz ? "So'rov qoldiring" : 'Оставить заявку'
  }

  return (
    <div
      className={
        cn(
          stls.container,
          { [stls.atAdditional]: atAdditional },
          getClassNames({ classNames })
        ) || undefined
      }>
      {atAdditional && (
        <>
          <IconFourSquares classNames={[stls.IconFourSquares]} id='2356_9013' />
          <ImgGeneralFullProgramDecoration
            classNames={[stls.ImgGeneralFullProgramDecoration1]}
          />
          <ImgGeneralFullProgramDecoration
            classNames={[stls.ImgGeneralFullProgramDecoration2]}
          />
          <ImgGeneralFullProgramDecoration
            classNames={[stls.ImgGeneralFullProgramDecoration3]}
          />
        </>
      )}
      <div className={cn(stls.left, { [stls.atAdditional]: atAdditional })}>
        {!atAdditional && (
          <IconElderScroll
            classNames={[stls.icon, stls.laptopDesktop]}
            id='857_6630'
          />
        )}
      </div>
      <div className={stls.right}>
        <h2 className={stls.title}>{translations.title}</h2>
        <p className={cn(stls.desc, { [stls.atAdditional]: atAdditional })}>
          {translations.desc}
        </p>
        {!atAdditional && (
          <IconElderScroll classNames={[stls.icon, stls.phone]} id='857_6631' />
        )}

        <Popup
          trigger={() => (
            <BtnAlpha variant='alpha-reverse' classNames={[stls.btn]}>
              {translations.btnValue}
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
