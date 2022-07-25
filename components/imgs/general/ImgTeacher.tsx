import stls from '@/styles/components/imgs/general/ImgTeacher.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import srcDefault from '@/public/assets/imgs/general/teacher.jpg'

type TypeImgTeacherProps = TypeClassNames & TypeImg & TypeImgExtended

const ImgTeacher = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgTeacherProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/general/teacher.jpg'

  const translations = {
    alt: at.uz ? "O'qituvchi" : 'Преподаватель'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || translations.alt}
        title={title || translations.alt}
      />
    </>
  )
}

export default ImgTeacher
