import stls from '@/styles/components/imgs/diplomas/ImgDiploma2.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-2.jpg'

type TypeImgDiploma2Props = TypeClassNames & TypeImg

const ImgDiploma2 = ({ classNames, width, height }: TypeImgDiploma2Props) => {
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

export default ImgDiploma2
