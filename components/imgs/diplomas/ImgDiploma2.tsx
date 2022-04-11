import stls from '@/styles/components/imgs/diplomas/ImgDiploma2.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-2.jpg'

type TypeImgDiploma2Props = TypeClassNames & TypeImg

const ImgDiploma2 = ({ classNames, width, height }: TypeImgDiploma2Props) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-2.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Диплом'}
        faded
      />
    </>
  )
}

export default ImgDiploma2
