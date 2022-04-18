import truncate from 'truncate'
import { pros } from '@/data/index'
import {
  routesFront,
  companyName,
  mituinstitute,
  defaultSeoDesc
} from '@/config/index'

const seoParams = {
  title: `${companyName} | ${defaultSeoDesc}`,
  desc: truncate(pros.join('. '), 120)
}

const seo = {
  openGraph: {
    type: 'website',
    url: routesFront.defaultRoot,
    title: seoParams.title,
    description: seoParams.desc,
    locale: 'ru',
    site_name: companyName,
    images: [
      {
        url: `${routesFront.defaultRoot}${routesFront.assetsImgsIconsManifestIcon512}`,
        width: 512,
        height: 512,
        alt: companyName,
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
  canonical: routesFront.defaultRoot
  // dangerouslySetAllPagesToNoIndex: !mituinstitute,
  // dangerouslySetAllPagesToNoFollow: !mituinstitute,
  // noindex: !mituinstitute,
  // nofollow: !mituinstitute
}

export default seo
