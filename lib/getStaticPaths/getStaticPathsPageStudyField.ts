import {
  TypePageStudyFieldPaths,
  TypePageStudyFieldPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { getGetStaticPathsLocale } from '@/helpers/index'

type TGetStaticPathsPageStudyFieldProps = {
  locales?: string[]
  defaultLocale?: string
}

const getStaticPathsPageStudyField = async ({
  locales,
  defaultLocale
}: TGetStaticPathsPageStudyFieldProps): Promise<{
  paths: TypePageStudyFieldPaths
  fallback: boolean | 'blocking'
}> => {
  const res = await apolloClient.query<TypePageStudyFieldPathsQuery>({
    query: gql`
      query GetStaticPathsPageStudyField($locale: String) {
        programs(locale: $locale) {
          category {
            slug
          }
          study_field {
            slug
          }
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
            studyField: program?.study_field?.slug || 'studyField'
          }
        }))
      )
    ) || [{ params: { category: 'category', studyField: 'studyField' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageStudyField
