import stls from '@/styles/components/general/GeneralNavTablet.module.sass'
import { TypeClassNames, TypeRoute } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralNavTabletProps = TypeClassNames & {
  links: {
    href: TypeRoute
    val: string
  }[]
}

const GeneralNavTablet = ({ classNames, links }: TypeGeneralNavTabletProps) => {
  return (
    <nav
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <ul className={stls.links}>
        {links.map(({ href, val }, idx) => (
          <li key={val + idx} className={stls.linkItem}>
            <Link href={href}>
              <a className={stls.link}>{val}</a>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GeneralNavTablet
