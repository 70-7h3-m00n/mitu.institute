import stls from '@/styles/components/layout/Footer.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeFooterProps = {
  classNames?: TypeClassNames
}

const Footer = ({ classNames = [] }: TypeFooterProps) => {
  const container = getClassNames({ classNames })
  return (
    <footer className={cn([stls.container], container) || undefined}>
      Footer
    </footer>
  )
}

export default Footer
