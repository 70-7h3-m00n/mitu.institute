import {
  TypePageStudyFieldStaticPaths,
  TypeHandleGetStaticPaths
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'

const getStaticPathsPageStudyField =
  async (): Promise<TypeHandleGetStaticPaths> => {
    const res = await apolloClient.query<TypePageStudyFieldStaticPaths>({
      query: gql`
        query GetStaticPathsPageStudyField {
          programs {
            category {
              slug
            }
            study_field {
              slug
            }
          }
        }
      `
    })

    return {
      paths: Array.from(
        new Set(
          res.data.programs.map(program => ({
            params: {
              category: program.category?.slug || 'category',
              studyField: program.study_field?.slug || 'studyField'
            }
          }))
        )
      ),
      fallback: 'blocking'
    }
  }

export default getStaticPathsPageStudyField
