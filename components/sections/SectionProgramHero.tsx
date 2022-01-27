import stls from '@/styles/components/sections/SectionProgramHero.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralTextHighlight, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ImgProgramHero } from '@/components/imgs'

type TypeSectionProgramHeroProps = TypeClassNames

const SectionProgramHero = ({ classNames }: TypeSectionProgramHeroProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program?.title) return <></>

  console.log(program)
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <div className={stls.top}>
          <div className={stls.heading}>
            <h1 className={stls.title}>{program?.title}</h1>
            {program.description && (
              <p className={stls.description}>{program.description}</p>
            )}
          </div>
          <ImgProgramHero classNames={[stls.img]} />
        </div>
        <div className={stls.btns}>
          <Popup
            trigger={() => (
              <BtnAlpha variant='gamma' classNames={[stls.btn]}>
                Записаться на курс
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
        <div className={stls.pros}></div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramHero
