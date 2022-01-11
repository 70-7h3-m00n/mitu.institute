import stls from '@/styles/components/uiforms/UIFormAlpha.module.sass'
import { TypeClassNames, TypeFormAlphaValues } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { FormLead } from '@/components/forms'

type TypeUIFormAlphaProps = TypeClassNames

const UIFormAlpha = ({ classNames }: TypeUIFormAlphaProps) => {
  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <h2 className={stls.title}>
        <span className={stls.highlight}>Оставьте заявку</span> и получите
        консультацию по программам, а также требования для поступления на курс
      </h2>
      <FormLead />
    </div>
  )
}

export default UIFormAlpha
