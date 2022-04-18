import stls from '@/styles/pages/Page404.module.sass'
import truncate from 'truncate'
import { NextSeo } from 'next-seo'
import { routesFront, companyName } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { BtnAlpha } from '@/components/btns'

const Page404 = () => {
  const seoParams = {
    title: `404 - Извините! Страница, которую Вы ищете, не может быть найдена | ${companyName}`,
    desc: truncate(
      '404 - возможно, запрашиваемая Вами страница была перенесена или удалена. Также возможно, Вы допустили небольшую опечатку при вводе адреса — такое случается',
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
              alt: companyName,
              type: 'image/png'
            }
          ],
          site_name: companyName
        }}
      />
      <Wrapper>
        <div className={stls.content}>
          <h1 className={stls.title}>404</h1>
          <h2 className={stls.h2}>
            Извините! Страница, которую Вы ищете, не может быть&nbsp;найдена
          </h2>
          <p className={stls.p}>
            Возможно, запрашиваемая Вами страница была перенесена или удалена.
            Также возможно, Вы допустили небольшую опечатку при вводе адреса —
            такое&nbsp;случается
          </p>
          <BtnAlpha variant='beta' href={routesFront.home} tag='Link'>
            Вернуться на главную
          </BtnAlpha>
        </div>
      </Wrapper>
    </>
  )
}

export default Page404
