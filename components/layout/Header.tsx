import stls from '@/styles/components/layout/Header.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeHeaderProps = {
  classNames?: TypeClassNames
}

const Header = ({ classNames = [] }: TypeHeaderProps) => {
  const container = getClassNames({ classNames })
  return (
    <header className={cn([stls.container], container) || undefined}>
      Header
    </header>
  )
}

export default Header
