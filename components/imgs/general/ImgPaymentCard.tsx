import stls from '@/styles/components/imgs/general/ImgPaymentCard.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/card.png'

type TypeImgPaymentCardProps = TypeClassNames & TypeImg

const ImgPaymentCard = ({ classNames, width, height }: TypeImgPaymentCardProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'банковская карта'}
        priority
      />
    </>
  )
}

export default ImgPaymentCard
