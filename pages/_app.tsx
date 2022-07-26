import '@/styles/app.sass'
import 'reactjs-popup/dist/index.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { TypeRoute } from '@/types/index'
import Head from 'next/head'
import Router from 'next/router'
import Script from 'next/script'
import { useContext, useEffect, useState } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from 'seo.config'
import { prod, routesFront, selectors, gtm, routes } from '@/config/index'
import {
  handleUtms,
  handleReferer,
  pageview,
  handleLocale
} from '@/helpers/index'
import { useCompanyInfo } from '@/hooks/index'
import {
  ContextAccessibilityState,
  ContextCategoriesState,
  ContextStudyFieldState,
  ContextProgramsState,
  ContextQuestionsState,
  ContextProgramState
} from '@/context/index'
import { Header, Main, Footer } from '@/components/layout'
import { HeaderPromo } from '@/components/promo'
import { GeneralNavPhoneTablet } from '@/components/general'

const App = ({ Component, pageProps, router }: AppProps) => {
  const company = useCompanyInfo()

  // TODO: figure out SEO (don't forget about UZ)
  const [loading, setLoading] = useState(false)

  // console.log(routes)

  useEffect(() => {
    // TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    handleUtms({ router })
    handleReferer()
    handleLocale({ router })

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
      pageview({ url })
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
      <Head>
        <meta name='application-name' content={company.name} />
        <meta name='apple-mobile-web-app-title' content={company.name} />
      </Head>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo={`${routesFront.defaultRoot}${routesFront.assetsImgsIconsManifestIconBg512}`}
        url={routesFront.defaultRoot}
      />
      {/* <ContextGeneralPopupState> */}
      <ContextAccessibilityState>
        <ContextCategoriesState>
          <ContextStudyFieldState>
            <ContextProgramsState>
              <ContextQuestionsState>
                <ContextProgramState>
                  {router.route === routesFront.promo ? (
                    <HeaderPromo />
                  ) : (
                    <Header />
                  )}
                  <Main>
                    {/* @ts-expect-error */}
                    <Component {...pageProps} />
                    <GeneralNavPhoneTablet
                      atPromo={router.asPath === routesFront.promo}
                    />
                  </Main>
                  <Footer />
                </ContextProgramState>
              </ContextQuestionsState>
            </ContextProgramsState>
          </ContextStudyFieldState>
        </ContextCategoriesState>
      </ContextAccessibilityState>
      {/* </ContextGeneralPopupState> */}

      {prod && (
        <Script
          id={selectors.gtm}
          dangerouslySetInnerHTML={{
            __html: `
          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
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
  // console.log(window.dataLayer)
  // console.log(metric)
}

export default App
