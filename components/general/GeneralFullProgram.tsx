import stls from '@/styles/components/general/GeneralFullProgram.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { IconElderScroll, IconFourSquares } from '@/components/icons'
import { ImgGeneralFullProgramDecoration } from '@/components/imgs'

type TypeGeneralFullProgramProps = TypeClassNames

const GeneralFullProgram = ({ classNames }: TypeGeneralFullProgramProps) => {
  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional'

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
          <IconFourSquares classNames={[stls.IconFourSquares]} />
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
          <IconElderScroll classNames={[stls.icon, stls.laptopDesktop]} />
        )}
      </div>
      <div className={stls.right}>
        <h2 className={stls.title}>Полная программа</h2>
        <p className={cn(stls.desc, { [stls.atAdditional]: atAdditional })}>
          Оставьте свои контактные данные, чтобы мы прислали учебный план
          направления
        </p>
        {!atAdditional && (
          <IconElderScroll classNames={[stls.icon, stls.phone]} />
        )}

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
