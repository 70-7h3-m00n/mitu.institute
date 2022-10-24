import stls from '@/styles/components/layout/Footer.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import cn from 'classnames'
import { mituinstitute, routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralLogo,
  GeneralAddress,
  GeneralPhoneNumber,
  GeneralLangBtns
} from '@/components/general'
import {
  IconInstagram,
  IconYoutube,
  IconVK,
  IconFacebook
} from '@/components/icons'

type TypeFooterProps = TypeClassNames

const Footer = ({ classNames }: TypeFooterProps) => {
  const at = useAt()
  const router = useRouter()
  const company = useCompanyInfo()

  const { categories } = useContext(ContextCategoriesContext)

  const navLinks =
    categories
      ?.filter(category => category?.slug && category?.label)
      .map(category => ({
        href: `${routesFront.programs}/${category.slug}`,
        val: category.label
      })) || null

  // const smLinks = [
  //   {
  //     href: '#',
  //     val: <IconInstagram classNames={[stls.instagram, stls.smIcon]} />,
  //     ariaLabel: 'Instagram'
  //   }
  // ]

  const translations = {
    policiesPrivacy: at.en
      ? 'Privacy policy'
      : at.uz
      ? 'Maxfiylik siyosati'
      : 'Политика конфиденциальности',
    policiesTerms: at.en
      ? 'Terms of use'
      : at.uz
      ? 'Foydalanuvchi shartnomasi'
      : 'Пользовательское соглашение',
    paymentHigher: at.en
      ? 'Higher education payment'
      : at.uz
      ? "Oliy ta'lim uchun to'lov"
      : 'Оплата высшего образования',
    paymentAdditional: at.en
      ? 'Professional retraining payment'
      : at.uz
      ? "Qo'shimcha ta'lim uchun to'lov"
      : 'Оплата дополнительного образования',
    contacts: at.en ? 'Contact' : at.uz ? 'Aloqa' : 'Контакты',
    legal: at.en
      ? 'Legal'
      : at.uz
      ? "Ta'lim tashkiloti haqida ma'lumot"
      : 'Сведения об образовательной организации'
  }

  const privacyLinks = [
    {
      href: routesFront.policiesPrivacy,
      val: translations.policiesPrivacy
    },
    {
      href: routesFront.policiesTerms,
      val: translations.policiesTerms
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
                  <a
                    href={href}
                    target='_blank'
                    rel='noreferrer noopener'
                    className={stls.privacyLink}>
                    {val}
                  </a>
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
            <li className={stls.navLinkItem}>
              <Link href={routesFront.paymentHigherEducation}>
                <a className={stls.navLink}>{translations.paymentHigher}</a>
              </Link>
            </li>
            <li className={stls.navLinkItem}>
              <Link href={routesFront.paymentAdditionalEducation}>
                <a className={stls.navLink}>{translations.paymentAdditional}</a>
              </Link>
            </li>
            <li className={stls.navLinkItem}>
              <Link href={routesFront.contact}>
                <a className={stls.navLink}>{translations.contacts}</a>
              </Link>
            </li>
            {/* {at.ru && (
              <li className={stls.navLinkItem}>
                <Link href={routesFront.legal}>
                  <a className={stls.navLink}>{translations.legal}</a>
                </Link>
              </li>
            )} */}
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
            {mituinstitute && (
              <GeneralLangBtns
                classNames={[stls.langBtns, stls.GeneralLangBtns]}
              />
            )}

            {/* <ul className={stls.smLinks}>
              {smLinks.map(({ href, val, ariaLabel }, idx) => (
                <li key={href + idx} className={stls.smLinkItem}>
                  <Link href={href}>
                    <a className={stls.smLink} aria-label={ariaLabel}>
                      {val}
                    </a>
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
        </div>
        <p className={stls.copy}>
          &copy; {company.name}, {new Date().getFullYear()}
        </p>
      </Wrapper>
    </footer>
  )
}

export default Footer
