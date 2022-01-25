import stls from '@/styles/components/imgs/general/ImgJobTitle.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
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
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || srcDefault}
        width={width}
        height={height}
        alt={alt || 'Человек работает'}
        title={title || 'Человек работает'}
      />
    </>
  )
}

export default ImgJobTitle
