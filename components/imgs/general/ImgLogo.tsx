import stls from '@/styles/components/imgs/general/ImgLogo.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { companyName } from '@/config/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/general/logo-536.png'

type TypeImgLogoProps = TypeClassNames & TypeImg

const ImgLogo = ({ classNames, width, height }: TypeImgLogoProps) => {
  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={src}
        width={width}
        height={height}
        alt={companyName}
        title={companyName}
      />
    </>
  )
}

export default ImgLogo
