import '@/styles/app.sass'
import 'reactjs-popup/dist/index.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { TypeRoute } from '@/types/index'
import Router from 'next/router'
import Script from 'next/script'
import { useContext, useEffect, useState } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from 'seo.config'
import { prod, routesFront, selectors, gtm } from '@/config/index'
import { handleUtms, handleReferer, pageView } from '@/helpers/index'
import {
  ContextAccessibilityState,
  ContextCategoryState
} from '@/context/index'
import { Header, HeaderPromo, Main, Footer } from '@/components/layout'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    // TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    handleUtms({ router })
    handleReferer()

    NProgress.configure({
      showSpinner: false
    })

    const start = () => {
      NProgress.start()
      setLoading(true)
    }
    const end = (url: TypeRoute) => {
      NProgress.done()
      setLoading(false)
      pageView({ url })
    }
    Router.events.on('routeChangeStart', start)
    Router.events.on('routeChangeComplete', end)
    Router.events.on('routeChangeError', end)
    return () => {
      Router.events.off('routeChangeStart', start)
      Router.events.off('routeChangeComplete', end)
      Router.events.off('routeChangeError', end)
    }
  }, [router])

  if (prod) {
    console.log = () => {}
  }

  return (
    <>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo={`${routesFront.root}${routesFront.assetsImgsIconsManifestIcon512}`}
        url={routesFront.root}
      />
      {/* <ContextGeneralPopupState> */}
      <ContextAccessibilityState>
        <ContextCategoryState>
          {router.route === routesFront.promo ? <HeaderPromo /> : <Header />}
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </ContextCategoryState>
      </ContextAccessibilityState>
      {/* </ContextGeneralPopupState> */}

      {prod && (
        <Script
          id={selectors.gtm}
          dangerouslySetInnerHTML={{
            __html: `
          function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','${gtm}');`
          }}
        />
      )}
    </>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric)
}

export default App
