import stls from '@/styles/components/popups/PopupLoader.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconLoader } from '@/components/icons'
import { useAt } from '@/hooks/index'

type TypePopupLoaderProps = TypeClassNames

const PopupLoader = ({ classNames }: TypePopupLoaderProps) => {
  const at = useAt()

  const translations = {
    pTop: at.uz ? 'Arizangiz yuborilmoqda...' : 'Ваша заявка отправляется...',
    pBottom: at.uz ? 'Iltimos kuting' : 'Пожалуйста, подождите'
  }

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <IconLoader classNames={[stls.icon]} />
      <p className={cn(stls.p, stls.pTop)}>{translations.pTop}</p>
      <p className={cn(stls.p, stls.pBottom)}>{translations.pBottom}</p>
    </div>
  )
}

export default PopupLoader
