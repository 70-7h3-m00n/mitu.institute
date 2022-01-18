import stls from '@/styles/components/layout/Footer.module.sass'
import { TypeClassNames } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

import { GeneralAddress, GeneralLogo, GeneralNavLaptopDesktop, GeneralPhoneNumber } from '../general'
import routesFront from '@/config/routesFront'


type TypeFooterProps = TypeClassNames

const Footer = ({ classNames }: TypeFooterProps) => {

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
    },
    {
      href: routesFront.home,
      val: 'Часто задаваемые вопросы'
    },
    {
      href: routesFront.home,
      val: 'Поступление без ЕГЭ'
    }
  ]


  return (
    <footer className={cn(stls.container, getClassNames({ classNames })) || undefined}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.content}>
          <GeneralLogo classNames={[stls.logo]} />
          <div className={stls.agreement}>
            <Link href={'#'}>
              <a className={stls.link}>Политика кофиденциальности</a>
            </Link>
            <Link href={'#'}>
              <a className={stls.link}>Политика кофиденциальности</a>
            </Link>
          </div>

          <ul className={stls.list}>
            {links.map(({ href, val }, idx) => (
              <li key={val + idx} className={stls.item}>
                <Link href={href}>
                  <a className={stls.link}>{val}</a>
                </Link>
              </li>
            ))}
          </ul>

          <div className={stls.contacts}>
            <GeneralPhoneNumber classNames={[stls.phone]}/>
            <GeneralAddress classNames={[stls.address]} withIcon/>
            <div className={stls.icons}>

            </div>
          </div>

        </div>
        <p className={stls.owner}>Московский институт технологий и управления, 2021</p>

      </Wrapper>
    </footer>
  )
}

export default Footer
