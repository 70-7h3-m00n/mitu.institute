import {
  TypeGetStaticPropsContext,
  TypePagePromoProps,
  TypePagePromoPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'
import { getCorrectLocale } from '@/helpers/index'

const getStaticPropsPagePromo = async ({
  context
}: TypeGetStaticPropsContext): Promise<{
  props: TypePagePromoProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePagePromoPropsQuery>({
    query: gql`
      query GetStaticPropsPagePromo($locale: String) {
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
      locale: getCorrectLocale({ locale: context?.locale })
    }
  })

  return {
    props: res.data,
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePromo
