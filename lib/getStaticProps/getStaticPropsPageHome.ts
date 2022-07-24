import {
  TypeGetStaticPropsContext,
  TypePageHomeProps,
  TypePageHomePropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'
import { getGSPLocale } from '@/helpers/index'

const getStaticPropsPagePromo = async ({
  context
}: TypeGetStaticPropsContext): Promise<{
  props: TypePageHomeProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageHomePropsQuery>({
    query: gql`
      query GetStaticPropsPageHome($locale: String) {
        categories(locale: $locale) {
          label
          type
          slug
        }
        questions(locale: $locale) {
          question
          answer
        }
        programs(locale: $locale) {
          title
          shortDescription
          slug
          study_field {
            slug
            type
            label
            title
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
    `,
    variables: {
      locale: getGSPLocale({ context })
    }
  })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePromo
