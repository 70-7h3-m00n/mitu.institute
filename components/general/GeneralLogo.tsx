import stls from '@/styles/components/general/GeneralLogo.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
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
  const at = useAt()

  const company = useCompanyInfo()

  return (
    <Link href={atPromo ? routesFront.promo : routesFront.home}>
      <a
        className={
          cn([stls.container], getClassNames({ classNames })) || undefined
        }>
        <ImgLogo classNames={[stls.logo]} />
        {withTitle && !atPromo && (
          <span className={stls.companyName}>{company.name}</span>
        )}
      </a>
    </Link>
  )
}

export default GeneralLogo
