import stls from '@/styles/components/general/GeneralPopup.module.sass'
import { TypeClassNames, TypeChildren, TypeClose } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconCross } from '@/components/icons'

type TypeGeneralPopupProps = TypeClassNames &
  TypeChildren &
  TypeClose & {
    slighter?: boolean
  }

const GeneralPopup = ({
  classNames,
  children,
  close,
  slighter
}: TypeGeneralPopupProps) => {
  return (
    <div
      className={
        cn(
          [stls.container],
          { [stls.slighter]: slighter },
          getClassNames({ classNames })
        ) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <button className={stls.btnClose} onClick={close}>
            <IconCross classNames={[stls.icon]} />
          </button>
          {children}
        </div>
      </Wrapper>
    </div>
  )
}

export default GeneralPopup
