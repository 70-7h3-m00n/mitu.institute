import stls from '@/styles/components/imgs/ImgTemplate.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import Image from 'next/image'
import cn from 'classnames'
import { base64pixel } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeImgTemplateProps = TypeClassNames &
  TypeImg & {
    readonly src: StaticImageData | string
    readonly alt: string
    readonly title?: string
    readonly faded?: boolean
  }

const ImgTemplate = ({
  classNames,
  width,
  height,
  src,
  alt,
  title,
  faded
}: TypeImgTemplateProps) => {
  return (
    <div
      className={
        cn(
          [stls.container],
          { [stls.faded]: faded },
          getClassNames({ classNames })
        ) || undefined
      }
      title={title}>
      <div
        className={cn({
          [stls.faded]: faded,
          [stls.isHidden]: !faded
        })}></div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={stls.img}
        placeholder='blur'
        blurDataURL={base64pixel}
      />
    </div>
  )
}

export default ImgTemplate
