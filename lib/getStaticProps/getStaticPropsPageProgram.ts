import {
  TypeGetStaticPropsContext,
  TypePageProgramProps,
  TypePageProgramPropsQuery
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'
import { getGSPLocale } from '@/helpers/index'

const getStaticPropsPageProgram = async ({
  context
}: TypeGetStaticPropsContext): Promise<{
  props: TypePageProgramProps
  revalidate: number | boolean
}> => {
  console.log(context)
  const res = await apolloClient.query<TypePageProgramPropsQuery>({
    query: gql`
      query GetStaticPropsPageProgram(
        $category: String!
        $studyField: String!
        $program: String!
        $locale: String
      ) {
        categories(locale: $locale) {
          type
          slug
          label
        }
        programs(
          locale: $locale
          where: {
            category: { slug: $category }
            study_field: { slug: $studyField }
            slug: $program
          }
        ) {
          id
          title
          slug
          description
          teachersDescription
          picture {
            url
            width
            height
          }
          timenprice {
            studyMonthsDuration
            studyHours
            price
            discount
          }
          studyCostDescItems {
            item
            isBold
          }
          study_form {
            label
          }
          forWhom {
            title {
              titlePart
              highlight
            }
            desc
          }
          forWhomPicture {
            url
            width
            height
          }
          whatYouWillLearn {
            item
          }
          howProcessGoes {
            title
            description
            courseContainsOf {
              title
              percent
            }
          }
          shortContents {
            title
          }
          shortContentsDescription
          jobTitles {
            picture {
              url
              width
              height
            }
            position
            salary
          }
          teachers {
            portrait {
              url
              width
              height
            }
            name
            achievements
          }
          questions {
            question
            answer
          }
          study_field {
            slug
            type
            label
            title
          }
          category {
            type
            slug
            label
          }
          qualification
        }
      }
    `,
    variables: {
      category: context?.params?.category || null,
      studyField: context?.params?.studyField || null,
      program: context?.params?.program || null,
      locale: getGSPLocale({ context })
    }
  })

  return {
    props: {
      ...res.data,
      programs: null,
      program: res.data.programs?.[0] || null,
      gspContextParamsCategory: context?.params?.category?.toString() || null,
      gspContextParamsStudyField:
        context?.params?.studyField?.toString() || null,
      gspContextParamsProgram: context?.params?.program?.toString() || null
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageProgram
