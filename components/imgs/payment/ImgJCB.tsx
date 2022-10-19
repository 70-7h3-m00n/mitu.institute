import stls from '@/styles/components/imgs/payment/ImgJCB.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/payment/jcb-logo.png'

type TypeImgJCBProps = TypeClassNames & TypeImg

const ImgJCB = ({ classNames, width, height }: TypeImgJCBProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/payment/jcb-logo.png'

  const translations = {
    alt: 'JCB'
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

export default ImgJCB
