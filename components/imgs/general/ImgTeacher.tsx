import stls from '@/styles/components/imgs/general/ImgTeacher.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
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
  const publicSrc = '/assets/imgs/general/teacher.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || 'Преподаватель'}
        title={title || 'Преподаватель'}
      />
    </>
  )
}

export default ImgTeacher
