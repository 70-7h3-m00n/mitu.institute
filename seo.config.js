import { routesFront } from '@/config/index'

const seo = {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: routesFront.defaultRoot,
    site_name: 'Московский Институт Технологий и Управления'
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: 'Московский Институт Технологий и Управления',
  description: 'Обучайся в самом инновационном ВУЗЕ страны',
  canonical: routesFront.defaultRoot
  // dangerouslySetAllPagesToNoIndex: true,
  // dangerouslySetAllPagesToNoFollow: true
  // noindex: true,
  // nofollow: true
}

export default seo
