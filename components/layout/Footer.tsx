import stls from '@/styles/components/layout/Footer.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import { routesFront, companyName } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralLogo,
  GeneralAddress,
  GeneralPhoneNumber
} from '@/components/general'
import {
  IconInstagram,
  IconYoutube,
  IconVK,
  IconFacebook
} from '@/components/icons'

type TypeFooterProps = TypeClassNames

const Footer = ({ classNames }: TypeFooterProps) => {
  const { categories } = useContext(ContextCategoriesContext)

  const navLinks =
    categories
      ?.filter(category => category?.slug && category?.label)
      .map(category => ({
        href: `${routesFront.programs}/${category.slug}`,
        val: category.label
      })) || null

  const smLinks = [
    {
      href: '#',
      val: <IconInstagram classNames={[stls.instagram, stls.smIcon]} />,
      ariaLabel: 'Instagram'
    }
  ]

  const privacyLinks = [
    {
      href: routesFront.policiesPrivacy,
      val: 'Политика кофиденциальности'
    },
    {
      href: routesFront.policiesTerms,
      val: 'Пользовательское соглашение'
    }
  ]

  return (
    <footer
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.top}>
          <GeneralLogo
            classNames={[stls.logo, stls.generalLogo, stls.phoneTablet]}
          />
          <div className={stls.logoNPrivacy}>
            <GeneralLogo
              classNames={[stls.logo, stls.generalLogo, stls.laptopDesktop]}
            />
            <ul className={stls.privacyLinks}>
              {privacyLinks.map(({ href, val }, idx) => (
                <li key={href + idx} className={stls.privacyLinkItem}>
                  <Link href={href}>
                    <a className={stls.privacyLink}>{val}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <ul className={stls.navLinks}>
            {navLinks?.map(({ href, val }, idx) => (
              <li
                key={(val || 'FooterLinks_link') + idx}
                className={stls.navLinkItem}>
                <Link href={href}>
                  <a className={stls.navLink}>{val}</a>
                </Link>
              </li>
            ))}
          </ul>
          <div className={stls.contacts}>
            <GeneralPhoneNumber
              classNames={[stls.phoneNumber, stls.generalPhoneNumber]}
              onFocusReverse
            />
            <GeneralAddress
              classNames={[stls.address, stls.generalAddress]}
              withIcon
              biggerIcon
              withoutBr
            />
            <ul className={stls.smLinks}>
              {smLinks.map(({ href, val, ariaLabel }, idx) => (
                <li key={href + idx} className={stls.smLinkItem}>
                  <Link href={href}>
                    <a className={stls.smLink} aria-label={ariaLabel}>
                      {val}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className={stls.copy}>
          &copy; {companyName}, {new Date().getFullYear()}
        </p>
      </Wrapper>
    </footer>
  )
}

export default Footer
