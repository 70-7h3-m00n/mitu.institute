import stls from '@/styles/components/imgs/general/ImgGeneralFullProgramDecoration.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import srcDefault from '@/public/assets/imgs/general/full-program-decoration.png'

type TypeImgGeneralFullProgramDecorationProps = TypeClassNames &
  TypeImg &
  TypeImgExtended

const ImgGeneralFullProgramDecoration = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgGeneralFullProgramDecorationProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/general/full-program-decoration.png'

  const translations = {
    alt: at.en ? 'Decoration' : at.uz ? 'Dekoratsiya' : 'Декорация'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || translations.alt}
        title={title || translations.alt}
      />
    </>
  )
}

export default ImgGeneralFullProgramDecoration
