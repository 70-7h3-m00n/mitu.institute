const routes = {
  protocols: {
    http: 'http',
    https: 'https',
    postfix: '://'
  },
  domains: {
    official: {
      default: 'mitu.msk.ru'
    },
    marketing: {
      default: 'mitu.institute',
      uz: 'mitm.uz'
    }
  },
  locales: {
    default: 'ru'
  },
  front: {},
  back: {},
  external: {}
} as const

export default routes
