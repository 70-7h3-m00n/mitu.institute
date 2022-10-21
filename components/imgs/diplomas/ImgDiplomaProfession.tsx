import stls from '@/styles/components/imgs/diplomas/ImgDiplomaProfession.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-profession.jpg'

type TypeImgDiplomaProfessionProps = TypeClassNames & TypeImg

const ImgDiplomaProfession = ({
  classNames,
  width,
  height
}: TypeImgDiplomaProfessionProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/diplomas/diploma-profession.jpg'

  const translations = {
    alt: at.en
      ? 'Professional retraining diploma'
      : at.uz
      ? 'Kasbiy qayta tayyorlash diplomi'
      : 'Диплом о профессиональной переподготовке'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={translations.alt}
        // faded
      />
    </>
  )
}

export default ImgDiplomaProfession
