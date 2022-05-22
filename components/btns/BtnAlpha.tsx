import stls from '@/styles/components/btns/BtnAlpha.module.sass'
import { TypeBtn } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import Link from 'next/link'

type TypeBtnAlphaProps = TypeBtn & {
  title?: string
}

const BtnAlpha = ({
  classNames,
  children,
  tag = 'button',
  href,
  target,
  type,
  disabled,
  ariaLabel,
  variant,
  onClick,
  scroll,
  title
}: TypeBtnAlphaProps) => {
  const isLink = tag === 'Link'

  const container =
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
        [stls.zeta]: variant === 'zeta',
        [stls['zeta-reverse']]: variant === 'zeta-reverse',
        [stls.eta]: variant === 'eta',
        [stls['eta-reverse']]: variant === 'eta-reverse',
        [stls.disabled]: disabled
      },
      getClassNames({ classNames })
    ) || undefined

  const Tag = tag
  const ParentElement: any = isLink ? Link : Tag // TODO: figure out better types
  return (
    <ParentElement
      className={!isLink && container}
      type={type}
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      scroll={isLink ? scroll : undefined}
      aria-label={ariaLabel}
      disabled={disabled}
      aria-disabled={disabled}
      onClick={onClick}
      title={title}>
      {isLink ? <a className={container}>{children}</a> : children}
    </ParentElement>
  )
}

export default BtnAlpha
