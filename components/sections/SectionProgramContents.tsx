import stls from '@/styles/components/sections/SectionProgramContents.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralSectionTitle,
  GeneralPopup,
  GeneralTextHighlight
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'

type TypeSectionProgramContentsProps = TypeClassNames

const SectionProgramContents = ({
  classNames
}: TypeSectionProgramContentsProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program?.shortContents) return <></>

  console.log(program.shortContents)

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <div className={stls.heading}>
          <GeneralSectionTitle>Краткая программа курса</GeneralSectionTitle>
          <p className={stls.shortContentsLength}>
            <GeneralTextHighlight>
              {program.shortContents.length}{' '}
            </GeneralTextHighlight>
            тематических модулей
          </p>
        </div>
        <p className={stls.desc}>
          Практики, которым мы учим, и методология, на которой строится курс,
          проверены не только практическим опытом преподавателей, но и строгими
          научными исследованиями.
        </p>
        <div className={stls.content}>
          <ul className={stls.contents}>
            {program.shortContents
              .filter((content, idx) => idx < 5)
              .map((content, idx) => (
                <li
                  key={(content.title || 'SectionProgramContents_item') + idx}
                  className={stls.contentItem}>
                  {content.title}
                </li>
              ))}
          </ul>
        </div>
        <div className={stls.fullProgram}>
          <div className={stls.fullProgramHeading}>
            <h2 className={stls.fullProgramTitle}>Полная программа</h2>
            <p className={stls.fullProgramDesc}>
              Оставьте свои контактные данные, чтобы мы прислали учебный план
              направления
            </p>
          </div>
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
      </Wrapper>
    </section>
  )
}

export default SectionProgramContents
