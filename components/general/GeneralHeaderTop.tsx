import stls from '@/styles/components/general/GeneralHeaderTop.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import Link from 'next/link'
import { useContext, useEffect } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { mituinstitute, routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextAccessibilityContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { BtnAlpha } from '@/components/btns'
import { IconEye } from '@/components/icons'

type TypeGeneralHeaderTopProps = TypeClassNames

const GeneralHeaderTop = ({ classNames }: TypeGeneralHeaderTopProps) => {
  const contextAccessibility = useContext(ContextAccessibilityContext)

  useEffect(() => {
    if (contextAccessibility.fontSm)
      document.documentElement.classList.add('fontSm')
    if (!contextAccessibility.fontSm)
      document.documentElement.classList.remove('fontSm')

    if (contextAccessibility.fontMd)
      document.documentElement.classList.add('fontMd')
    if (!contextAccessibility.fontMd)
      document.documentElement.classList.remove('fontMd')

    if (contextAccessibility.fontLg)
      document.documentElement.classList.add('fontLg')
    if (!contextAccessibility.fontLg)
      document.documentElement.classList.remove('fontLg')

    if (contextAccessibility.letterSpacingSm)
      document.documentElement.classList.add('letterSpacingSm')
    if (!contextAccessibility.letterSpacingSm)
      document.documentElement.classList.remove('letterSpacingSm')

    if (contextAccessibility.letterSpacingMd)
      document.documentElement.classList.add('letterSpacingMd')
    if (!contextAccessibility.letterSpacingMd)
      document.documentElement.classList.remove('letterSpacingMd')

    if (contextAccessibility.letterSpacingLg)
      document.documentElement.classList.add('letterSpacingLg')
    if (!contextAccessibility.letterSpacingLg)
      document.documentElement.classList.remove('letterSpacingLg')

    if (contextAccessibility.hiddenImgs)
      document.documentElement.classList.add('hiddenImgs')
    if (!contextAccessibility.hiddenImgs)
      document.documentElement.classList.remove('hiddenImgs')
  }, [contextAccessibility])

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          {mituinstitute ? (
            <Link href={routesFront.legal}>
              <a className={stls.linkLegal}>
                <span className={stls.laptopDesktop}>
                  Сведения об образовательной организации
                </span>
                <span className={stls.tablet}>Сведения об организации</span>
                <span className={stls.phone}>Об организации</span>
              </a>
            </Link>
          ) : (
            <>
              <a
                href='https://lms.mitu.msk.ru'
                className={cn(stls.linkLegal, stls.mb)}
                rel='noreferrer noopener'>
                <span className={stls.desktop}>
                  Электронная информационно-образовательная среда
                </span>
                <span className={stls.laptop}>ЭИОС</span>
                <span className={stls.tablet}>ЭИОС</span>
                <span className={stls.phone}>ЭИОС</span>
              </a>
              <a
                href='https://urait.ru'
                className={cn(stls.linkLegal, stls.ml, stls.mb, stls.mr)}
                rel='noreferrer noopener'>
                <span className={stls.desktop}>
                  Электронно-библиотечная система
                </span>
                <span className={stls.laptop}>ЭБС</span>
                <span className={stls.tablet}>ЭБС</span>
                <span className={stls.phone}>ЭБС</span>
              </a>
              <a
                href={routesFront.legal}
                className={cn(stls.linkLegal, stls.mb)}
                rel='noreferrer noopener'>
                Сведения об образовательной организации
              </a>
            </>
          )}
        </div>

        <Popup
          trigger={() => (
            <button
              className={stls.btnAccessibilityTrigger}
              aria-label='Версия для слабовидящих'
              title='Версия для слабовидящих'
              name='Версия для слабовидящих'>
              <IconEye classNames={[stls.icon]} />
              <span
                className={cn(
                  // stls.tabletLaptopDesktop,
                  stls.btnAccessibilityTriggerLabel
                )}>
                Версия для слабовидящих
              </span>
            </button>
          )}
          modal
          lockScroll
          nested
          closeOnDocumentClick
          className='GeneralHeaderTop__Popupup'>
          {(close: MouseEventHandler) => (
            <div className={stls.accessibilityControls}>
              <BtnAlpha
                variant={'zeta-reverse'}
                classNames={[stls.btnDefault]}
                onClick={() => {
                  contextAccessibility.setFontSmFalse()
                  contextAccessibility.setFontMdFalse()
                  contextAccessibility.setFontLgFalse()

                  contextAccessibility.setLetterSpacingSmFalse()
                  contextAccessibility.setLetterSpacingMdFalse()
                  contextAccessibility.setLetterSpacingLgFalse()

                  contextAccessibility.setHiddenImgsFalse()
                }}>
                По умолчанию
              </BtnAlpha>
              <div className={stls.btnGroup}>
                <BtnAlpha
                  variant={
                    contextAccessibility.fontSm ? 'zeta' : 'zeta-reverse'
                  }
                  classNames={[stls.btn, stls.fontSm]}
                  onClick={contextAccessibility.setFontSmToggle}>
                  Т
                </BtnAlpha>
                <BtnAlpha
                  variant={
                    contextAccessibility.fontMd ? 'zeta' : 'zeta-reverse'
                  }
                  classNames={[stls.btn, stls.fontMd]}
                  onClick={contextAccessibility.setFontMdToggle}>
                  Т
                </BtnAlpha>
                <BtnAlpha
                  variant={
                    contextAccessibility.fontLg ? 'zeta' : 'zeta-reverse'
                  }
                  classNames={[stls.btn, stls.fontLg]}
                  onClick={contextAccessibility.setFontLgToggle}>
                  Т
                </BtnAlpha>
              </div>
              <div className={stls.btnGroup}>
                <BtnAlpha
                  variant={
                    contextAccessibility.letterSpacingSm
                      ? 'zeta'
                      : 'zeta-reverse'
                  }
                  classNames={[stls.btn, stls.letterSpacingSm]}
                  onClick={contextAccessibility.setLetterSpacingSmToggle}>
                  аа
                </BtnAlpha>
                <BtnAlpha
                  variant={
                    contextAccessibility.letterSpacingMd
                      ? 'zeta'
                      : 'zeta-reverse'
                  }
                  classNames={[stls.btn, stls.letterSpacingMd]}
                  onClick={contextAccessibility.setLetterSpacingMdToggle}>
                  аа
                </BtnAlpha>
                <BtnAlpha
                  variant={
                    contextAccessibility.letterSpacingLg
                      ? 'zeta'
                      : 'zeta-reverse'
                  }
                  classNames={[stls.btn, stls.letterSpacingLg]}
                  onClick={contextAccessibility.setLetterSpacingLgToggle}>
                  аа
                </BtnAlpha>
              </div>
              <BtnAlpha
                variant={
                  contextAccessibility.hiddenImgs ? 'zeta' : 'zeta-reverse'
                }
                classNames={[stls.setHiddenImgsToggle]}
                onClick={contextAccessibility.setHiddenImgsToggle}>
                Скрыть картинки
              </BtnAlpha>
              <BtnAlpha
                variant={'zeta-reverse'}
                classNames={[stls.closeAccessibilityControls]}
                onClick={close}>
                Закрыть панель
              </BtnAlpha>
            </div>
          )}
        </Popup>
      </Wrapper>
    </div>
  )
}

export default GeneralHeaderTop
