import stls from '@/styles/components/layout/Header.module.sass'
import { TypeClassNames } from '@/types/index'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
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
  const { categories } = useContext(ContextCategoriesContext)

  const links =
    categories
      ?.filter(category => category.slug && category.label)
      .map(category => ({
        href: `${routesFront.programs}/${category.slug}` || '#',
        val: category.label || ''
      })) || null

  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <BtnSkipNav />
      <GeneralHeaderTop classNames={[stls.top]} />
      <GeneralHeaderMiddle classNames={[stls.middle]} />
      <GeneralHeaderBottom classNames={[stls.bottom]} links={links} />
    </header>
  )
}

export default Header
