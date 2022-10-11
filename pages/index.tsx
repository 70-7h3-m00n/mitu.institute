import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { GetStaticProps } from 'next'
import { useContext, useEffect } from 'react'
import { NextSeo, OrganizationJsonLd } from 'next-seo'
import truncate from 'truncate'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext,
  ContextQuestionsContext,
  ContextProgramContext
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

const PageHome: NextPage<TypePageHomeProps> = ({
  categories,
  programs,
  questions
}) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setPrograms } = useContext(ContextProgramsContext)
  const { setQuestions } = useContext(ContextQuestionsContext)
  const { setProgram } = useContext(ContextProgramContext)

  const pros = usePros()

  const company = useCompanyInfo()

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
    title: `${company.name} | ${company.tagline}`,
    desc: truncate(pros.join('. '), 120),
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
      <SectionOurPrograms max={6} cardsStudyFields />
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

export default PageHome

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })
