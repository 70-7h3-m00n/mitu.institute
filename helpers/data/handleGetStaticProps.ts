import { TypeRoutesFront } from '@/types/index'
import { TypePagePromoProps } from '@/types/index'
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
          query GetPrograms {
            programs {
              title
              slug
              description
            }
          }
        `
      })

      return {
        props: res.data
      }

    //   const resLand = await axios.get<unknown>(
    //     `${routesBack.root}${routesBack.land}`
    //   )
    //   const resPrograms = await axios.get<unknown>(
    //     `${routesBack.root}${routesBack.programs}`
    //   )
    //   const props: TypePagePromoProps = {
    //     land: resLand.data,
    //     programs: resPrograms.data
    //   }
    // return {
    //   props,
    //   revalidate: revalidate.default
    // }
  }
}

export default handleGetStaticProps
