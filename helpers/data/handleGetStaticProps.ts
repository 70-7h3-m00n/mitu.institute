import { TypeRoutesFront } from '@/types/index'
import axios, { AxiosResponse } from 'axios'
import { gql } from '@apollo/client'
import apolloClient from 'apolloClient'
import { routesFront, routesBack, revalidate } from '@/config/index'

type TypeHandleGetStaticPropsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
}

const handleGetStaticProps = async ({
  page
}: TypeHandleGetStaticPropsProps) => {
  switch (page) {
    case routesFront.promo:
      const res = await apolloClient.query({
        query: gql`
          query GetPagePromoData {
            programs {
              title
              shortDescription
              study_field {
                label
              }
              category {
                type
              }
              timenprice {
                studyMonthsDuration
              }
            }
            categories {
              label
              type
            }
          }
        `
      })

      return {
        props: res.data
      }
  }
}

export default handleGetStaticProps
