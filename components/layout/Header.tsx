import stls from '@/styles/components/layout/Header.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type HeaderType = {
  classNames?: string[]
}

const Header = ({ classNames = [] }: HeaderType) => {
  const container = getClassNames({ classNames })
  return <div className={classnames([stls.container], container)}>Header</div>
}

export default Header
