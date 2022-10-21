type TGetCorrectLocaleProps = {
  locale?: string
}

const getCorrectLocale = ({ locale }: TGetCorrectLocaleProps) => {
  return locale === 'uz_UZ'
    ? 'uz'
    : locale === 'kk_KZ'
    ? 'kk'
    : locale === 'en_US'
    ? 'en'
    : locale === 'en_GB'
    ? 'en'
    : undefined
}

export default getCorrectLocale
