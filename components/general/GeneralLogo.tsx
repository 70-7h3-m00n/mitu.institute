import stls from '@/styles/components/general/GeneralLogo.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ImgLogo } from '@/components/imgs'

type TypeGeneralLogoProps = TypeClassNames & { atPromo?: boolean }

const GeneralLogo = ({ classNames, atPromo }: TypeGeneralLogoProps) => {
  return atPromo ? (
    <a
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }
      href={routesFront.promo}>
      <ImgLogo classNames={[stls.logo]} />
    </a>
  ) : (
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
