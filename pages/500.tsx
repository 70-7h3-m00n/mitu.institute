import stls from '@/styles/pages/Page500.module.sass'
import truncate from 'truncate'
import { NextSeo } from 'next-seo'
import { routesFront } from '@/config/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { Wrapper } from '@/components/layout'

const Page500 = () => {
  const at = useAt()
  const company = useCompanyInfo()

  const translations = {
    seoParamsTitle: at.uz
      ? '500 - Kechirasiz! Serverda kutilmagan xatolik yuz berdi'
      : '500 - Извините! На сервере произошла непредвиденная ошибка',
    seoParamsDesc: at.uz
      ? "500 - Iltimos, keyinroq qayta urinib ko'ring yoki bizga qo'ng'iroq qiling"
      : '500 - Пожалуйста, попробуйте позже или позвоните нам по номеру',
    phoneNumber: at.uz ? company.phoneNumberUz : company.phoneNumber,
    h2: at.uz ? (
      'Kechirasiz! Serverda kutilmagan xatolik yuz berdi'
    ) : (
      <>Извините! На сервере произошла непредвиденная&nbsp;ошибка</>
    ),
    p: at.uz
      ? "Keyinroq qayta urinib ko'ring yoki bizga qo'ng'iroq qiling"
      : 'Пожалуйста, попробуйте позже или позвоните нам по номеру'
  }

  const seoParams = {
    title: `${translations.seoParamsTitle} | ${company.name}`,
    desc: truncate(
      `${translations.seoParamsDesc} ${translations.phoneNumber.val}`,
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
              url: `${routesFront.defaultRoot}${routesFront.assetsImgsIconsManifestIconBg512}`,
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
          <h2 className={stls.h2}>{translations.h2}</h2>
          <p className={stls.p}>
            {translations.p}{' '}
            <a
              href={translations.phoneNumber.href}
              className={stls.phoneNumber}>
              {translations.phoneNumber.val}
            </a>
          </p>
        </div>
      </Wrapper>
    </>
  )
}

export default Page500
