import stls from '@/styles/components/imgs/diplomas/ImgDiplomaMaster.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-master.jpg'

type TypeImgDiplomaMasterProps = TypeClassNames & TypeImg

const ImgDiplomaMaster = ({
  classNames,
  width,
  height
}: TypeImgDiplomaMasterProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/diplomas/diploma-master.jpg'

  const translations = {
    alt: at.en
      ? 'Master diploma'
      : at.uz
      ? 'Magistr darajasi'
      : 'Диплом магистра'
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

export default ImgDiplomaMaster
