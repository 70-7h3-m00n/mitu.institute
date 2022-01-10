import stls from '@/styles/components/imgs/general/ImgStudent.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/student.jpg'

type TypeImgStudentProps = TypeClassNames & TypeImg

const ImgStudent = ({ classNames, width, height }: TypeImgStudentProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Девушка учит'}
      />
    </>
  )
}

export default ImgStudent
