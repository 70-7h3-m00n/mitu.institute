import stls from '@/styles/components/imgs/general/ImgGeneralCorporateProgram.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import srcDefault from '@/public/assets/imgs/general/corporate-program.jpg'

type TypeImgGeneralCorporateProgramProps = TypeClassNames &
  TypeImg &
  TypeImgExtended

const ImgGeneralCorporateProgram = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgGeneralCorporateProgramProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/general/corporate-program.jpg'

  const translations = {
    alt: at.uz ? "Korporativ ta'lim" : 'Корпоративное обучение'
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

export default ImgGeneralCorporateProgram
