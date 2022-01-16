import { TypeFormAlphaValues, TypeUtms, TypeReferer } from '@/types/index'
import axios from 'axios'
import { routesFront } from '@/config/index'

type TypeHitLeadRouteProps = TypeFormAlphaValues & {
  readonly programTitle?: string
  readonly leadPage: string
  readonly utms: TypeUtms
  readonly referer: TypeReferer
}

const hitLeadRoute = async (values: TypeHitLeadRouteProps) => {
  try {
    const res = await axios.post(
      `${routesFront.root}${routesFront.apiLead}`,
      values
    )
    return res
  } catch (err) {
    console.log(err)
    return err
  }
}

export default hitLeadRoute
