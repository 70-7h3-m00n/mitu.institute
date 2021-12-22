import stls from '@/styles/components/layout/Footer.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeFooterProps = TypeClassNames

const Footer = ({ classNames }: TypeFooterProps) => {
  return (
    <footer
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      Footer
    </footer>
  )
}

export default Footer
