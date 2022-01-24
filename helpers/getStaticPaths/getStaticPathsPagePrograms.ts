import {
  TypePageProgramsStaticPaths,
  TypeRoutesFront,
  TypeHandleGetStaticPaths
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'

const getStaticPathsPagePrograms =
  async (): Promise<TypeHandleGetStaticPaths> => {
    const res = await apolloClient.query<TypePageProgramsStaticPaths>({
      query: gql`
        query GetStaticPathsPageCategory {
          categories {
            slug
          }
        }
      `
    })

    return {
      paths: Array.from(
        new Set(
          res.data.categories?.map(category => ({
            params: { category: category.slug?.toString() || 'category' }
          }))
        )
      ),
      fallback: 'blocking'
    }
  }

export default getStaticPathsPagePrograms
