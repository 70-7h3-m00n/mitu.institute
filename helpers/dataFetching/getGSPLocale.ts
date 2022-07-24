import { TypeGetStaticPropsContext } from '@/types/index'

type TGetGSPLocaleProps = TypeGetStaticPropsContext

const getGSPLocale = ({ context }: TGetGSPLocaleProps) =>
  context?.locale === 'uz_UZ' ? 'uz' : undefined

export default getGSPLocale
