import stls from '@/styles/components/uiforms/UIFormAlpha.module.sass'
import { TypeClassNames, TypeIsPopup } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { GeneralTextHighlight } from '@/components/general'
import { FormLead } from '@/components/forms'
import { ReactNode } from 'react'

type TypeUIFormAlphaProps = TypeClassNames &
  TypeIsPopup & {
    title?: ReactNode
  }

const UIFormAlpha = ({ classNames, isPopup, title }: TypeUIFormAlphaProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <h2 className={cn(stls.title, { [stls.propTitle]: title })}>
        {title || (
          <>
            <GeneralTextHighlight reverse>Оставьте заявку</GeneralTextHighlight>{' '}
            и получите консультацию по программам, а также требования для
            поступления на курс
          </>
        )}
      </h2>
      <FormLead classNames={[stls.form]} isPopup={isPopup} />
    </div>
  )
}

export default UIFormAlpha
