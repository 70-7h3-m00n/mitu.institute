import stls from '@/styles/components/imgs/diplomas/ImgDiplomaInstitute.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-institute.jpg'

type TypeImgDiplomaInstituteProps = TypeClassNames & TypeImg

const ImgDiplomaInstitute = ({
  classNames,
  width,
  height
}: TypeImgDiplomaInstituteProps) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-institute.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Диплом института'}
        // faded
      />
    </>
  )
}

export default ImgDiplomaInstitute
