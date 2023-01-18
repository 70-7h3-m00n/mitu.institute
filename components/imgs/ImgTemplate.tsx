import stls from '@/styles/components/imgs/ImgTemplate.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import Image from 'next/image'
import cn from 'classnames'
import { nextexport, base64pixel } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeImgTemplateProps = TypeClassNames &
  TypeImg & {
    // readonly src: StaticImageData | string
    readonly src: any // TODO: figure out better types here
    readonly alt: string
    readonly title?: string
    readonly faded?: boolean
    readonly filter?: boolean
    readonly filterAlt?: boolean
    readonly priority?: boolean
    readonly unoptimized?: boolean
  }

const ImgTemplate = ({
  classNames,
  width,
  height,
  src,
  alt,
  title,
  faded,
  filter,
  filterAlt,
  priority,
  unoptimized
}: TypeImgTemplateProps) => {
  const Tag = nextexport ? 'img' : Image
  return (
    <span
      className={
        cn(
          [stls.container],
          { [stls.containerFaded]: faded },
          { [stls.containerFilter]: filter },
          { [stls.containerFilterAlt]: filterAlt },
          getClassNames({ classNames })
        ) || undefined
      }
      title={title}>
      <span
        className={cn({
          [stls.faded]: faded,
          [stls.filter]: filter,
          [stls.filterAlt]: filterAlt,
          [stls.isHidden]: !faded && !filter && !filterAlt
        })}></span>
      <Tag
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(stls.img, { [stls.nextexport]: nextexport })}
        {...(nextexport ? undefined : { placeholder: 'blur' })}
        {...(nextexport ? undefined : { blurDataURL: base64pixel })}
        {...(nextexport ? undefined : { priority })}
        {...(nextexport ? undefined : { unoptimized })}
      />
    </span>
  )
}

export default ImgTemplate
