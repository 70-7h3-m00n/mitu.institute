import stls from '@/styles/components/layout/Header.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconLightBulb } from '@/components/icons'

type TypeHeaderProps = TypeClassNames

const Header = ({ classNames }: TypeHeaderProps) => {
  return (
    <header
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        Header
        <IconLightBulb classNames={[stls.icon]} />
      </Wrapper>
    </header>
  )
}

export default Header
