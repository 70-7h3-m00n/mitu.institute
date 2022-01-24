import {
  TypePageProgramStaticPaths,
  TypeHandleGetStaticPaths
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'

const getStaticPathsPageProgram =
  async (): Promise<TypeHandleGetStaticPaths> => {
    const res = await apolloClient.query<TypePageProgramStaticPaths>({
      query: gql`
        query GetStaticPathsPageProgram {
          programs {
            category {
              slug
            }
            study_field {
              slug
            }
            slug
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
              studyField: program.study_field?.slug || 'studyField',
              program: program.slug || 'program'
            }
          }))
        )
      ),
      fallback: 'blocking'
    }
  }

export default getStaticPathsPageProgram
