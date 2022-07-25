import stls from '@/styles/components/imgs/diplomas/ImgDiplomaInstitute.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-institute.jpg'

type TypeImgDiplomaInstituteProps = TypeClassNames & TypeImg

const ImgDiplomaInstitute = ({
  classNames,
  width,
  height
}: TypeImgDiplomaInstituteProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/diplomas/diploma-institute.jpg'

  const translations = {
    alt: at.uz ? 'Institut diplomi' : 'Диплом института'
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

export default ImgDiplomaInstitute
