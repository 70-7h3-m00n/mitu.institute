import stls from '@/styles/components/imgs/general/ImgStudyCost.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/study-cost.jpg'

type TypeImgStudyCostProps = TypeClassNames & TypeImg

const ImgStudyCost = ({ classNames, width, height }: TypeImgStudyCostProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/general/study-cost.jpg'

  const translations = {
    alt: at.uz ? "Inson o'rganadi" : 'Человек учится'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={translations.alt}
      />
    </>
  )
}

export default ImgStudyCost
