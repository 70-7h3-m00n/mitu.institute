import {
  TypeGetStaticPropsContext,
  TypePageProgramsProps,
  TypePageProgramsPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPagePrograms = async ({
  context
}: TypeGetStaticPropsContext): Promise<{
  props: TypePageProgramsProps
  revalidate: number | boolean
}> => {
  const res = await apolloClient.query<TypePageProgramsPropsQuery>({
    query: gql`
      query GetStaticPropsPagePrograms {
        categories {
          type
          slug
          label
          description
        }
        studyFields {
          type
          slug
          title
        }
        programs {
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
    `
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
