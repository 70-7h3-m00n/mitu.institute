import '@/styles/app.sass'
import 'reactjs-popup/dist/index.css'
import type { AppProps, NextWebVitalsMetric } from 'next/app'
import {
  TypeLibProgram,
  TypeLibProgramCategory,
  TypeLibProgramCategorySlug,
  TypeLibProgramQuestions,
  TypeLibPrograms,
  TypeLibProgramsCategories,
  TypeRoute
} from '@/types/index'
import Head from 'next/head'
import Router from 'next/router'
import Script from 'next/script'
import { useEffect, useState } from 'react'
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
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext,
  ContextQuestionsContext,
  ContextProgramContext
} from '@/context/index'
import { Header, Main, Footer } from '@/components/layout'
import { HeaderPromo } from '@/components/promo'
import { GeneralNavPhoneTablet } from '@/components/general'

const App = ({ Component, pageProps, router }: AppProps) => {
  if (prod) console.log = () => undefined

  const props: any = pageProps // a workaround for the typescript error

  const [categories, setCategories] = useState<{
    categories: TypeLibProgramsCategories | null
    curCategory: TypeLibProgramCategory | null
    curCategorySlug: TypeLibProgramCategorySlug | null
  }>({
    categories: props?.categories || null,
    curCategory:
      props?.categories?.filter(
        (category: TypeLibProgramCategory) =>
          category?.slug === props.gspContextParamsCategory ||
          category?.slug === props.categories?.[0]?.slug
      )?.[0] || null,
    curCategorySlug:
      props?.gspContextParamsCategory || props?.categories?.[0]?.slug || null
  })
  const [studyField, setStudyField] = useState<string | null>(
    props?.studyField || null
  )
  const [programs, setPrograms] = useState<TypeLibPrograms | null>(
    props?.programs || null
  )
  const [questions, setQuestions] = useState<TypeLibProgramQuestions | null>(
    props?.questions || null
  )
  const [program, setProgram] = useState<TypeLibProgram | null>(
    props?.program || null
  )

  const company = useCompanyInfo()

  // TODO: check the translations UZ google docs to make sure the translations are correct
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

  return (
    <>
      <Head>
        <meta name='application-name' content={company.name} />
        <meta name='apple-mobile-web-app-title' content={company.name} />
      </Head>
      <DefaultSeo {...SEO} />
      <LogoJsonLd
        logo={`${routesFront.root}${routesFront.assetsImgsIconsManifestIconBg512}`}
        url={routesFront.root}
      />
      {/* <ContextGeneralPopupState> */}
      <ContextAccessibilityState>
        <ContextCategoriesContext.Provider
          value={{
            categories: categories.categories,
            curCategory: categories.curCategory,
            curCategorySlug: categories.curCategorySlug,
            setCategories: setCategories
          }}>
          <ContextStudyFieldContext.Provider
            value={{
              studyField,
              setStudyField
            }}>
            <ContextProgramsContext.Provider
              value={{
                programs,
                setPrograms
              }}>
              <ContextQuestionsContext.Provider
                value={{
                  questions,
                  setQuestions
                }}>
                <ContextProgramContext.Provider
                  value={{
                    program,
                    setProgram
                  }}>
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
                </ContextProgramContext.Provider>
              </ContextQuestionsContext.Provider>
            </ContextProgramsContext.Provider>
          </ContextStudyFieldContext.Provider>
        </ContextCategoriesContext.Provider>
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
