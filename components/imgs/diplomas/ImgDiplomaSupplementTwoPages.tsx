import stls from '@/styles/components/imgs/diplomas/ImgDiplomaSupplementTwoPages.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-supplement-two-pages.jpg'

type TypeImgDiplomaSupplementTwoPagesProps = TypeClassNames & TypeImg

const ImgDiplomaSupplementTwoPages = ({
  classNames,
  width,
  height
}: TypeImgDiplomaSupplementTwoPagesProps) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-supplement-two-pages.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Supplement лицевая и обратная стороны'}
        // faded
      />
    </>
  )
}

export default ImgDiplomaSupplementTwoPages
