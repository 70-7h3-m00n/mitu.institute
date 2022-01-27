import stls from '@/styles/components/imgs/general/ImgForWhom.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { ImgTemplate } from '@/components/imgs'
import srcDefault from '@/public/assets/imgs/general/for-whom.jpg'

type TypeImgForWhomProps = TypeClassNames &
  TypeImg &
  TypeImgExtended & {
    filter?: boolean
  }

const ImgForWhom = ({
  classNames,
  src,
  width,
  height,
  alt,
  title,
  filter
}: TypeImgForWhomProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || srcDefault}
        width={width}
        height={height}
        alt={alt || 'Для кого эта программа'}
        title={title}
        filter={filter}
      />
    </>
  )
}

export default ImgForWhom
