import stls from '@/styles/components/layout/Header.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextPopupContext } from '@/context/index'
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
  const { popupAlphaOpen } = useContext(ContextPopupContext)

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
          <GeneralLogo classNames={[stls.logo]} />
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
            classNames={[stls.btn, stls.btnAlpha]}
            onClick={popupAlphaOpen}>
            <span className={stls.btnTextAlt}>Связаться</span>
            <span className={stls.btnText}>Заказать звонок</span>
          </BtnAlpha>
        </div>
        <GeneralNavTablet links={links} />
      </Wrapper>
    </header>
  )
}

export default Header
