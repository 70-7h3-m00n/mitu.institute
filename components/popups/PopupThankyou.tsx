import stls from '@/styles/components/popups/PopupThankyou.module.sass'
import { TypeClassNames, TypeClose } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { BtnAlpha } from '@/components/btns'

type TypePopupThankyouProps = TypeClassNames & TypeClose

const PopupThankyou = ({ classNames, close }: TypePopupThankyouProps) => {
  // @todo handle marketing triggers
  // useEffect(() => {
  //   const tagManagerArgs = {
  //     dataLayer: {
  //       event: 'generate_lead',
  //       ecommerce: {
  //         add: {
  //           actionField: {
  //             id: programId
  //           },
  //           products: [
  //             {
  //               id: programId,
  //               name: programTitle,
  //               programFormat: at.online
  //                 ? 'online'
  //                 : at.blended
  //                 ? 'blended'
  //                 : null,
  //               programType: at.mini ? 'mini' : at.mba ? 'mba' : null
  //             }
  //           ]
  //         }
  //       }
  //     },
  //     dataLayerName: 'dataLayer'
  //   }
  //   TagManager.dataLayer(tagManagerArgs)
  // }, [])

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