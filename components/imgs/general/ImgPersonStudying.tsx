import stls from '@/styles/components/imgs/general/ImgPersonStudying.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/person-studying.jpg'

type TypeImgPersonStudyingProps = TypeClassNames & TypeImg

const ImgPersonStudying = ({
  classNames,
  width,
  height
}: TypeImgPersonStudyingProps) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-1.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={publicSrc ? src.width : width}
        height={publicSrc ? src.height : height}
        alt={'Человек учиться'}
      />
    </>
  )
}

export default ImgPersonStudying
