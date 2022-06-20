import stls from '@/styles/components/imgs/general/ImgGeneralCorporateProgram.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
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
  const publicSrc = '/assets/imgs/general/corporate-program.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || 'Корпоративное обучение'}
        title={title || 'Корпоративное обучение'}
      />
    </>
  )
}

export default ImgGeneralCorporateProgram
