import stls from '@/styles/components/imgs/general/ImgContactMapMoscow.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/contact/map-moscow.jpg'

type TypeImgContactMapMoscowProps = TypeClassNames & TypeImg

const ImgContactMapMoscow = ({
  classNames,
  width,
  height
}: TypeImgContactMapMoscowProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/contact/map-moscow.jpg'

  const translations = {
    alt: at.uz ? 'Biz Moskvadagi xaritada' : 'Мы на карте в Москве'
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

export default ImgContactMapMoscow
