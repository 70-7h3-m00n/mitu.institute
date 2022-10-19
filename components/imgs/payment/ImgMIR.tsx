import stls from '@/styles/components/imgs/payment/ImgMir.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/payment/mir-logo.png'

type TypeImgMirProps = TypeClassNames & TypeImg

const ImgMir = ({ classNames, width, height }: TypeImgMirProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/payment/mir-logo.png'

  const translations = {
    alt: 'МИР'
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

export default ImgMir
