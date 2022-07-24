import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { getGetStaticPathsLocale } from '@/helpers/index'

type TGetStaticPathsPageProgramsProps = {
  locales?: string[]
  defaultLocale?: string
}

const getStaticPathsPageProgram = async ({
  locales,
  defaultLocale
}: TGetStaticPathsPageProgramsProps): Promise<{
  paths: TypePageProgramPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageProgramPathsQuery>({
    query: gql`
      query GetStaticPathsPageProgram($locale: String) {
        programs(locale: $locale) {
          category {
            slug
          }
          study_field {
            slug
          }
          slug
        }
      }
    `,
    variables: {
      locale: getGetStaticPathsLocale({ defaultLocale })
    }
  })

  return {
    paths: Array.from(
      new Set(
        res.data?.programs?.map(program => ({
          params: {
            category: program?.category?.slug || 'category',
            studyField: program?.study_field?.slug || 'studyField',
            program: program?.slug || 'program'
          }
        }))
      )
    ) || [
      {
        params: {
          category: 'category',
          studyField: 'studyField',
          program: 'program'
        }
      }
    ],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageProgram
