import stls from '@/styles/components/popups/PopupImg.module.sass'
import { TypeChildren, TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypePopupImgProps = TypeClassNames & TypeChildren

const PopupImg = ({ classNames, children }: TypePopupImgProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      {children}
    </div>
  )
}

export default PopupImg
