import stls from '@/styles/components/imgs/general/ImgProgramHero.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
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
  const publicSrc = '/assets/imgs/general/program-hero.png'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || 'Курс'}
        title={title || 'Курс'}
        priority
      />
    </>
  )
}

export default ImgProgramHero
