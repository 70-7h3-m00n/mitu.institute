import stls from '@/styles/components/imgs/diplomas/ImgDiplomaSupplement.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-supplement.jpg'

type TypeImgDiplomaSupplementProps = TypeClassNames & TypeImg

const ImgDiplomaSupplement = ({
  classNames,
  width,
  height
}: TypeImgDiplomaSupplementProps) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-supplement.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Supplement'}
        // faded
      />
    </>
  )
}

export default ImgDiplomaSupplement
