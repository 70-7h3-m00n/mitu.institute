import stls from '@/styles/components/general/GeneralPhoneNumber.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { company } from '@/config/index'
import { getClassNames } from '@/helpers/index'
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
      href={company.phoneNumber.href}
      title='Позвонить'>
      <div className={stls.content}>
        {withIcon && <IconPhone classNames={[stls.icon]} />}
        <div className={stls.numberlabel}>
          <span>{company.phoneNumber.val}</span>
          {withLabel && <span className={stls.label}>Бесплатно по России</span>}
        </div>
      </div>
    </a>
  )
}

export default GeneralPhoneNumber
