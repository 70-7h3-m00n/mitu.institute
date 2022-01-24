import {
  TypeGetStaticPropsContext,
  TypePagePromoStaticProps
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPagePromo = async ({
  context
}: TypeGetStaticPropsContext) => {
  const res = await apolloClient.query<TypePagePromoStaticProps>({
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
    props: res.data || null,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePromo
