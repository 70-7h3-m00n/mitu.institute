import stls from '@/styles/components/imgs/general/ImgTeacher.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
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
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || srcDefault}
        width={width}
        height={height}
        alt={alt || 'Преподаватель'}
        title={title || 'Преподаватель'}
      />
    </>
  )
}

export default ImgTeacher
