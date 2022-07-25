import stls from '@/styles/components/imgs/diplomas/ImgDiplomaSupplementTwoPages.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-supplement-two-pages.jpg'

type TypeImgDiplomaSupplementTwoPagesProps = TypeClassNames & TypeImg

const ImgDiplomaSupplementTwoPages = ({
  classNames,
  width,
  height
}: TypeImgDiplomaSupplementTwoPagesProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/diplomas/diploma-supplement-two-pages.jpg'

  const translations = {
    alt: at.uz
      ? "Old va orqa tomonni qo'llab-quvvatlash"
      : 'Supplement лицевая и обратная стороны'
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

export default ImgDiplomaSupplementTwoPages
