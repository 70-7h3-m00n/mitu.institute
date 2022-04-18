import stls from '@/styles/components/general/GeneralAddress.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { company } from '@/config/index'
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
        <span className='locality'>г.&nbsp;{company.address.city}</span>,{' '}
        {!withoutBr && <br className={stls.br} />}
        <span className='street-address'>
          {company.address.street.name} {company.address.street.type}, д.&nbsp;
          {company.address.street.door}
        </span>
      </div>
    </address>
  )
}

export default GeneralAddress
