import stls from '@/styles/components/imgs/general/ImgContactMapTashkent.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/contact/map-tashkent.jpg'

type TypeImgContactMapTashkentProps = TypeClassNames & TypeImg

const ImgContactMapTashkent = ({
  classNames,
  width,
  height
}: TypeImgContactMapTashkentProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/contact/map-tashkent.jpg'

  const translations = {
    alt: at.uz ? 'Biz Olmatoshkent xaritada' : 'Мы на карте в Ташкенте'
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

export default ImgContactMapTashkent
