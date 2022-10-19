import stls from '@/styles/components/imgs/payment/ImgVisa.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/payment/visa-logo.png'

type TypeImgVisaProps = TypeClassNames & TypeImg

const ImgVisa = ({ classNames, width, height }: TypeImgVisaProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/payment/visa-logo.png'

  const translations = {
    alt: 'Visa International'
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

export default ImgVisa
