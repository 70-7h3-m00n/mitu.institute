import stls from '@/styles/components/popups/PopupAlpha.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { contextPopupContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { UIFormAlpha } from '@/components/uiforms'

type TypePopupAlphaProps = TypeClassNames

const PopupAlpha = ({ classNames }: TypePopupAlphaProps) => {
  const { popupAlphaIsOpen } = useContext(contextPopupContext)

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
        <UIFormAlpha classNames={[stls.form]} />
      </Wrapper>
    </div>
  )
}

export default PopupAlpha
