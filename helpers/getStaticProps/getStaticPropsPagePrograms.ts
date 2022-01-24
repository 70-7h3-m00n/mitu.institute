import {
  TypeGetStaticPropsContext,
  TypePageProgramsStaticProps
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPagePrograms = async ({
  context
}: TypeGetStaticPropsContext) => {
  const res = await apolloClient.query<TypePageProgramsStaticProps>({
    query: gql`
      query GetStaticPropsPageCategory {
        categories {
          type
          slug
          label
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
            type
            label
          }
          category {
            type
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
      gspContextParamsCategory: context?.params?.category || null,
      gspContextParamsStudyField: context?.params?.studyField || null
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPagePrograms
