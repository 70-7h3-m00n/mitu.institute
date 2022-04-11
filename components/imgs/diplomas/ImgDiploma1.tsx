import stls from '@/styles/components/imgs/diplomas/ImgDiploma1.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-1.jpg'

type TypeImgDiploma1Props = TypeClassNames & TypeImg

const ImgDiploma1 = ({ classNames, width, height }: TypeImgDiploma1Props) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-1.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Диплом'}
      />
    </>
  )
}

export default ImgDiploma1
