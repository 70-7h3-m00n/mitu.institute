import stls from '@/styles/pages/PageLegal.module.sass'
import type { NextPage } from 'next'
import { GetStaticProps } from 'next'
import { TypePageLegalProps } from '@/types/index'
import { useContext, useState, useEffect } from 'react'
import { NextSeo, OrganizationJsonLd } from 'next-seo'
import cn from 'classnames'
import parse from 'html-react-parser'
import { marked } from 'marked'
import truncate from 'truncate'
import { routesFront, company } from '@/config/index'
import { Wrapper } from '@/components/layout'
import { handleGetStaticProps } from '@/lib/index'
import { sortBasedOnNumericOrder } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'
import { useCompanyInfo } from '@/hooks/index'
import { GeneralLegalTable } from '@/components/general'
import { IconFile } from '@/components/icons'

const PageLegal: NextPage<TypePageLegalProps> = ({
  categories,
  documentCategories,
  documentSubcategories
}) => {
  const company = useCompanyInfo()
  const { setCategories } = useContext(ContextCategoriesContext)
  const [curCategory, setCurCategory] = useState<string | null>(
    sortBasedOnNumericOrder(documentCategories)?.[0]?.title || null
  )

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: categories?.[0]?.slug || null }
    })
  }, [categories])

  const h1 = 'Сведения об организации'
  const seoParams = {
    title: `${h1} | ${company.name}`,
    desc: truncate(
      documentCategories?.reduce((acc, cur) => acc + cur.title + '. ', '') ||
        company.tagline,
      120
    ),
    canonical: `${routesFront.defaultRoot}${routesFront.legal}`
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
      <section className={stls.container}>
        <Wrapper>
          <h1 className={stls.title}>{h1}</h1>
          <div className={stls.content}>
            <div className={stls.left}>
              <ul className={stls.documentCategories}>
                {sortBasedOnNumericOrder(documentCategories).map(
                  (category, idx) => (
                    <li
                      key={
                        (category.title ||
                          'PageLegal_documentCategories_item') + idx
                      }
                      className={cn(stls.documentCategoryItem, {
                        [stls.active]: category.title === curCategory
                      })}>
                      <button
                        onClick={() => setCurCategory(category.title || null)}
                        className={stls.documentCategoryItemBtn}>
                        <h2 className={stls.h2}>{category.title}</h2>
                      </button>
                    </li>
                  )
                )}
                <li className={stls.documentCategoryItem}>
                  <p className={stls.info}>
                    Раскрытие информации об образовательной организации в
                    соответствии с Приказом Рособрнадзора от 14 августа 2020 г.
                    № 831 &quot;Об утверждении Требований к структуре
                    официального сайта образовательной организации в
                    информационно-телекоммуникационной сети &quot;Интернет&quot;
                    и формату представления информации&quot;
                  </p>
                </li>
              </ul>
            </div>
            <div className={stls.right}>
              <ul className={stls.documentSubcategories}>
                {documentSubcategories &&
                  sortBasedOnNumericOrder(documentSubcategories)
                    .filter(
                      subcategory =>
                        subcategory.document_category?.title === curCategory
                    )
                    .map((subcategory, idx) => (
                      <li
                        key={
                          (subcategory.title ||
                            'PageLegal_documentSubcategories_item') + idx
                        }
                        className={stls.documentSubcategoriesItem}>
                        <h3 className={stls.h3}>{subcategory.title}</h3>
                        <ul className={stls.documentSubcategoriesDocuments}>
                          {subcategory.documents?.map((document, idx) => (
                            <li
                              key={
                                (document?.title ||
                                  'PageLegal_documentSubcategories_documents_item') +
                                idx
                              }
                              className={
                                stls.documentSubcategoriesDocumentsItem
                              }>
                              {document?.pdf?.url?.includes('.pdf') ? (
                                <a
                                  href={document?.pdf?.url}
                                  target='_blank'
                                  rel='noreferrer noopener'
                                  className={
                                    stls.documentSubcategoriesDocumentsItemLink
                                  }>
                                  <IconFile classNames={[stls.icon]} />
                                  {document?.title}
                                </a>
                              ) : document?.pdf?.url?.includes('.html') ? (
                                <GeneralLegalTable
                                  url={document?.pdf?.url}
                                  complicatedTable={document?.complicatedTable}
                                />
                              ) : (
                                <div className={stls.text}>
                                  {document?.text &&
                                    parse(marked(document?.text))}
                                </div>
                              )}
                            </li>
                          ))}
                        </ul>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.legal, context })

export default PageLegal
