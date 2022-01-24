import {
  TypeRoutesFront,
  TypePagePromoStaticProps,
  TypePageProgramsStaticProps,
  TypePageProgramStaticProps,
  TypeGetStaticPropsContext
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsPagePromo,
  getStaticPropsPagePrograms,
  getStaticPropsPageProgram
} from '@/helpers/index'

type TypeHandleGetStaticPropsProps = {
  page: TypeRoutesFront[keyof TypeRoutesFront]
}

const handleGetStaticProps = async ({
  page,
  context
}: TypeHandleGetStaticPropsProps & TypeGetStaticPropsContext): Promise<{
  props:
    | TypePagePromoStaticProps
    | TypePageProgramsStaticProps
    | TypePageProgramStaticProps
  revalidate: number
}> => {
  switch (page) {
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
