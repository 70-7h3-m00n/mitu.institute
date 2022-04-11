import stls from '@/styles/components/imgs/diplomas/ImgDiploma3.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-3.jpg'
import nextexport from '@/config/nextexport'

type TypeImgDiploma3Props = TypeClassNames & TypeImg

const ImgDiploma3 = ({ classNames, width, height }: TypeImgDiploma3Props) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-3.jpg'

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

export default ImgDiploma3
