import {
  TypeGetStaticPropsContext,
  TypePagePromoProps,
  TypePagePromoPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPagePromo = async ({
  context
}: TypeGetStaticPropsContext): Promise<{
  props: TypePagePromoProps
  revalidate: number
}> => {
  const res = await apolloClient.query<TypePagePromoPropsQuery>({
    query: gql`
      query GetStaticPropsPagePromo {
        categories {
          label
          type
          slug
        }
        questions {
          question
          answer
        }
        programs {
          title
          shortDescription
          study_field {
            slug
            type
            label
          }
          category {
            slug
            type
            label
          }
          timenprice {
            studyMonthsDuration
          }
        }
      }
    `
  })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePromo
