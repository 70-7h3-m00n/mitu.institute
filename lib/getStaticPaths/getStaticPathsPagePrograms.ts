import {
  TypePageProgramsPaths,
  TypePageProgramsPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { getCorrectLocale } from '@/helpers/index'

type TGetStaticPathsPageProgramsProps = {
  locales?: string[]
  defaultLocale?: string
}

const getStaticPathsPagePrograms = async ({
  locales,
  defaultLocale
}: TGetStaticPathsPageProgramsProps): Promise<{
  paths: TypePageProgramsPaths
  fallback: boolean | 'blocking'
}> => {
  const responses =
    locales &&
    (await Promise.all(
      locales?.map(
        async locale =>
          await apolloClient.query<TypePageProgramsPathsQuery>({
            query: gql`
              query GetStaticPathsPageCategory($locale: String) {
                categories(locale: $locale) {
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

  const paths: TypePageProgramsPaths = []

  dataWithLocales?.forEach(item =>
    item.categories?.forEach(category =>
      paths.push({
        params: {
          category: category?.slug || 'category'
        },
        locale: item.locale
      })
    )
  )

  // const res = await apolloClient.query<TypePageProgramsPathsQuery>({
  //   query: gql`
  //     query GetStaticPathsPageCategory($locale: String) {
  //       categories(locale: $locale) {
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
  //     res.data?.categories?.map(category => ({
  //       params: { category: category?.slug || 'category' }
  //     }))
  //   )
  // )

  return {
    paths: paths || [{ params: { category: 'category' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPagePrograms
