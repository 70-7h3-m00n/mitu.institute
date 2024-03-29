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
import Router, { useRouter } from 'next/router'
import Script from 'next/script'
import { useEffect, useState } from 'react'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { DefaultSeo, LogoJsonLd } from 'next-seo'
import SEO from 'seo.config'
import { prod, routesFront, selectors, gtm, gtmV4, dev } from '@/config/index'
import {
  handleUtms,
  handleReferer,
  pageview,
  handleLocale,
  handleCookiesExpiration
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
import { env } from '@/config/index'

const App = ({ Component, pageProps, router }: AppProps) => {
  if (prod) console.log = () => undefined

  const route = useRouter()

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

  useEffect(() => {
    // TagManager.initialize({ gtmId, dataLayerName: 'dataLayer' })

    // generateYmlCatalog()
    handleUtms({ router })
    handleReferer()
    handleLocale({ router })
    handleCookiesExpiration({ route })

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
        <>
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
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${gtmV4}`}
          />
          <Script
            id='gtag'
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtmV4}');
            gtag('get', '${gtmV4}', 'client_id', function(clientId) {
              document.cookie = "gclUid=" + clientId;
            });`
            }}
          />
          {/* <!-- Yandex.Metrika counter --> */}
          <Script
            id='yandex_metrika'
            dangerouslySetInnerHTML={{
              __html: `(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
            m[i].l=1*new Date();
            for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
            k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
            (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

            ym(${env.ym_counter}, "init", {
              clickmap:true,
              trackLinks:true,
              accurateTrackBounce:true,
              webvisor:true,
              ecommerce:"dataLayer"
            });
            ym(${env.ym_counter}, 'getClientID', function(clientID) {
              document.cookie = "ymclUid=" + clientID;
              document.cookie = "_ym_counter=" + ${env.ym_counter};
                });
            ym(${env.ym_counter}, "userParams", {
              _ym_uid:document.cookie.replace(/(?:(?:^|.*;\s*)_ym_uid\s*\=\s*([^;]*).*$)|^.*$/, "$1"),
              _ym_counter:document.cookie.replace(/(?:(?:^|.*;\s*)_ym_counter\s*\=\s*([^;]*).*$)|^.*$/, "$1") || ${env.ym_counter}
            });`
            }}
          />
          <noscript>
            <div>
              <img
                src='https://mc.yandex.ru/watch/92116660'
                style={{ position: 'absolute', left: '-9999px' }}
                alt=''
              />
            </div>
          </noscript>
          {/* <!-- /Yandex.Metrika counter --> */}
        </>
      )}
      <Script
        id='roistat-counter'
        dangerouslySetInnerHTML={{
          __html: `(function(w, d, s, h, id) {
                w.roistatProjectId = id; w.roistatHost = h;
                var p = d.location.protocol == "https:" ? "https://" : "http://";
                var u = /^.*roistat_visit=[^;]+(.*)?$/.test(d.cookie) ? "/dist/module.js" : "/api/site/1.0/"+id+"/init?referrer="+encodeURIComponent(d.location.href);
                var js = d.createElement(s); js.charset="UTF-8"; js.async = 1; js.src = p+h+u; var js2 = d.getElementsByTagName(s)[0]; js2.parentNode.insertBefore(js, js2);
                })(window, document, 'script', 'cloud.roistat.com', '46751d07945ec38697681458052a865d');`
        }}
      />
    </>
  )
}

export function reportWebVitals(metric: NextWebVitalsMetric) {
  // console.log(window.dataLayer)
  // console.log(metric)
}

export default App
