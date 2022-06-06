import truncate from 'truncate'
import { pros } from '@/data/index'
import { routesFront, company, mituinstitute } from '@/config/index'

const seoParams = {
  title: `${company.name} | ${company.tagline}`,
  desc: truncate(
    'Онлайн-институт востребованных профессий в области психологии (психоанализа, клинической психологии, бизнес-психологии, гештальт терапии, КПТ, психолого-педагогического и специального (дефектологического) направлений. Институт реализует программы дополнительного профессионального образования: повышение квалификации, профессиональной переподготовки и курсы Life',
    120
  )
}

const seo = {
  openGraph: {
    type: 'website',
    url: routesFront.defaultRoot,
    title: seoParams.title,
    description: seoParams.desc,
    locale: 'ru',
    site_name: company.name,
    images: [
      {
        url: `${routesFront.defaultRoot}${routesFront.assetsImgsIconsManifestIcon512}`,
        width: 512,
        height: 512,
        alt: company.name,
        type: 'image/png'
      }
    ]
  },
  // twitter: {
  //   handle: '@handle',
  //   site: '@site',
  //   cardType: 'summary_large_image',
  // },
  defaultTitle: seoParams.title,
  description: seoParams.desc,
  canonical: routesFront.defaultRoot,
  dangerouslySetAllPagesToNoIndex: !mituinstitute,
  dangerouslySetAllPagesToNoFollow: !mituinstitute,
  noindex: !mituinstitute,
  nofollow: !mituinstitute
}

export default seo
