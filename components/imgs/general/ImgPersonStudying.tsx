import stls from '@/styles/components/imgs/general/ImgPersonStudying.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/person-studying.jpg'

type TypeImgPersonStudyingProps = TypeClassNames & TypeImg

const ImgPersonStudying = ({
  classNames,
  width,
  height
}: TypeImgPersonStudyingProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Человек учиться'}
      />
    </>
  )
}

export default ImgPersonStudying
