import {
  TypeGetStaticPropsContext,
  TypeLibLegalDocumentSubcategories,
  TypePageLegalProps,
  TypePageLegalPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import axios from 'axios'
import { revalidate } from '@/config/index'
import { getCorrectLocale } from '@/helpers/index'

const getStaticPropsPageLegal = async ({
  context
}: TypeGetStaticPropsContext): Promise<{
  props: TypePageLegalProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageLegalPropsQuery>({
    query: gql`
      query GetStaticPropsPageLegal($locale: String) {
        categories(locale: $locale) {
          type
          slug
          label
        }
        documentCategories(locale: $locale) {
          title
          numeric_order {
            index
          }
        }
        documentSubcategories(locale: $locale) {
          title
          numeric_order {
            index
          }
          documents {
            title
            text
            pdf {
              url
            }
            complicatedTable
          }
          document_category {
            title
          }
        }
      }
    `,
    variables: {
      locale: getCorrectLocale({ locale: context?.locale })
    }
  })

  // const fetchTable = async ({ url }: { url: string }) => {
  //   const res = await axios.get(url)
  //   const data = await res.data
  //   return data
  // }

  // const getDocumentSubcategoriesWithFetchedTables = async () => {
  //   const documentSubcategories =
  //     (await Promise.all(
  //       (res.data?.documentSubcategories?.map(async subCategory => ({
  //         ...subCategory,
  //         documents:
  //           (await Promise.all(
  //             subCategory?.documents?.map(async document =>
  //               document?.pdf?.url?.includes('.html')
  //                 ? {
  //                     ...document,
  //                     table: await fetchTable({ url: document.pdf.url }).then(
  //                       data => data
  //                     )
  //                   }
  //                 : document
  //             )
  //           )) || null
  //       })) as TypeLibLegalDocumentSubcategories) || null
  //     )) || null

  //   return documentSubcategories
  // }

  // const documentSubcategories =
  //   (await getDocumentSubcategoriesWithFetchedTables()) as TypeLibLegalDocumentSubcategories

  const props = {
    ...res.data
    // documentSubcategories
  }

  return {
    props,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageLegal
