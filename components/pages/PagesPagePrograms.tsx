import stls from '@/styles/components/pages/PagesPagePrograms.module.sass'
import { TypeClassNames, TypeLibProgramsStudyFields } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { NextSeo, OrganizationJsonLd } from 'next-seo'
import truncate from 'truncate'
import { pros } from '@/data/index'
import { ContextCategoriesContext } from '@/context/index'
import { routesFront, company, colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import {
  SectionOurPrograms,
  SectionUIFormAlpha,
  SectionProgramsWithFilters,
  SectionProgramsWithFiltersAlt
} from '@/components/sections'

type TypePagesPageProgramsProps = {
  studyFields:
    | {
        type: string | null
        slug: string | null
        title: string | null
      }[]
    | null
}

const PagesPagePrograms = ({ studyFields }: TypePagesPageProgramsProps) => {
  const { curCategory } = useContext(ContextCategoriesContext)

  // console.log(curCategory)
  const seoParams = {
    title: `Программы | ${curCategory?.label || 'Направления'} | ${
      company.name
    }`,
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
      <OrganizationJsonLd
        organizationType='EducationalOrganization'
        id={routesFront.defaultRoot}
        logo={`${routesFront.defaultRoot}${routesFront.assetsImgsIconsManifestIconBg512}`}
        legalName={company.fullName}
        name={company.name}
        address={{
          streetAddress: `${company.address.street.typeShort} ${company.address.street.name} ${company.address.street.door}, ${company.address.street.room}`,
          addressLocality: company.address.city,
          postalCode: company.address.zip,
          addressCountry: company.address.countryCode
        }}
        contactPoints={[
          {
            telephone: company.phoneNumber.val,
            contactType: company.phoneNumber.contactType,
            areaServed: company.phoneNumber.areaServed,
            availableLanguage: company.languages
          }
        ]}
        sameAs={[routesFront.defaultRoot]}
        url={routesFront.defaultRoot}
      />
      <SectionProgramsWithFiltersAlt studyFields={studyFields} />
      <SectionUIFormAlpha title='Поможем определиться с профессией' />
    </>
  )
}

export default PagesPagePrograms
