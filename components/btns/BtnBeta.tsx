import stls from '@/styles/components/btns/BtnBeta.module.sass'
import { TypeBtnBeta } from '@/types/index'
import { createElement } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconCoatOfArmsRussia, IconArrowTopRightAlt } from '@/components/icons'

type TypeBtnBetaProps = TypeBtnBeta

const BtnBeta = ({
  classNames,
  children,
  tag = 'button',
  href,
  target,
  type,
  disabled,
  ariaLabel,
  variant,
  onClick
}: TypeBtnBetaProps) => {
  const props = {
    className:
      cn(
        stls.container,
        {
          [stls.alpha]: variant === 'alpha',
          [stls.beta]: variant === 'beta',
          [stls.disabled]: disabled
        },
        getClassNames({ classNames })
      ) || undefined,
    type,
    href,
    target,
    rel: target === '_blank' ? 'noopener noreferrer' : undefined,
    'aria-label': ariaLabel,
    disabled,
    'aria-disabled': disabled,
    onClick
  }

  return createElement(
    tag,
    props,
    <>
      <IconCoatOfArmsRussia
        classNames={[
          cn(stls.iconCoatOfArms, {
            [stls.iconCoatOfArmsBeta]: variant === 'beta'
          })
        ]}
      />
      <div className={stls.children}>{children}</div>
      <IconArrowTopRightAlt
        classNames={[
          cn(stls.iconArrowTopRight, {
            [stls.iconArrowTopRightBeta]: variant === 'beta'
          })
        ]}
      />
    </>
  )

  // return (
  //   <ParentElement
  //     className={
  //       cn(
  //         stls.container,
  //         {
  //           [stls.alpha]: variant === 'alpha',
  //           [stls.beta]: variant === 'beta',
  //           [stls.disabled]: disabled
  //         },
  //         getClassNames({ classNames })
  //       ) || undefined
  //     }
  //     type={type}
  //     href={href}
  //     target={target}
  //     rel={target === '_blank' ? 'noopener noreferrer' : undefined}
  //     aria-label={ariaLabel}
  //     disabled={disabled}
  //     aria-disabled={disabled}
  //     onClick={onClick}></ParentElement>
  // )
}

export default BtnBeta
