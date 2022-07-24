type TGetCorrectLocaleProps = {
  locale?: string
}

const getCorrectLocale = ({ locale }: TGetCorrectLocaleProps) => {
  return locale === 'uz_UZ' ? 'uz' : locale === 'kk_KZ' ? 'kk' : undefined
}

export default getCorrectLocale
