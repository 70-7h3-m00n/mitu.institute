import stls from '@/styles/components/imgs/general/ImgHeroLady.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/hero-lady.png'

type TypeImgHeroLadyProps = TypeClassNames & TypeImg

const ImgHeroLady = ({ classNames, width, height }: TypeImgHeroLadyProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/general/hero-lady.png'

  const translations = {
    alt: at.en ? "Girl's smiling" : at.uz ? 'Qiz kuladi' : 'Девушка улыбается'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={translations.alt}
        priority
      />
    </>
  )
}

export default ImgHeroLady
