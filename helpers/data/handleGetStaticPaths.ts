import {
  TypePageProgramsStaticPaths,
  TypeRoutesFront,
  TypeHandleGetStaticPaths
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { routesFront, routesBack, revalidate } from '@/config/index'
import {
  getStaticPathsPagePrograms,
  getStaticPathsPageStudyField,
  getStaticPathsPageProgram
} from '@/helpers/index'

type TypehandleGetStaticPathsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
}

const handleGetStaticPaths = async ({
  page
}: TypehandleGetStaticPathsProps): Promise<TypeHandleGetStaticPaths> => {
  switch (page) {
    case routesFront.programs:
      return await getStaticPathsPagePrograms()

    case routesFront.programsCategoryStudyField:
      return await getStaticPathsPageStudyField()

    case routesFront.programsCategoryStudyFieldProgram:
      return await getStaticPathsPageProgram()

    default:
      return {
        paths: [],
        fallback: 'blocking'
      }
  }
}

export default handleGetStaticPaths
