import stls from '@/styles/components/imgs/general/ImgGeneralHowProcessGoesDecoration.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import srcDefault from '@/public/assets/imgs/general/how-process-goes-decoration.png'

type TypeImgGeneralHowProcessGoesDecorationProps = TypeClassNames &
  TypeImg &
  TypeImgExtended

const ImgGeneralHowProcessGoesDecoration = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgGeneralHowProcessGoesDecorationProps) => {
  const publicSrc = '/assets/imgs/general/how-process-goes-decoration.png'

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

export default ImgGeneralHowProcessGoesDecoration
