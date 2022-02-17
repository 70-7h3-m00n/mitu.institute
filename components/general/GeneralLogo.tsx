import stls from '@/styles/components/general/GeneralLogo.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront, companyName } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ImgLogo } from '@/components/imgs'

type TypeGeneralLogoProps = TypeClassNames & {
  atPromo?: boolean
  withTitle?: boolean
}

const GeneralLogo = ({
  classNames,
  atPromo,
  withTitle
}: TypeGeneralLogoProps) => {
  return (
    <Link href={atPromo ? routesFront.promo : routesFront.home}>
      <a
        className={
          cn([stls.container], getClassNames({ classNames })) || undefined
        }>
        <ImgLogo classNames={[stls.logo]} />
        {withTitle && (
          <span className={stls.companyName}>{!atPromo && companyName}</span>
        )}
      </a>
    </Link>
  )
}

export default GeneralLogo
