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
        programs {
          title
          shortDescription
          study_field {
            label
          }
          category {
            type
          }
          timenprice {
            studyMonthsDuration
          }
        }
        categories {
          label
          type
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
