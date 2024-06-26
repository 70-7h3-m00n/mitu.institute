import stls from '@/styles/pages/PagePromo.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePagePromoProps } from '@/types/index'
import { useContext, useEffect } from 'react'
import { NextSeo, OrganizationJsonLd } from 'next-seo'
import truncate from 'truncate'
import { mituinstitute, routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext,
  ContextProgramContext,
  ContextQuestionsContext
} from '@/context/index'
import { useCompanyInfo, usePros } from '@/hooks/index'
import {
  SectionHero,
  SectionOurPrograms,
  SectionLeastDocuments,
  SectionEnterWithoutExam,
  SectionHowTrainingGoes,
  SectionAboutUniversity,
  SectionFAQ,
  SectionYourFutureDiploma,
  SectionUIFormAlpha
} from '@/components/sections'

const PagePromo: NextPage<TypePagePromoProps> = ({
  programs,
  categories,
  questions
}) => {
  const company = useCompanyInfo()
  const pros = usePros()

  const { setCategories } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setPrograms } = useContext(ContextProgramsContext)
  const { setQuestions } = useContext(ContextQuestionsContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({
      categories,
      curCategory:
        categories?.filter(
          category => category?.slug === categories?.[0]?.slug
        )?.[0] || null,
      curCategorySlug: categories?.[0]?.slug || null
    })
    setStudyField(null)
    setPrograms(programs || null)
    setQuestions(questions || null)
    setProgram(null)
  }, [categories, programs, questions])

  const seoParams = {
    title: `${company.tagline} | ${company.name}`,
    desc: truncate(pros.join('. '), 120),
    canonical: `${routesFront.officialRoot}${routesFront.promo}`
  }

  return (
    <>
      <NextSeo
        noindex
        nofollow
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
      <SectionHero />
      <SectionOurPrograms promo max={12} />
      <SectionLeastDocuments />
      <SectionEnterWithoutExam />
      <SectionHowTrainingGoes />
      <SectionAboutUniversity />
      <SectionYourFutureDiploma />
      <SectionFAQ />
      <SectionUIFormAlpha classNames={[stls.SectionUIFormAlpha]} />
    </>
  )
}

export default PagePromo

export const getStaticProps: GetStaticProps = async () =>
  await handleGetStaticProps({ page: routesFront.promo })
