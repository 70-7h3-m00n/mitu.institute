import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-college.jpg'

type ImgDiplomaCollege = TypeClassNames & TypeImg

const ImgDiplomaCollege = ({
  classNames,
  width,
  height
}: ImgDiplomaCollege) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/diplomas/diploma-college.jpg'

  const translations = {
    alt: at.en
      ? "Diploma of secondary vocational education"
      : at.uz
      ? "O'rta kasb-hunar ta'limi diplomi"
      : 'Диплом о среднем профессиональном образовании'
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

export default ImgDiplomaCollege
