import {
  TypeRoutesFront,
  TypePageProgramsPaths,
  TypePageStudyFieldPaths,
  TypePageProgramPaths
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { routesFront, routesBack, revalidate } from '@/config/index'
import {
  getStaticPathsPagePrograms,
  getStaticPathsPageStudyField,
  getStaticPathsPageProgram
} from '@/lib/index'

type TypeHandleGetStaticPathsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
  locales?: string[]
  defaultLocale?: string
}

const handleGetStaticPaths = async ({
  page,
  locales,
  defaultLocale
}: TypeHandleGetStaticPathsProps): Promise<{
  paths:
    | TypePageProgramsPaths
    | TypePageStudyFieldPaths
    | TypePageProgramPaths
    | []
  fallback: boolean | 'blocking'
}> => {
  switch (page) {
    case routesFront.programs:
      return await getStaticPathsPagePrograms({ locales, defaultLocale })

    case routesFront.programsCategoryStudyField:
      return await getStaticPathsPageStudyField({ locales, defaultLocale })

    case routesFront.programsCategoryStudyFieldProgram:
      return await getStaticPathsPageProgram({ locales, defaultLocale })

    default:
      return {
        paths: [],
        fallback: 'blocking'
      }
  }
}

export default handleGetStaticPaths
