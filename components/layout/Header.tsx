import stls from '@/styles/components/layout/Header.module.sass'
import Link from 'next/link'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { routeContact, routeHome } from '@/data/routes'
import { number, numberAlt } from '@/data/contact'
import { Wrapper } from '@/components/layout'
import { HeaderTop, Logo } from '@/components/general'

type HeaderType = {
  classNames?: string[]
}

const Header = ({ classNames = [] }: HeaderType) => {
  const container = getClassNames({ classNames })

  const btnsTop = [
    {
      val: number.val,
      href: number.href,
      label: number.label
    },
    {
      val: numberAlt.val,
      href: numberAlt.href,
      label: numberAlt.label
    },
    {
      val: 'Контакты',
      href: routeContact,
      label: 'Адреса и телефоны'
    },
    {
      val: 'Подобрать программу',
      href: routeHome,
      label: 'Заявки на консультацию'
    }
  ]

  const btnsBottom = [
    {
      val: 'Направления',
      href: routeHome
    },
    {
      val: 'Абитуриентам',
      href: routeHome
    },
    {
      val: 'Студентам',
      href: routeHome
    },
    {
      val: 'Об Институте',
      href: routeHome
    },
    {
      val: 'Вход в СДО',
      href: routeHome,
      label: 'Система дистанционного обучения'
    }
  ]
  return (
    <div className={classnames([stls.container], container)}>
      <HeaderTop />
      <Wrapper classNames={[stls.wrapper]}>
        <Logo />
        <nav className={stls.nav}>
          <ul className={classnames([stls.top], [stls.btns])}>
            {btnsTop.map((btn, idx) => (
              <li
                key={`${btn.val}-${idx}`}
                className={classnames(
                  [stls.item],
                  [stls.topItem],
                  [stls[`topItem-${idx}`]]
                )}>
                <Link href={btn.href}>
                  <a className={stls.link}>
                    <span className={stls.linkVal}>{btn.val}</span>
                    {btn.label && (
                      <span className={stls.linkLabel}>{btn.label}</span>
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
          <ul className={classnames([stls.bottom], [stls.btns])}>
            {btnsBottom.map((btn, idx) => (
              <li
                key={`${btn.val}-${idx}`}
                className={classnames(
                  [stls.item],
                  [stls.bottomItem],
                  [stls[`bottomItem-${idx}`]]
                )}>
                <Link href={btn.href}>
                  <a className={stls.link}>
                    <span className={stls.linkVal}>{btn.val}</span>
                    {btn.label && (
                      <span className={stls.linkLabel}>{btn.label}</span>
                    )}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Wrapper>
    </div>
  )
}

export default Header
