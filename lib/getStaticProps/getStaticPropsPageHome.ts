import {
  TypeGetStaticPropsContext,
  TypePageHomeProps,
  TypePageHomePropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPagePromo = async ({
  context
}: TypeGetStaticPropsContext): Promise<{
  props: TypePageHomeProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageHomePropsQuery>({
    query: gql`
      query GetStaticPropsPageHome {
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
          slug
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
