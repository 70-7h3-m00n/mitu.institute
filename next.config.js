/** @type {import('next').NextConfig} */

const withPWA = require('next-pwa')
const { createSecureHeaders } = require('next-secure-headers')
const dev = process.env.NODE_ENV !== 'production'

module.exports = withPWA({
  reactStrictMode: true,
  poweredByHeader: false,
  i18n: {
    locales: ['ru', 'kz', 'uz'],
    defaultLocale: 'ru',
    localeDetection: false
  },
  images: {
    domains: ['res.cloudinary.com']
  },
  pwa: {
    dest: 'public',
    disable: dev,
    register: true,
    scope: '/'
  },
  async headers() {
    return [
      {
        source: '/:path*',
        // headers: createSecureHeaders()
        headers: createSecureHeaders({
          referrerPolicy: 'no-referrer-when-downgrade',
          frameGuard: false
        })
      }
    ]
  }
})
