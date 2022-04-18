import stls from '@/styles/components/pages/PagesPagePrograms.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { pros } from '@/data/index'
import { ContextCategoriesContext } from '@/context/index'
import { routesFront, companyName, defaultSeoDesc } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { SectionOurPrograms, SectionUIFormAlpha } from '@/components/sections'

type TypeSectionAboutUniversityProps = {}

const SectionAboutUniversity = () => {
  const { curCategory } = useContext(ContextCategoriesContext)

  console.log(curCategory)
  const seoParams = {
    title: `Программы | ${
      curCategory?.label || 'Направления'
    } | ${companyName}`,
    desc: truncate(pros.join('. '), 120),
    canonical: `${routesFront.defaultRoot}${routesFront.programs}`
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
      <SectionOurPrograms
        classNames={[stls.SectionOurPrograms, stls.ourPrograms]}
        atPrograms
      />
      <SectionUIFormAlpha />
    </>
  )
}

export default SectionAboutUniversity
