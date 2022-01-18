import stls from '@/styles/components/general/GeneralLogo.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ImgLogo } from '@/components/imgs'

type TypeGeneralLogoProps = TypeClassNames

const GeneralLogo = ({ classNames }: TypeGeneralLogoProps) => {
  return (
    <Link href={routesFront.home}>
      <a
        className={
          cn([stls.container], getClassNames({ classNames })) || undefined
        }>
        <ImgLogo classNames={[stls.logo]} />
      </a>
    </Link>
  )
}

export default GeneralLogo
