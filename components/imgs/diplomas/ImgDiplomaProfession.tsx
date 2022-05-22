import stls from '@/styles/components/imgs/diplomas/ImgDiplomaProfession.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/diplomas/diploma-profession.jpg'

type TypeImgDiplomaProfessionProps = TypeClassNames & TypeImg

const ImgDiplomaProfession = ({
  classNames,
  width,
  height
}: TypeImgDiplomaProfessionProps) => {
  const publicSrc = '/assets/imgs/diplomas/diploma-profession.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Диплом о профессиональной переподготовке'}
        // faded
      />
    </>
  )
}

export default ImgDiplomaProfession
