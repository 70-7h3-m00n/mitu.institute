import stls from '@/styles/components/btns/BtnSkipNav.module.sass'
import { routesFront } from '@/config/index'
import { useAt } from '@/hooks/index'
import { BtnAlpha } from '@/components/btns'

const BtnSkipNav = () => {
  const at = useAt()

  const translations = {
    btn: {
      value: at.uz ? "Navigatsiyani o'tkazib yuborish" : 'Пропустить навигацию'
    }
  } as const

  return (
    <BtnAlpha
      variant='delta'
      tag='a'
      href={routesFront.anchorMain}
      classNames={[stls.container, stls.skipNavLink]}
      ariaLabel={translations.btn.value}>
      {translations.btn.value}
    </BtnAlpha>
  )
}

export default BtnSkipNav
