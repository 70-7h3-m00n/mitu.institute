import stls from '@/styles/pages/Page404.module.sass'
import truncate from 'truncate'
import { NextSeo } from 'next-seo'
import { routesFront } from '@/config/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { BtnAlpha } from '@/components/btns'

const Page404 = () => {
  const at = useAt()
  const company = useCompanyInfo()

  const translations = {
    seoParamsTitle: at.uz
      ? `404 - Kechirasiz! Siz izlayotgan sahifa topilmadi | ${company.name}`
      : `404 - Извините! Страница, которую Вы ищете, не может быть найдена | ${company.name}`,
    seoParamsDesc: at.uz
      ? "404 - Siz so'ragan sahifa ko'chirilgan yoki o'chirilgan bo'lishi mumkin. Manzilni kiritishda siz kichik xatoga yo'l qo'ygan bo'lishingiz mumkin - bu sodir bo'ladi"
      : '404 - возможно, запрашиваемая Вами страница была перенесена или удалена. Также возможно, Вы допустили небольшую опечатку при вводе адреса — такое случается',
    h2: at.uz ? (
      'Kechirasiz! Siz izlayotgan sahifa topilmadi'
    ) : (
      <>Извините! Страница, которую Вы ищете, не может быть&nbsp;найдена</>
    ),
    p: at.uz ? (
      "Siz so'ragan sahifa ko'chirilgan yoki o'chirilgan bo'lishi mumkin. Manzilni kiritishda siz kichik xatoga yo'l qo'ygan bo'lishingiz mumkin - bu sodir bo'ladi"
    ) : (
      <>
        Возможно, запрашиваемая Вами страница была перенесена или удалена. Также
        возможно, Вы допустили небольшую опечатку при вводе адреса —
        такое&nbsp;случается
      </>
    ),
    btnValue: at.uz ? 'Asosiy sahifaga qayting' : 'Вернуться на главную'
  }

  const seoParams = {
    title: translations.seoParamsTitle,
    desc: truncate(translations.seoParamsDesc, 120),
    canonical: routesFront.officialRoot
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
              url: `${routesFront.root}${routesFront.assetsImgsIconsManifestIconBg512}`,
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
          <h1 className={stls.title}>404</h1>
          <h2 className={stls.h2}>{translations.h2}</h2>
          <p className={stls.p}>{translations.p}</p>
          <BtnAlpha variant='beta' href={routesFront.home} tag='Link'>
            {translations.btnValue}
          </BtnAlpha>
        </div>
      </Wrapper>
    </>
  )
}

export default Page404
