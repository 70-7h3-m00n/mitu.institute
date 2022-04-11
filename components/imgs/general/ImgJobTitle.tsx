import stls from '@/styles/components/imgs/general/ImgJobTitle.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import srcDefault from '@/public/assets/imgs/general/job-title.jpg'

type TypeImgJobTitleProps = TypeClassNames & TypeImg & TypeImgExtended

const ImgJobTitle = ({
  classNames,
  src,
  width,
  height,
  alt,
  title
}: TypeImgJobTitleProps) => {
  const publicSrc = '/assets/imgs/general/job-title.jpg'

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || 'Человек работает'}
        title={title || 'Человек работает'}
      />
    </>
  )
}

export default ImgJobTitle
