/** @type {import('next').NextConfig} */

import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'
// import withPWA from 'next-pwa'
import { createSecureHeaders } from 'next-secure-headers'

const dev = process.env.NODE_ENV !== 'production'

// todo: figure out withPWA
// this kind of way to do this is made for potential future use
const createConfig = async (phase, { defaultConfig }) => {
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    poweredByHeader: false,
    // trailingSlash: true,
    i18n: {
      locales: ['ru', 'kk_KZ', 'uz_UZ', 'en_US', 'en_GB'],
      defaultLocale: 'ru',
      localeDetection: true,
      domains: [
        {
          domain: 'mitm.uz',
          defaultLocale: 'uz_UZ',
          http: dev
        }
      ]
    },
    images: {
      // loader: 'cloudinary',
      // path: 'https://res.cloudinary.com/mitu-institute/',
      domains: ['res.cloudinary.com']
    },
    // pwa: {
    //   dest: 'public',
    //   disable: dev,
    //   register: true,
    //   scope: '/'
    // },
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
  }

  // development only config
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return nextConfig
  }

  return nextConfig
}

// export default withPWA(createConfig)
export default createConfig
