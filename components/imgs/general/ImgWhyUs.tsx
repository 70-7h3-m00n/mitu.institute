import stls from '@/styles/components/imgs/general/ImgWhyUs.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/why-us.jpg'

type TypeImgWhyUsProps = TypeClassNames & TypeImg

const ImgWhyUs = ({ classNames, width, height }: TypeImgWhyUsProps) => {
  const publicSrc = '/assets/imgs/general/why-us.jpg'
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Студенты смеются и обучаются'}
        filterAlt
      />
    </>
  )
}

export default ImgWhyUs
