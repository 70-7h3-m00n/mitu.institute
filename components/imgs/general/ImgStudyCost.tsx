import stls from '@/styles/components/imgs/general/ImgStudyCost.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/study-cost.jpg'

type TypeImgStudyCostProps = TypeClassNames & TypeImg

const ImgStudyCost = ({ classNames, width, height }: TypeImgStudyCostProps) => {
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

export default ImgStudyCost
