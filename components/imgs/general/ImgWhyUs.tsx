import stls from '@/styles/components/imgs/general/ImgWhyUs.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/why-us.jpg'

type TypeImgWhyUsProps = TypeClassNames & TypeImg

const ImgWhyUs = ({ classNames, width, height }: TypeImgWhyUsProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/general/why-us.jpg'

  const translations = {
    alt: at.en
      ? 'Students are having fun and studying'
      : at.uz
      ? "Talabalar kulishadi va o'rganadilar"
      : 'Студенты смеются и обучаются'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={translations.alt}
        filterAlt
      />
    </>
  )
}

export default ImgWhyUs
