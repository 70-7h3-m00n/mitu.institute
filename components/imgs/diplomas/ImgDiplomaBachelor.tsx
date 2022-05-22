import stls from '@/styles/components/imgs/diplomas/ImgDiplomaBachelor.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-bachelor.jpg'

type TypeImgDiplomaBachelorProps = TypeClassNames & TypeImg

const ImgDiplomaBachelor = ({
  classNames,
  width,
  height
}: TypeImgDiplomaBachelorProps) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-bachelor.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Диплом бакалавра'}
        // faded
      />
    </>
  )
}

export default ImgDiplomaBachelor
