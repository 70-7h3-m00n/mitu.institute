import stls from '@/styles/components/layout/Header.module.sass'
import { TypeClassNames } from '@/types/index'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront, mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'
import {
  GeneralHeaderTop,
  GeneralHeaderMiddle,
  GeneralHeaderBottom
} from '@/components/general'
import { BtnSkipNav } from '@/components/btns'

type TypeHeaderProps = TypeClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  const router = useRouter()
  const { categories, curCategorySlug } = useContext(ContextCategoriesContext)

  const links = mituinstitute
    ? categories
        ?.filter(category => category?.slug && category?.label)
        .map(category => ({
          href: `${routesFront.programs}/${category.slug}` || '#',
          val: category.label || '',
          isActive:
            router.query.category === category.slug && !router.query.program
        })) || null
    : [
        {
          href: `https://lms.mitu.msk.ru`,
          val: 'ЭИОС',
          passHref: true
        },
        {
          href: `https://urait.ru`,
          val: 'ЭБС',
          passHref: true
        },
        {
          href: `${routesFront.legal}`,
          val: 'Сведения об образовательной организации',
          isActive: router.asPath === routesFront.legal
        }
      ]

  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <BtnSkipNav />
      {!mituinstitute && <GeneralHeaderTop classNames={[stls.top]} />}
      <GeneralHeaderMiddle classNames={[stls.middle]} />
      <GeneralHeaderBottom classNames={[stls.bottom]} links={links} />
    </header>
  )
}

export default Header
