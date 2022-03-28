import {
  TypeGetStaticPropsContext,
  TypePageLegalProps,
  TypePageLegalPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageLegal = async ({
  context
}: TypeGetStaticPropsContext): Promise<{
  props: TypePageLegalProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageLegalPropsQuery>({
    query: gql`
      query GetStaticPropsPageLegal {
        categories {
          type
          slug
          label
        }
        documentCategories {
          title
          numeric_order {
            index
          }
        }
        documentSubcategories {
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
    `
  })

  return {
    props: {
      ...res.data
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageLegal
