import stls from '@/styles/components/imgs/diplomas/ImgDiploma3.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-3.jpg'

type TypeImgDiploma3Props = TypeClassNames & TypeImg

const ImgDiploma3 = ({ classNames, width, height }: TypeImgDiploma3Props) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Диплом'}
        faded
      />
    </>
  )
}

export default ImgDiploma3
