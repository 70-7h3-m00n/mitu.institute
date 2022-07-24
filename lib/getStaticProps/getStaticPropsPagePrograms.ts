import {
  TypeGetStaticPropsContext,
  TypePageProgramsProps,
  TypePageProgramsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'
import { getCorrectLocale } from '@/helpers/index'

const getStaticPropsPagePrograms = async ({
  context
}: TypeGetStaticPropsContext): Promise<{
  props: TypePageProgramsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageProgramsPropsQuery>({
    query: gql`
      query GetStaticPropsPagePrograms($locale: String) {
        categories(locale: $locale) {
          type
          slug
          label
          description
        }
        studyFields(locale: $locale) {
          type
          slug
          title
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
      locale: getCorrectLocale({ locale: context?.locale })
    }
  })

  return {
    props: {
      ...res.data,
      gspContextParamsCategory: context?.params?.category?.toString() || null,
      gspContextParamsStudyField:
        context?.params?.studyField?.toString() || null
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePrograms
