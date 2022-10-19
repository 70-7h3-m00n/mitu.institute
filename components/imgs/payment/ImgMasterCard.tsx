import stls from '@/styles/components/imgs/payment/ImgMasterCard.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/payment/mastercard-logo.png'

type TypeImgMasterCardProps = TypeClassNames & TypeImg

const ImgMasterCard = ({
  classNames,
  width,
  height
}: TypeImgMasterCardProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/payment/mastercard-logo.png'

  const translations = {
    alt: 'Mastercard Worldwide'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={translations.alt}
      />
    </>
  )
}

export default ImgMasterCard
