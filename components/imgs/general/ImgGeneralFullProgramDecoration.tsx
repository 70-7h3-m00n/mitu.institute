import stls from '@/styles/components/imgs/general/ImgGeneralFullProgramDecoration.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
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
  const publicSrc = '/assets/imgs/general/full-program-decoration.png'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || 'Декорация'}
        title={title || 'Декорация'}
      />
    </>
  )
}

export default ImgGeneralFullProgramDecoration
