import stls from '@/styles/components/imgs/general/ImgJobTitle.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { nextexport } from '@/config/index'
import { useAt } from '@/hooks/index'
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
  const at = useAt()
  const publicSrc = '/assets/imgs/general/job-title.jpg'

  const translations = {
    alt: at.en
      ? 'Person is working'
      : at.uz
      ? 'Inson ishlaydi'
      : 'Человек работает'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || translations.alt}
        title={title || translations.alt}
      />
    </>
  )
}

export default ImgJobTitle
