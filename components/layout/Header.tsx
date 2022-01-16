import stls from '@/styles/components/layout/Header.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { contextPopupContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralLogo,
  GeneralPhoneNumber,
  GeneralAddress,
  GeneralNavLaptopDesktop,
  GeneralNavTablet
} from '@/components/general'
import { BtnAlpha, BtnSkipNav } from '@/components/btns'

type TypeHeaderProps = TypeClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  const { popupAlphaOpen } = useContext(contextPopupContext)

  const links = [
    {
      href: routesFront.home,
      val: 'Бакалавриат'
    },
    {
      href: routesFront.home,
      val: 'Магистратура'
    },
    {
      href: routesFront.home,
      val: 'Дополнительное образование'
    }
  ]

  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <BtnSkipNav />
          <GeneralLogo />
          <div className={stls.contactNav}>
            <div className={stls.phoneAddress}>
              <GeneralPhoneNumber withIcon withLabel />
              <GeneralAddress
                classNames={[stls.address, stls.laptopDesktop]}
                withIcon
              />
            </div>
            <GeneralNavLaptopDesktop links={links} />
          </div>
          <BtnAlpha
            variant='delta-reverse'
            classNames={[stls.btn, stls.tabletLaptopDesktop]}
            onClick={popupAlphaOpen}>
            Заказать звонок
          </BtnAlpha>
        </div>
        <GeneralNavTablet links={links} />
      </Wrapper>
    </header>
  )
}

export default Header
