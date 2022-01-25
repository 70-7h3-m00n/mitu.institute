import stls from '@/styles/components/uiforms/UIFormAlpha.module.sass'
import { TypeClassNames, TypeIsPopup, TypeVariantForm } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { GeneralTextHighlight } from '@/components/general'
import { FormLead } from '@/components/forms'
import { ReactNode } from 'react'

type TypeUIFormAlphaProps = TypeClassNames &
  TypeIsPopup &
  TypeVariantForm & {
    title?: ReactNode
  }

const UIFormAlpha = ({
  classNames,
  isPopup,
  variant,
  title
}: TypeUIFormAlphaProps) => {
  return (
    <div
      className={
        cn(
          [stls.container],
          { [stls.containerVariantBeta]: variant === 'beta' },
          getClassNames({ classNames })
        ) || undefined
      }>
      <h2
        className={cn(stls.title, {
          [stls.propTitle]: title,
          [stls.titleVariantBeta]: variant === 'beta'
        })}>
        {title || (
          <>
            <GeneralTextHighlight reverse>Оставьте заявку</GeneralTextHighlight>{' '}
            и получите консультацию по программам, а также требования для
            поступления на курс
          </>
        )}
      </h2>
      <FormLead classNames={[stls.form]} isPopup={isPopup} variant={variant} />
    </div>
  )
}

export default UIFormAlpha
