import stls from '@/styles/components/imgs/general/ImgProgramHero.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import srcDefault from '@/public/assets/imgs/general/program-hero.png'

type TypeImgProgramHeroProps = TypeClassNames & TypeImg & TypeImgExtended

const ImgProgramHero = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgProgramHeroProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || srcDefault}
        width={width}
        height={height}
        alt={alt || 'Курс'}
        title={title || 'Курс'}
      />
    </>
  )
}

export default ImgProgramHero
