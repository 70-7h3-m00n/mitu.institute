import stls from '@/styles/components/imgs/general/ImgProgramHero.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
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
  const at = useAt()
  const publicSrc = '/assets/imgs/general/program-hero.png'

  const translations = {
    alt: at.uz ? 'Kurs' : 'Курс'
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
        priority
      />
    </>
  )
}

export default ImgProgramHero
