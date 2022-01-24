import { TypePageProgramsStaticPaths, TypeRoutesFront } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { routesFront, routesBack, revalidate } from '@/config/index'

type TypehandleGetStaticPathsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
}

const handleGetStaticPaths = async ({
  page
}: TypehandleGetStaticPathsProps): Promise<{
  paths: {
    params: Record<'category', string>
  }[]
  fallback: boolean | 'blocking'
}> => {
  switch (page) {
    case routesFront.programs:
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
        paths: res.data.categories.map(category => ({
          params: { category: category.slug }
        })),
        fallback: 'blocking'
      }
    default:
      return {
        paths: [],
        fallback: 'blocking'
      }
  }
}

export default handleGetStaticPaths
