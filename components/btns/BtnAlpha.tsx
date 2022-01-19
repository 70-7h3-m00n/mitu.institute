import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import { TypeBtn } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeBtnAlphaProps = TypeBtn

const BtnAlpha = ({
  classNames,
  children,
  tag = 'button',
  href,
  type,
  disabled,
  ariaLabel,
  variant,
  onClick
}: TypeBtnAlphaProps) => {
  const ParentElement = tag
  return (
    <ParentElement
      className={
        cn(
          stls.container,
          {
            [stls.alpha]: variant === 'alpha',
            [stls['alpha-reverse']]: variant === 'alpha-reverse',
            [stls.beta]: variant === 'beta',
            [stls['beta-reverse']]: variant === 'beta-reverse',
            [stls.gamma]: variant === 'gamma',
            [stls['gamma-reverse']]: variant === 'gamma-reverse',
            [stls.delta]: variant === 'delta',
            [stls['delta-reverse']]: variant === 'delta-reverse',
            [stls.epsilon]: variant === 'epsilon',
            [stls['epsilon-reverse']]: variant === 'epsilon-reverse',
            [stls.disabled]: disabled
          },
          getClassNames({ classNames })
        ) || undefined
      }
      type={type}
      href={href}
      aria-label={ariaLabel}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}>
      {children}
    </ParentElement>
  )
}

export default BtnAlpha
