import {
  TypePageProgramsPaths,
  TypePageProgramsPathsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { getGetStaticPathsLocale } from '@/helpers/index'

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
  const res = await apolloClient.query<TypePageProgramsPathsQuery>({
    query: gql`
      query GetStaticPathsPageCategory($locale: String) {
        categories(locale: $locale) {
          slug
        }
      }
    `,
    variables: {
      locale: getGetStaticPathsLocale({ defaultLocale })
    }
  })

  console.log(locales)
  console.log(defaultLocale)
  console.log('test')
  console.log(
    Array.from(
      new Set(
        res.data?.categories?.map(category => ({
          params: { category: category?.slug || 'category' }
        }))
      )
    )
  )

  return {
    paths: Array.from(
      new Set(
        res.data?.categories?.map(category => ({
          params: { category: category?.slug || 'category' }
        }))
      )
    ) || [{ params: { category: 'category' } }],
    fallback: 'blocking'
  }
}

export default getStaticPathsPagePrograms
