import stls from '@/styles/pages/Page500.module.sass'
import truncate from 'truncate'
import { NextSeo } from 'next-seo'
import { routesFront, company } from '@/config/index'
import { Wrapper } from '@/components/layout'

const Page500 = () => {
  const seoParams = {
    title: `500 - Извините! На сервере произошла непредвиденная ошибка | ${company.name}`,
    desc: truncate(
      `500 - Пожалуйста, попробуйте позже или позвоните нам по номеру ${company.phoneNumber.val}`,
      120
    ),
    canonical: routesFront.defaultRoot
  }

  return (
    <>
      <NextSeo
        title={seoParams.title}
        description={seoParams.desc}
        canonical={seoParams.canonical}
        openGraph={{
          url: seoParams.canonical,
          title: seoParams.title,
          description: seoParams.desc,
          images: [
            {
              url: `${routesFront.defaultRoot}${routesFront.assetsImgsIconsManifestIcon512}`,
              width: 512,
              height: 512,
              alt: company.name,
              type: 'image/png'
            }
          ],
          site_name: company.name
        }}
      />
      <Wrapper>
        <div className={stls.content}>
          <h1 className={stls.title}>500</h1>
          <h2 className={stls.h2}>
            Извините! На сервере произошла непредвиденная&nbsp;ошибка
          </h2>
          <p className={stls.p}>
            Пожалуйста, попробуйте позже или позвоните нам по номеру{' '}
            <a href={company.phoneNumber.href} className={stls.phoneNumber}>
              {company.phoneNumber.val}
            </a>
          </p>
        </div>
      </Wrapper>
    </>
  )
}

export default Page500
