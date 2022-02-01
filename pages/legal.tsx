import stls from '@/styles/pages/PageLegal.module.sass'
import type { NextPage } from 'next'
import { TypePageLegalProps } from '@/types/index'
import { GetStaticProps } from 'next'
import { useContext, useState, useEffect } from 'react'
import cn from 'classnames'
import { Wrapper } from '@/components/layout'
import { phoneNumber, routesFront, email, address } from '@/config/index'
import { handleGetStaticProps } from '@/lib/index'
import { ContextCategoriesContext } from '@/context/index'
import { IconFile } from '@/components/icons'

const PageLegal: NextPage<TypePageLegalProps> = ({
  categories,
  documentCategories,
  documentSubcategories
}) => {
  const { setCategories } = useContext(ContextCategoriesContext)

  // const [curCategory, setCurCategory] = useState<string | null>(
  //   documentCategories?.[0]?.title || null
  // )
  const [curCategory, setCurCategory] = useState<string | null>(
    'Основные сведения'
  )

  const staticItems = [
    {
      key: 'Полное наименование',
      val: 'Образовательная автономная некоммерческая организация высшего образования «Московский институт технологий и управления»'
    },
    {
      key: 'Cокращенное наименование',
      val: 'ОАНО ВО «МИТУ»'
    },
    {
      key: 'Дата создания',
      val: '06 июля 2020 года'
    },
    {
      key: 'Учредитель образовательной организации',
      val: 'Научная автономная некоммерческая организация «Институт профессионального образования»'
    },
    {
      key: 'Местонахождение образовательной организации',
      val: `${address.zip}, ${address.city}, ${address.street}, пом. ${address.room}`
    },
    {
      key: 'Режим и график работы образовательной организации',
      val: 'пн-пт с 9.00 до 18.00, сб. с 9.00 до 15.00'
    },
    {
      key: 'Контактные телефоны образовательной организации',
      val: phoneNumber.val
    },
    {
      key: 'Адреса электронной почты образовательной организации',
      val: email
    },
    {
      key: 'Адрес официального сайта образовательной организации',
      val: 'https://mitu.msk.ru'
    },
    {
      key: 'Место осуществления образовательной деятельности',
      val: `${address.zip}, г. ${address.city}, ${address.street}, дом ${address.house}`
    }
  ]

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: categories?.[0]?.slug || null }
    })
  }, [categories])

  return (
    <section className={stls.container}>
      <Wrapper>
        <h1 className={stls.title}>Сведения об организации</h1>
        <div className={stls.content}>
          <div className={stls.left}>
            <ul className={stls.documentCategories}>
              <li
                className={cn(stls.documentCategoryItem, {
                  [stls.active]: 'Основные сведения' === curCategory
                })}>
                <button
                  onClick={() => setCurCategory('Основные сведения' || null)}
                  className={stls.documentCategoryItemBtn}>
                  <h2 className={stls.h2}>Основные сведения</h2>
                </button>
              </li>
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
              {curCategory === 'Основные сведения' &&
                staticItems.map((item, idx) => (
                  <li key={item.key + idx} className={stls.staticItem}>
                    <h3 className={stls.staticItemKey}>{item.key}</h3>
                    <p className={stls.staticItemVal}>{item.val}</p>
                  </li>
                ))}
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
