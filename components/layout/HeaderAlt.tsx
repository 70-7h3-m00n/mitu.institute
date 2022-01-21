import stls from '@/styles/components/layout/HeaderAlt.module.sass'
import {
  TypeLinksHeaderAlt,
  TypeClassNames,
  TypeProgramCategory
} from '@/types/index'
import { useRouter } from 'next/router'
import { MouseEventHandler, useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoryContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralLogo,
  GeneralPhoneNumber,
  GeneralAddress,
  GeneralNavAltLaptopDesktop,
  GeneralNavAltTablet,
  GeneralPopup
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha, BtnSkipNav } from '@/components/btns'

type TypeHeaderAltProps = TypeClassNames

const HeaderAlt = ({ classNames }: TypeHeaderAltProps) => {
  const router = useRouter()

  const { category, setCategory } = useContext(ContextCategoryContext)

  const links: TypeLinksHeaderAlt = [
    {
      href: routesFront.anchorPrograms,
      val: 'Бакалавриат',
      payload: 'bachelor'
    },
    {
      href: routesFront.anchorPrograms,
      val: 'Магистратура',
      payload: 'master'
    },
    {
      href: routesFront.anchorPrograms,
      val: 'Дополнительное образование',
      payload: 'additional'
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
            <GeneralNavAltLaptopDesktop links={links} />
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
        <GeneralNavAltTablet links={links} />
      </Wrapper>
    </header>
  )
}

export default HeaderAlt
