import stls from '@/styles/components/general/GeneralPhoneNumber.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { phoneNumber } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconPhone } from '@/components/icons'

type TypeGeneralPhoneNumberProps = TypeClassNames & {
  withIcon?: boolean
  withLabel?: boolean
}

const GeneralPhoneNumber = ({
  classNames,
  withIcon,
  withLabel
}: TypeGeneralPhoneNumberProps) => {
  return (
    <a
      className={
        cn(
          [stls.container],
          { [stls.withIcon]: withIcon },
          getClassNames({ classNames })
        ) || undefined
      }
      href={phoneNumber.href}
      title='Позвонить'>
      <div className={stls.iconAndVal}>
        {withIcon && <IconPhone classNames={[stls.icon]} />}
        <span>{phoneNumber.val}</span>
      </div>
      {withLabel && <span className={stls.label}>Бесплатно по России</span>}
    </a>
  )
}

export default GeneralPhoneNumber
