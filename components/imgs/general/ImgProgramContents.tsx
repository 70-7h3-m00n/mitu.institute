import stls from '@/styles/components/imgs/general/ImgProgramContents.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/program-contents.jpg'

type TypeImgProgramContentsProps = TypeClassNames & TypeImg

const ImgProgramContents = ({
  classNames,
  width,
  height
}: TypeImgProgramContentsProps) => {
  const publicSrc = '/assets/imgs/general/program-contents.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={'Девушка улыбается'}
        filterAlt
      />
    </>
  )
}

export default ImgProgramContents
