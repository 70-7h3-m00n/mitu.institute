import stls from '@/styles/components/imgs/general/ImgProgramContents.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/program-contents.jpg'

type TypeImgProgramContentsProps = TypeClassNames & TypeImg

const ImgProgramContents = ({
  classNames,
  width,
  height
}: TypeImgProgramContentsProps) => {
  const at = useAt()
  const publicSrc = '/assets/imgs/general/program-contents.jpg'

  const translations = {
    alt: at.en ? 'Girl is smiling' : at.uz ? 'Qiz kuladi' : 'Девушка улыбается'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={translations.alt}
        filterAlt
      />
    </>
  )
}

export default ImgProgramContents
