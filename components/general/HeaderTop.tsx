import stls from '@/styles/components/general/HeaderTop.module.sass'
import Link from 'next/link'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { routeLegal } from '@/data/routes'
import { Wrapper } from '@/components/layout'
import { BtnVisualAccessibility } from '@/components/btns'

type HeaderTopType = {
  classNames?: string[]
}

const HeaderTop = ({ classNames = [] }: HeaderTopType) => {
  const container = getClassNames({ classNames })
  return (
    <div className={classnames([stls.container], container)}>
      <Wrapper classNames={[stls.wrapper]}>
        <Link href={routeLegal}>
          <a className={stls.link}>Сведения об образовательной организации</a>
        </Link>
        <BtnVisualAccessibility />
      </Wrapper>
    </div>
  )
}

export default HeaderTop
