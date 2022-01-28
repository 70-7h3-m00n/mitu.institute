import {
  TypeRoutesFront,
  TypePageHomeProps,
  TypePagePromoProps,
  TypePageProgramsProps,
  TypePageProgramProps,
  TypeGetStaticPropsContext
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsPageHome,
  getStaticPropsPagePromo,
  getStaticPropsPagePrograms,
  getStaticPropsPageProgram
} from '@/lib/index'

type TypeHandleGetStaticPropsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
} & TypeGetStaticPropsContext

const handleGetStaticProps = async ({
  page,
  context
}: TypeHandleGetStaticPropsProps): Promise<{
  props:
    | TypePageHomeProps
    | TypePagePromoProps
    | TypePageProgramsProps
    | TypePageProgramProps
    | {}
  revalidate: number
}> => {
  switch (page) {
    case routesFront.home:
      return await getStaticPropsPageHome({ context })

    case routesFront.promo:
      return await getStaticPropsPagePromo({ context })

    case routesFront.programs:
      return await getStaticPropsPagePrograms({ context })

    case routesFront.programsCategoryStudyFieldProgram:
      return await getStaticPropsPageProgram({ context })

    default:
      return {
        props: {},
        revalidate: revalidate.default
      }
  }
}

export default handleGetStaticProps
