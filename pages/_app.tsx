import '@/styles/app.sass'
import 'reactjs-popup/dist/index.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import Router from 'next/router'
import Script from 'next/script'
import { useContext, useEffect, useState } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from '../seo.config'
import { prod, routesFront } from '@/config/index'
import { handleUtms, handleReferer } from '@/helpers/index'
import {
  ContextAccessibilityState,
  ContextCategoryState
} from '@/context/index'
import { Header, HeaderAlt, Main, Footer } from '@/components/layout'

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
    const end = () => {
      NProgress.done()
      setLoading(false)
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
          {router.route === routesFront.promo ? <HeaderAlt /> : <Header />}
          <Main>
            <Component {...pageProps} />
          </Main>
          <Footer />
        </ContextCategoryState>
      </ContextAccessibilityState>
      {/* </ContextGeneralPopupState> */}
    </>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(metric)
}

export default App
