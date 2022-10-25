type TGetCorrectLocaleProps = {
  locale?: string
}

const getCorrectLocale = ({ locale }: TGetCorrectLocaleProps) => {
  return locale === 'uz-UZ'
    ? 'uz'
    : locale === 'kk-KZ'
    ? 'kk'
    : locale === 'en-US'
    ? 'ru'
    : locale === 'en-GB'
    ? 'ru'
    : undefined
  // * why ru here? because in our strapi content managers were working with en locale while adding ru content & so now ru locale would be english and en locale would be ru
}

export default getCorrectLocale
