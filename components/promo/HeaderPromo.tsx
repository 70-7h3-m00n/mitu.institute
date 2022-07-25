import stls from '@/styles/components/promo/HeaderPromo.module.sass'
import { TypeLinksHeaderPromo, TypeClassNames } from '@/types/index'
import { useRouter } from 'next/router'
import { MouseEventHandler, useContext, useEffect, useState } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralLogo,
  GeneralPhoneNumber,
  GeneralAddress,
  GeneralPopup
} from '@/components/general'
import {
  GeneralNavPromoLaptopDesktop,
  GeneralNavPromoTablet
} from '@/components/promo'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha, BtnSkipNav } from '@/components/btns'

type TypeHeaderPromoProps = TypeClassNames

const HeaderPromo = ({ classNames }: TypeHeaderPromoProps) => {
  const at = useAt()
  const router = useRouter()
  const [isBrowser, setIsBrowser] = useState(false)
  const { categories } = useContext(ContextCategoriesContext)

  const translations = {
    btnVal: at.uz ? "Qo'ng'iroqni buyurtma qiling" : 'Заказать звонок',
    btnValAlt: at.uz ? 'Aloqa' : 'Связаться'
  }

  useEffect(() => {
    setIsBrowser(true)
  }, [isBrowser])

  const links: TypeLinksHeaderPromo =
    categories?.map(category => ({
      href: routesFront.anchorPrograms,
      val: category?.label || null,
      payload: { categories, curCategorySlug: category?.slug || null }
    })) || null

  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <BtnSkipNav />
          <GeneralLogo classNames={[stls.logo]} atPromo />
          <div className={stls.contactNav}>
            <div className={stls.phoneAddress}>
              <GeneralPhoneNumber withIcon withLabel />
              <GeneralAddress
                classNames={[stls.address, stls.laptopDesktop]}
                withIcon
              />
            </div>
            <GeneralNavPromoLaptopDesktop links={links} />
          </div>
          <Popup
            // onOpen={() => {
            //   router.push(router.asPath, '#popup', { shallow: true })
            //   // window.addEventListener('popstate', closePopup)
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
                  <span className={stls.btnTextAlt}>
                    {translations.btnValAlt}
                  </span>
                  <span className={stls.btnText}>{translations.btnVal}</span>
                </BtnAlpha>
              )
            }}
            modal
            lockScroll
            nested
            closeOnDocumentClick>
            {(close: MouseEventHandler) => {
              // router.isReady && router.query.popupIsOpen === 'true' && close()
              // if (isBrowser) window.onhashchange = () => close()
              // const closePopup = () => {
              //   window.removeEventListener('popstate', closePopup)
              //   close()
              // }
              // isBrowser && window.addEventListener('popstate', closePopup)
              // router.beforePopState(e => {
              //   console.log(e)
              // })
              return (
                <GeneralPopup close={close}>
                  <UIFormAlpha isPopup />
                </GeneralPopup>
              )
            }}
          </Popup>
        </div>
        <GeneralNavPromoTablet links={links} />
      </Wrapper>
    </header>
  )
}

export default HeaderPromo
