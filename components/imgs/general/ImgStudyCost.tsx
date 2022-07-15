import stls from '@/styles/components/imgs/general/ImgStudyCost.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/study-cost.jpg'

type TypeImgStudyCostProps = TypeClassNames & TypeImg

const ImgStudyCost = ({ classNames, width, height }: TypeImgStudyCostProps) => {
  const publicSrc = '/assets/imgs/general/study-cost.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Человек учится'}
      />
    </>
  )
}

export default ImgStudyCost
