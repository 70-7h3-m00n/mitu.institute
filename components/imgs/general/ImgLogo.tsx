import stls from '@/styles/components/imgs/general/ImgLogo.module.sass'
import Image from 'next/image'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import pic from '@/public/assets/imgs/general/logo.png'

type ImgLogoType = {
  classNames?: string[]
  width?: number
  height?: number
}

const ImgLogo = ({ classNames = [], width, height }: ImgLogoType) => {
  const container = getClassNames({ classNames })
  return (
    <div className={classnames([stls.container], container)}>
      <Image
        src={pic}
        alt='Московский Институт Технологий и Управления'
        className={stls.img}
        width={width}
        height={height}
        placeholder='blur'
      />
    </div>
  )
}

export default ImgLogo
