import {
  TypeGetStaticPropsContext,
  TypePageProgramStaticProps
} from '@/types/index'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { revalidate } from '@/config/index'

const getStaticPropsPageProgram = async ({
  context
}: TypeGetStaticPropsContext) => {
  const res = await apolloClient.query<TypePageProgramStaticProps>({
    query: gql`
      query GetStaticPropsPageProgram(
        $category: String!
        $studyField: String!
        $program: String!
      ) {
        categories {
          type
          slug
          label
        }
        programs(
          where: {
            category: { slug: $category }
            study_field: { slug: $studyField }
            slug: $program
          }
        ) {
          title
          slug
          description
          timenprice {
            studyMonthsDuration
            price
            discount
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
            width
            height
            url
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
              width
              height
              url
            }
            name
            specialization
          }
          questions {
            question
            answer
          }
          study_field {
            type
            slug
          }
          category {
            type
            slug
            label
          }
        }
      }
    `,
    variables: {
      category: context?.params?.category || null,
      studyField: context?.params?.studyField || null,
      program: context?.params?.program || null
    }
  })

  return {
    props: {
      ...res.data,
      gspContextParamsCategory: context?.params?.category || null,
      gspContextParamsStudyField: context?.params?.studyField || null,
      gspContextParamsProgram: context?.params?.program || null
    },
    revalidate: revalidate.default
  }
}

export default getStaticPropsPageProgram
