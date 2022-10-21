import stls from '@/styles/components/general/GeneralAddress.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
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
  const at = useAt()

  const company = useCompanyInfo()

  const translations = {
    address: {
      city: at.en ? (
        company.address.city
      ) : at.uz ? (
        company.addressUz.city
      ) : (
        <>г.&nbsp;{company.address.city}</>
      ),
      street: at.en ? (
        <>
          {company.address.street.name} {company.address.street.type}
          {company.address.street.door}
        </>
      ) : at.uz ? (
        <>
          {company.addressUz.street.name}{' '}
          {company.addressUz.street.type.toLocaleLowerCase()},{' '}
          {company.addressUz.street.door}, {company.addressUz.street.room}
        </>
      ) : (
        <>
          {company.address.street.name} {company.address.street.type}, д.&nbsp;
          {company.address.street.door}
        </>
      )
    }
  } as const

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
        <span className='locality'>{translations.address.city}</span>,{' '}
        {!withoutBr && <br className={stls.br} />}
        <span className='street-address'>{translations.address.street}</span>
      </div>
    </address>
  )
}

export default GeneralAddress
