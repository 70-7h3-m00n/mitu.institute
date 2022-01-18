import stls from '@/styles/components/uiforms/UIFormAlpha.module.sass'
import { TypeClassNames, TypeIsPopup } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { GeneralTextHighlight } from '@/components/general'
import { FormLead } from '@/components/forms'

type TypeUIFormAlphaProps = TypeClassNames & TypeIsPopup

const UIFormAlpha = ({ classNames, isPopup }: TypeUIFormAlphaProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <h2 className={stls.title}>
        <GeneralTextHighlight reverse>Оставьте заявку</GeneralTextHighlight> и
        получите консультацию по программам, а также требования для поступления
        на курс
      </h2>
      <FormLead classNames={[stls.form]} isPopup={isPopup} />
    </div>
  )
}

export default UIFormAlpha
