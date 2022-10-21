import stls from '@/styles/components/imgs/general/ImgPersonStudying.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/person-studying.jpg'

type TypeImgPersonStudyingProps = TypeClassNames & TypeImg

const ImgPersonStudying = ({
  classNames,
  width,
  height
}: TypeImgPersonStudyingProps) => {
  const at = useAt()
  const publicSrc = '@/public/assets/imgs/general/person-studying.jpg'

  const translations = {
    alt: at.en
      ? 'Person is studying'
      : at.uz
      ? "Inson o'rganadi"
      : 'Человек учится'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={publicSrc ? src.width : width}
        height={publicSrc ? src.height : height}
        alt={translations.alt}
      />
    </>
  )
}

export default ImgPersonStudying
