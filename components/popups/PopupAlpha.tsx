import stls from '@/styles/components/popups/PopupAlpha.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext, useEffect } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextPopupContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { UIFormAlpha } from '@/components/uiforms'
import { IconCross } from '@/components/icons'

type TypePopupAlphaProps = TypeClassNames

const PopupAlpha = ({ classNames }: TypePopupAlphaProps) => {
  const { popupAlphaIsOpen, popupAlphaClose, popupAlphaToggle } =
    useContext(ContextPopupContext)

  const IDPopupAlphaContent = 'IDPopupAlphaContent'

  useEffect(() => {
    const handlePopupAlphaClose = (e: MouseEvent) => {
      const target = e.target as Element
      const content = document.getElementById(IDPopupAlphaContent)
      if (!content?.contains(target)) popupAlphaClose()
    }

    popupAlphaIsOpen &&
      document.addEventListener('click', handlePopupAlphaClose)

    return () => {
      document.removeEventListener('click', handlePopupAlphaClose)
    }
  }, [popupAlphaIsOpen, popupAlphaClose])

  return (
    <div
      className={
        cn(
          [stls.container],
          {
            [stls.isOpen]: popupAlphaIsOpen,
            [stls.isClosed]: !popupAlphaIsOpen
          },
          getClassNames({ classNames })
        ) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div id={IDPopupAlphaContent} className={stls.content}>
          <button className={stls.btnClose} onClick={popupAlphaClose}>
            <IconCross classNames={[stls.icon]} />
          </button>
          <UIFormAlpha classNames={[stls.form]} />
        </div>
      </Wrapper>
    </div>
  )
}

export default PopupAlpha
