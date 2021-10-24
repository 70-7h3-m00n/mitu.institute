import stls from '@/styles/components/general/Logo.module.sass'
import Link from 'next/link'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { routeHome } from '@/data/routes'
import { ImgLogo } from '@/components/imgs'

type LogoType = {
  classNames?: string[]
}

const Logo = ({ classNames = [] }: LogoType) => {
  const container = getClassNames({ classNames })
  return (
    <Link href={routeHome}>
      <a className={classnames([stls.container], container)}>
        <ImgLogo classNames={[stls.img]} />
        <span className={stls.text}>
          МОСКОВСКИЙ ИНСТИТУТ <br />
          <span className={stls.highlight}>
            ТЕХНОЛОГИЙ И <br /> УПРАВЛЕНИЯ
          </span>
        </span>
      </a>
    </Link>
  )
}

export default Logo
