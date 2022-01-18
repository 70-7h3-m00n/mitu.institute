import stls from '@/styles/components/popups/PopupLoader.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconLoader } from '@/components/icons'

type TypePopupLoaderProps = TypeClassNames

const PopupLoader = ({ classNames }: TypePopupLoaderProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <IconLoader classNames={[stls.icon]} />
      <p className={cn(stls.p, stls.pTop)}>Ваша заявка отправляется...</p>
      <p className={cn(stls.p, stls.pBottom)}>Пожалуйста, подождите</p>
    </div>
  )
}

export default PopupLoader
