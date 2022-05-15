import stls from '@/styles/components/imgs/general/ImgContactMapMoscow.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/contact/map-moscow.jpg'

type TypeImgContactMapMoscowProps = TypeClassNames & TypeImg

const ImgContactMapMoscow = ({
  classNames,
  width,
  height
}: TypeImgContactMapMoscowProps) => {
  const publicSrc = '/assets/imgs/contact/map-moscow.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={publicSrc ? src.width : width}
        height={publicSrc ? src.height : height}
        alt={'Мы на карте в Москве'}
      />
    </>
  )
}

export default ImgContactMapMoscow
