import stls from '@/styles/components/imgs/icons/ImgLogo.module.sass'
import { TypeClassNames, TypeImg } from '@/types/index'
import { nextexport } from '@/config/index'
import { useCompanyInfo } from '@/hooks/index'
import { ImgTemplate } from '@/components/imgs'
import src from '@/public/assets/imgs/icons/manifest-icon-192.png'

type TypeImgLogoProps = TypeClassNames & TypeImg

const ImgLogo = ({ classNames, width, height }: TypeImgLogoProps) => {
  const publicSrc = '/assets/imgs/icons/manifest-icon-192.png'

  const company = useCompanyInfo()

  return (
    <>
      <ImgTemplate
        classNames={classNames}
        src={nextexport ? publicSrc : src}
        width={nextexport ? src.width : width}
        height={nextexport ? src.height : height}
        alt={company.name}
        title={company.name}
      />
    </>
  )
}

export default ImgLogo
