import stls from '@/styles/components/popups/PopupUIFormAlpha.module.sass'
import { TypeClassNames, TypeClose, TypeIsPopup } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { UIFormAlpha } from '@/components/uiforms'
import { IconCross } from '@/components/icons'

type TypePopupUIFormAlphaProps = TypeClassNames & TypeClose & TypeIsPopup

const PopupUIFormAlpha = ({
  classNames,
  close,
  isPopup
}: TypePopupUIFormAlphaProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <button className={stls.btnClose} onClick={close}>
            <IconCross classNames={[stls.icon]} />
          </button>
          <UIFormAlpha isPopup={isPopup} />
        </div>
      </Wrapper>
    </div>
  )
}

export default PopupUIFormAlpha
