import {
  TypeGetStaticPropsContext,
  TypePageLegalProps,
  TypePageLegalPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
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

  return {
    props: {
      ...res.data
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageLegal
