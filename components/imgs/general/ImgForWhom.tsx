import stls from '@/styles/components/imgs/general/ImgForWhom.module.sass'
import { TypeClassNames, TypeImg, TypeImgExtended } from '@/types/index'
import { useContext } from 'react'
import { nextexport } from '@/config/index'
import { ContextProgramContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import srcDefaultRegular from '@/public/assets/imgs/general/for-whom.jpg'
import srcDefaultAdditional from '@/public/assets/imgs/general/for-whom-additional.jpg'

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
  const at = useAt()
  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional'

  const publicSrc = atAdditional
    ? '/assets/imgs/general/for-whom-additional.jpg'
    : '/assets/imgs/general/for-whom.jpg'

  const srcDefault = atAdditional ? srcDefaultAdditional : srcDefaultRegular

  const translations = {
    alt: at.uz ? 'Ushbu dastur kim uchun' : 'Для кого эта программа'
  }

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src || (nextexport ? publicSrc : srcDefault)}
        width={nextexport ? srcDefault.width : width}
        height={nextexport ? srcDefault.height : height}
        alt={alt || translations.alt}
        title={title}
        filter={filter}
      />
    </>
  )
}

export default ImgForWhom
