import {
  TypePageStudyFieldPaths,
  TypePageStudyFieldPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { getCorrectLocale } from '@/helpers/index'

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
  const responses =
    locales &&
    (await Promise.all(
      locales?.map(
        async locale =>
          await apolloClient.query<TypePageStudyFieldPathsQuery>({
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
              locale: getCorrectLocale({ locale })
            }
          })
      )
    ))

  const dataWithLocales = responses?.map((res, idx) => ({
    ...res.data,
    locale: locales?.[idx]
  }))

  const paths: TypePageStudyFieldPaths = []

  dataWithLocales?.forEach(item =>
    item.programs?.forEach(program =>
      paths.push({
        params: {
          category: program?.category?.slug || 'category',
          studyField: program?.study_field?.slug || 'studyField'
        },
        locale: item.locale
      })
    )
  )

  // const res = await apolloClient.query<TypePageStudyFieldPathsQuery>({
  //   query: gql`
  //     query GetStaticPathsPageStudyField($locale: String) {
  //       programs(locale: $locale) {
  //         category {
  //           slug
  //         }
  //         study_field {
  //           slug
  //         }
  //       }
  //     }
  //   `,
  //   variables: {
  //     locale: getCorrectLocale({ locale: defaultLocale })
  //   }
  // })

  // const paths = Array.from(
  //   new Set(
  //     res.data?.programs?.map(program => ({
  //       params: {
  //         category: program?.category?.slug || 'category',
  //         studyField: program?.study_field?.slug || 'studyField'
  //       }
  //     }))
  //   )
  // )

  return {
    paths: paths || [
      { params: { category: 'category', studyField: 'studyField' } }
    ],
    fallback: 'blocking'
  }
}

export default getStaticPathsPageStudyField
