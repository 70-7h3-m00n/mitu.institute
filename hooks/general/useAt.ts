import { useRouter } from 'next/router'

const useAt = () => {
  const { pathname, asPath, locale, query } = useRouter()

  const getSplitedPath = pathname
    .split('/')
    .filter(item => item !== '' && item !== '[url]')

  // const getProgramTitle = asPath.split('/')[4]

  return {
    en: locale === 'en' || locale === 'en-US' || locale === 'en-GB',
    ru: locale === 'ru',
    kz:
      locale === 'kz' ||
      locale === 'kk' ||
      locale === 'kk-KZ' ||
      query.locale === 'kz' ||
      query.locale === 'kk' ||
      query.locale === 'kk-KZ',
    uz:
      locale === 'uz' ||
      locale === 'uz-UZ' ||
      query.locale === 'uz' ||
      query.locale === 'uz-UZ'
  }
}

export default useAt
