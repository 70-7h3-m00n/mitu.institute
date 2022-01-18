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
  GeneralPhoneNumber,
  GeneralAddress,
  GeneralNavLaptopDesktop,
  GeneralNavTablet,
  GeneralPopup
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha, BtnSkipNav } from '@/components/btns'

type TypeHeaderProps = TypeClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  const router = useRouter()

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

          <Popup
            // onOpen={() => {
            //   router.push(router.asPath, '?popupIsOpen=true', { shallow: true })
            // }}
            // onClose={() => {
            //   router.push(router.asPath, '?popupIsOpen=false', {
            //     shallow: true
            //   })
            // }}
            trigger={open => {
              // console.log(open)
              return (
                <BtnAlpha
                  variant='delta-reverse'
                  classNames={[stls.btn, stls.btnAlpha]}>
                  <span className={stls.btnTextAlt}>Связаться</span>
                  <span className={stls.btnText}>Заказать звонок</span>
                </BtnAlpha>
              )
            }}
            modal
            lockScroll
            nested
            closeOnDocumentClick>
            {(close: MouseEventHandler) => {
              // router.isReady && router.query.popupIsOpen === 'true' && close()
              // router.isReady && close()
              return (
                <GeneralPopup close={close}>
                  <UIFormAlpha isPopup />
                </GeneralPopup>
              )
            }}
          </Popup>
        </div>
        <GeneralNavTablet links={links} />
      </Wrapper>
    </header>
  )
}

export default Header
