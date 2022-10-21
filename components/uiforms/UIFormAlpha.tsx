import stls from '@/styles/components/uiforms/UIFormAlpha.module.sass'
import {
  TypeClassNames,
  TypeColor,
  TypeIsPopup,
  TypeVariantForm
} from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { GeneralTextHighlight } from '@/components/general'
import { FormLead } from '@/components/forms'
import { ReactNode } from 'react'

type TypeUIFormAlphaProps = TypeClassNames &
  TypeIsPopup &
  TypeVariantForm & {
    title?: ReactNode
    atCardsProgram?: boolean
  }

const UIFormAlpha = ({
  classNames,
  isPopup,
  variant,
  title,
  atCardsProgram
}: TypeUIFormAlphaProps) => {
  const at = useAt()
  const translations = {
    textHighlight: at.en
      ? 'Submit'
      : at.uz
      ? 'Arizani qoldiring'
      : 'Оставьте заявку',
    title: at.en
      ? 'and get advice on the programs, as well as the requirements for admission to the course'
      : at.uz
      ? "va dastur bo'yicha maslahat oling, shuningdek kursga kirish talablari"
      : 'и получите консультацию по программам, а также требования для поступления на курс'
  }

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
            <GeneralTextHighlight reverse>
              {translations.textHighlight}
            </GeneralTextHighlight>{' '}
            {translations.title}
          </>
        )}
      </h2>
      <FormLead
        classNames={[stls.form]}
        isPopup={isPopup}
        variant={variant}
        atCardsProgram={atCardsProgram}
      />
    </div>
  )
}

export default UIFormAlpha
