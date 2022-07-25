import stls from '@/styles/components/imgs/general/ImgGeneralHowProcessGoesDecoration.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
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
  const at = useAt()
  const publicSrc = '/assets/imgs/general/how-process-goes-decoration.png'

  const translations = {
    alt: at.uz ? 'Dekoratsiya' : 'Декорация'
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

export default ImgGeneralHowProcessGoesDecoration
