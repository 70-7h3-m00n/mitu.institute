import stls from '@/styles/components/imgs/diplomas/ImgDiplomaBachelor.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-bachelor.jpg'

type TypeImgDiplomaBachelorProps = TypeClassNames & TypeImg

const ImgDiplomaBachelor = ({
  classNames,
  width,
  height
}: TypeImgDiplomaBachelorProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/diplomas/diploma-bachelor.jpg'

  const translations = {
    alt: at.uz ? 'Bakalavr darajasi' : 'Диплом бакалавра'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={translations.alt}
        // faded
      />
    </>
  )
}

export default ImgDiplomaBachelor
