import stls from '@/styles/pages/PageLegal.module.sass'
import type { NextPage } from 'next'
import { TypePageLegalProps } from '@/types/index'
import { GetStaticProps } from 'next'
import { useContext, useState, useEffect } from 'react'
import cn from 'classnames'
import { Wrapper } from '@/components/layout'
import { routesFront } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { ContextCategoriesContext } from '@/context/index'
import { IconFile } from '@/components/icons'

const PageLegal: NextPage<TypePageLegalProps> = ({
  categories,
  documentCategories,
  documentSubcategories
}) => {
  const { setCategories } = useContext(ContextCategoriesContext)

  const [curCategory, setCurCategory] = useState<string | null>(
    documentCategories?.[0]?.title || null
  )

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: categories?.[0].slug || null }
    })
  }, [categories])

  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Сведения об организации</h1>
        <div className={stls.content}>
          <div className={stls.left}>
            <ul className={stls.documentCategories}>
              {documentCategories?.map((category, idx) => (
                <li
                  key={
                    (category.title || 'PageLegal_documentCategories_item') +
                    idx
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
              ))}
            </ul>
          </div>
          <div className={stls.right}>
            <ul className={stls.documentSubcategories}>
              {documentSubcategories
                ?.filter(
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
                            (document.title ||
                              'PageLegal_documentSubcategories_documents_item') +
                            idx
                          }
                          className={stls.documentSubcategoriesDocumentsItem}>
                          <a
                            href={document.pdf?.url}
                            target='_blank'
                            rel='noreferrer noopener'
                            className={
                              stls.documentSubcategoriesDocumentsItemLink
                            }>
                            <IconFile classNames={[stls.icon]} />
                            {document.title}
                          </a>
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
  )
}

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.legal, context })

export default PageLegal
