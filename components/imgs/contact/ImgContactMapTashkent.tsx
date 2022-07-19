import stls from '@/styles/components/imgs/general/ImgContactMapTashkent.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/contact/map-tashkent.jpg'

type TypeImgContactMapTashkentProps = TypeClassNames & TypeImg

const ImgContactMapTashkent = ({
  classNames,
  width,
  height
}: TypeImgContactMapTashkentProps) => {
  const publicSrc = '/assets/imgs/contact/map-tashkent.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={publicSrc ? src.width : width}
        height={publicSrc ? src.height : height}
        alt={'Мы на карте в Ташкенте'}
      />
    </>
  )
}

export default ImgContactMapTashkent
