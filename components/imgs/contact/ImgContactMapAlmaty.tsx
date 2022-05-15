import stls from '@/styles/components/imgs/general/ImgContactMapAlmaty.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/contact/map-almaty.jpg'

type TypeImgContactMapAlmatyProps = TypeClassNames & TypeImg

const ImgContactMapAlmaty = ({
  classNames,
  width,
  height
}: TypeImgContactMapAlmatyProps) => {
  const publicSrc = '/assets/imgs/contact/map-almaty.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={publicSrc ? src.width : width}
        height={publicSrc ? src.height : height}
        alt={'Мы на карте в Алматы'}
      />
    </>
  )
}

export default ImgContactMapAlmaty
