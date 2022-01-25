import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { TypeClassNames, TypeClose } from '@/types/index'
import { useEffect } from 'react'
import cn from 'classnames'
import { getClassNames, lead } from '@/helpers/index'
import { BtnAlpha } from '@/components/btns'

type TypePopupThankyouProps = TypeClassNames & TypeClose

const PopupThankyou = ({ classNames, close }: TypePopupThankyouProps) => {
  useEffect(() => {
    lead()
  }, [])

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <p className={stls.thankyou}>Спасибо!</p>
      <p className={cn(stls.p, stls.pTop)}>Ваша заявка отправлена</p>
      <p className={cn(stls.p, stls.pBottom)}>
        Мы свяжемся с Вами в ближайшее время!
      </p>
      <BtnAlpha variant='alpha' onClick={close}>
        Закрыть
      </BtnAlpha>
    </div>
  )
}

export default PopupThankyou
