import stls from '@/styles/components/imgs/general/ImgContactMapAlmaty.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/contact/map-almaty.jpg'

type TypeImgContactMapAlmatyProps = TypeClassNames & TypeImg

const ImgContactMapAlmaty = ({
  classNames,
  width,
  height
}: TypeImgContactMapAlmatyProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/contact/map-almaty.jpg'

  const translations = {
    alt: at.en
      ? 'Our Almaty location'
      : at.uz
      ? 'Biz Olmaotadagi xaritada'
      : 'Мы на карте в Алматы'
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

export default ImgContactMapAlmaty
