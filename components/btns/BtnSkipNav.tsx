import stls from '@/styles/components/btns/BtnSkipNav.module.sass'
import { routesFront } from '@/config/index'
import { BtnAlpha } from '@/components/btns'

const BtnSkipNav = () => {
  return (
    <BtnAlpha
      variant='delta'
      tag='a'
      href={routesFront.anchorMain}
      classNames={[stls.container, stls.skipNavLink]}
      ariaLabel='Пропустить навигацию'>
      Пропустить навигацию
    </BtnAlpha>
  )
}

export default BtnSkipNav
