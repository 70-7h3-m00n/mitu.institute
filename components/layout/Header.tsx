import stls from '@/styles/components/layout/Header.module.sass'
import { TypeClassNames } from '@/types/index'
import { useRouter } from 'next/router'
import { MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralLogo,
  GeneralHeaderTop,
  GeneralHeaderMiddle,
  GeneralHeaderBottom,
  GeneralPhoneNumber,
  GeneralAddress,
  GeneralNavAltLaptopDesktop,
  GeneralNavAltTablet,
  GeneralPopup
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha, BtnSkipNav } from '@/components/btns'

type TypeHeaderProps = TypeClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  const router = useRouter()

  const links = [
    {
      href: routesFront.programsBachelor,
      val: 'Бакалавриат'
    },
    {
      href: routesFront.programsMaster,
      val: 'Магистратура'
    },
    {
      href: routesFront.programsAdditional,
      val: 'Дополнительное образование'
    }
  ]

  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <BtnSkipNav />
      <GeneralHeaderTop classNames={[stls.top]} />
      <GeneralHeaderMiddle classNames={[stls.middle]} />
      <GeneralHeaderBottom classNames={[stls.bottom]} links={links} />
    </header>
  )
}

export default Header
