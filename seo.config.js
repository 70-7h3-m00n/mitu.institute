const seo = {
  openGraph: {
    type: 'website',
    locale: 'ru',
    url: process.env.PROD_ROOT_FRONT_URL,
    site_name: 'MITY'
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: 'MITY',
  description: 'MITY',
  canonical: process.env.PROD_ROOT_FRONT_URL,
  dangerouslySetAllPagesToNoIndex: true,
  dangerouslySetAllPagesToNoFollow: true,
  noindex: true,
  nofollow: true
}

export default seo
