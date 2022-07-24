import stls from '@/styles/components/general/GeneralPhoneNumber.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { IconPhone } from '@/components/icons'

type TypeGeneralPhoneNumberProps = TypeClassNames & {
  withIcon?: boolean
  withLabel?: boolean
  onFocusReverse?: boolean
}

const GeneralPhoneNumber = ({
  classNames,
  withIcon,
  withLabel,
  onFocusReverse
}: TypeGeneralPhoneNumberProps) => {
  const at = useAt()

  const company = useCompanyInfo()

  const translations = {
    title: at.uz ? "Qo'ng'iroq qiling" : 'Позвонить',
    label: at.uz ? '' : 'Бесплатно по России',
    phoneNumber: at.uz ? company.phoneNumberUz : company.phoneNumber
  } as const

  return (
    <a
      className={
        cn(
          [stls.container],
          {
            [stls.withIcon]: withIcon,
            [stls.onFocusRegular]: !onFocusReverse,
            [stls.onFocusReverse]: onFocusReverse
          },
          getClassNames({ classNames })
        ) || undefined
      }
      href={translations.phoneNumber.href}
      title={translations.title}>
      <div className={stls.content}>
        {withIcon && <IconPhone classNames={[stls.icon]} />}
        <div className={stls.numberlabel}>
          <span>{translations.phoneNumber.val}</span>
          {withLabel && (
            <span className={stls.label}>{translations.label}</span>
          )}
        </div>
      </div>
    </a>
  )
}

export default GeneralPhoneNumber
