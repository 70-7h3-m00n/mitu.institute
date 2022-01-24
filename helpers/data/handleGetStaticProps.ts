import {
  TypeRoutesFront,
  TypePagePromoStaticProps,
  TypePageProgramsStaticProps,
  TypeGetStaticPropsContext
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsPagePromo,
  getStaticPropsPagePrograms
} from '@/helpers/index'

type TypeHandleGetStaticPropsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
}

const handleGetStaticProps = async ({
  page,
  context
}: TypeHandleGetStaticPropsProps & TypeGetStaticPropsContext): Promise<{
  props: TypePagePromoStaticProps | TypePageProgramsStaticProps
  revalidate: number
}> => {
  switch (page) {
    case routesFront.promo:
      return await getStaticPropsPagePromo({ context })

    case routesFront.programs:
      return await getStaticPropsPagePrograms({ context })

    default:
      return {
        props: {},
        revalidate: revalidate.default
      }
  }
}

export default handleGetStaticProps
