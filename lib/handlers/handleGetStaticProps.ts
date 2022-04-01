import {
  TypeRoutesFront,
  TypePageHomeProps,
  TypePagePromoProps,
  TypePageProgramsProps,
  TypePageProgramProps,
  TypeGetStaticPropsContext,
  TypePageLegalProps
} from '@/types/index'
import { routesFront, revalidate } from '@/config/index'
import {
  getStaticPropsPageHome,
  getStaticPropsPagePromo,
  getStaticPropsPagePrograms,
  getStaticPropsPageProgram,
  getStaticPropsPageLegal
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
    | TypePageLegalProps
    | {}
  revalidate: number | boolean
}> => {
  try {
    switch (page) {
      case routesFront.home:
        return await getStaticPropsPageHome({ context })

      case routesFront.promo:
        return await getStaticPropsPagePromo({ context })

      case routesFront.programs:
        return await getStaticPropsPagePrograms({ context })

      case routesFront.programsCategoryStudyFieldProgram:
        return await getStaticPropsPageProgram({ context })

      case routesFront.legal:
        return await getStaticPropsPageLegal({ context })

      default:
        return {
          props: {},
          revalidate: revalidate.default
        }
    }
  } catch (err) {
    console.log(err)
    throw new Error(`Error at handleGetStaticProps: ${err}`)
  }
}

export default handleGetStaticProps
