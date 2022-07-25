import stls from '@/styles/components/imgs/diplomas/ImgDiplomaSupplement.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-supplement.jpg'

type TypeImgDiplomaSupplementProps = TypeClassNames & TypeImg

const ImgDiplomaSupplement = ({
  classNames,
  width,
  height
}: TypeImgDiplomaSupplementProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/diplomas/diploma-supplement.jpg'

  const translations = {
    alt: at.uz ? 'Supplement' : 'Supplement'
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

export default ImgDiplomaSupplement
