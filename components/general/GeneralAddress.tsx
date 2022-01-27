import stls from '@/styles/components/general/GeneralAddress.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { address } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { IconLocation } from '@/components/icons'

type TypeGeneralAddressProps = TypeClassNames & {
  withIcon?: boolean
  withoutBr?: boolean
  biggerIcon?: boolean
}

const GeneralAddress = ({
  classNames,
  withIcon,
  withoutBr,
  biggerIcon
}: TypeGeneralAddressProps) => {
  return (
    <address
      className={
        cn(
          [stls.container],
          { [stls.withIcon]: withIcon },
          getClassNames({ classNames })
        ) || undefined
      }>
      {withIcon && (
        <IconLocation
          classNames={[cn(stls.icon, { [stls.biggerIcon]: biggerIcon })]}
        />
      )}
      <div>
        <span className='locality'>г.&nbsp;{address.city}</span>,{' '}
        {!withoutBr && <br className={stls.br} />}
        <span className='street-address'>
          {address.street}, д.&nbsp;{address.house}
        </span>
      </div>
    </address>
  )
}

export default GeneralAddress
