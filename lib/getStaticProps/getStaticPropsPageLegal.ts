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
  revalidate: number
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
          documents {
            title
            text
            pdf {
              url
            }
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
