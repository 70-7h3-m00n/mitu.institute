import stls from '@/styles/components/imgs/general/ImgWhyUs.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/why-us.jpg'

type TypeImgWhyUsProps = TypeClassNames & TypeImg

const ImgWhyUs = ({ classNames, width, height }: TypeImgWhyUsProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Студенты смеются и обучаются'}
        filterAlt
      />
    </>
  )
}

export default ImgWhyUs
