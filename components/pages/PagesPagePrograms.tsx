import stls from '@/styles/components/pages/PagesPagePrograms.module.sass'
import { TypeClassNames, TypeLibProgramsStudyFields } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { NextSeo, OrganizationJsonLd } from 'next-seo'
import { useRouter } from 'next/router'
import truncate from 'truncate'
import { ContextCategoriesContext } from '@/context/index'
import { routesFront, colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt, useCompanyInfo, usePros } from '@/hooks/index'
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
  const at = useAt()
  const router = useRouter()
  const company = useCompanyInfo()
  const { curCategory } = useContext(ContextCategoriesContext)

  const pros = usePros()

  const translations = {
    programs: at.uz ? 'Dasturlar' : 'Программы',
    studyFields: at.uz ? "O'qish yo'nalishlari" : 'Направления',
    formTitle: at.uz
      ? 'Keling, sizga kasb topishga yordam beramiz'
      : 'Поможем определиться с профессией'
  }

  // console.log(curCategory)
  const seoParams = {
    title: `${translations.programs} | ${
      curCategory?.label || translations.studyFields
    } | ${company.name}`,
    desc: truncate(pros.join('. '), 120),
    canonical: `${routesFront.officialRoot}${router.asPath}`
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
      <OrganizationJsonLd
        organizationType='EducationalOrganization'
        id={routesFront.root}
        logo={`${routesFront.root}${routesFront.assetsImgsIconsManifestIconBg512}`}
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
        sameAs={[routesFront.root]}
        url={routesFront.root}
      />
      <SectionProgramsWithFiltersAlt studyFields={studyFields} />
      <SectionUIFormAlpha title={translations.formTitle} />
    </>
  )
}

export default PagesPagePrograms
