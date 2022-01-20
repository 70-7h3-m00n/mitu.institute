import '@/styles/app.sass'
import 'reactjs-popup/dist/index.css'
import type { AppProps } from 'next/app'
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
  contextAccessibilityContext
} from '@/context/index'
import { Header, HeaderAlt, Main, Footer } from '@/components/layout'

const App = ({ Component, pageProps, router }: AppProps) => {
  const [loading, setLoading] = useState(false)

  const contextAccessibility = useContext(contextAccessibilityContext)

  useEffect(() => {
    // TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    if (contextAccessibility.fontSm) {
      console.log('test')
      document.body.classList.add('fontSm')
    }

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
  }, [router, contextAccessibility])

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
        {router.route === routesFront.promo ? <HeaderAlt /> : <Header />}
        <Main>
          <Component {...pageProps} />
        </Main>
        <Footer />
      </ContextAccessibilityState>
      {/* </ContextGeneralPopupState> */}
    </>
  )
}

export default App
