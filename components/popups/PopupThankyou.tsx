import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { TypeClassNames, TypeClose } from '@/types/index'
import { useContext, useEffect } from 'react'
import cn from 'classnames'
import { getClassNames, lead } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { BtnAlpha } from '@/components/btns'

type TypePopupThankyouProps = TypeClassNames &
  TypeClose & {
    id: string
  }

const PopupThankyou = ({ classNames, close, id }: TypePopupThankyouProps) => {
  const at = useAt()
  const { program } = useContext(ContextProgramContext)

  useEffect(() => {
    let googleClientId = null
    // // @ts-expect-error
    // if (ga) {
    //   // @ts-expect-error
    //   googleClientId = ga?.getAll()?.[0]?.get('clientId')
    // }
    lead({ id, program, googleClientId })
  }, [])

  const translations = {
    thankyou: at.uz ? 'Rahmat!' : 'Спасибо!',
    pTop: at.uz ? 'Sizning arizangiz yuborildi' : 'Ваша заявка отправлена',
    pBottom: at.uz
      ? "Tez orada siz bilan bog'lanamiz!"
      : 'Мы свяжемся с Вами в ближайшее время!',
    close: at.uz ? 'Yopish' : 'Закрыть'
  }

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <p className={stls.thankyou}>{translations.thankyou}</p>
      <p className={cn(stls.p, stls.pTop)}>{translations.pTop}</p>
      <p className={cn(stls.p, stls.pBottom)}>{translations.pBottom}</p>
      <BtnAlpha variant='alpha' onClick={close}>
        {translations.close}
      </BtnAlpha>
    </div>
  )
}

export default PopupThankyou
