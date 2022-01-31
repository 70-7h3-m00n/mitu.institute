import stls from '@/styles/components/imgs/general/ImgProgramContents.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/program-contents.jpg'

type TypeImgProgramContentsProps = TypeClassNames & TypeImg

const ImgProgramContents = ({
  classNames,
  width,
  height
}: TypeImgProgramContentsProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={'Девушка улыбается'}
        filterAlt
      />
    </>
  )
}

export default ImgProgramContents
