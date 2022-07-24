import { TypePageProgramPaths, TypePageProgramPathsQuery } from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { getCorrectLocale } from '@/helpers/index'

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
  const responses =
    locales &&
    (await Promise.all(
      locales?.map(
        async locale =>
          await apolloClient.query<TypePageProgramPathsQuery>({
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
              locale: getCorrectLocale({ locale })
            }
          })
      )
    ))

  const dataWithLocales = responses?.map((res, idx) => ({
    ...res.data,
    locale: locales?.[idx]
  }))

  const paths: TypePageProgramPaths = []

  dataWithLocales?.forEach(item =>
    item.programs?.forEach(program =>
      paths.push({
        params: {
          category: program?.category?.slug || 'category',
          studyField: program?.study_field?.slug || 'studyField',
          program: program?.slug || 'program'
        },
        locale: item.locale
      })
    )
  )

  // const res = await apolloClient.query<TypePageProgramPathsQuery>({
  //   query: gql`
  //     query GetStaticPathsPageProgram($locale: String) {
  //       programs(locale: $locale) {
  //         category {
  //           slug
  //         }
  //         study_field {
  //           slug
  //         }
  //         slug
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
  //         studyField: program?.study_field?.slug || 'studyField',
  //         program: program?.slug || 'program'
  //       }
  //     }))
  //   )
  // )

  return {
    paths: paths || [
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
