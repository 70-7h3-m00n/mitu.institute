import { TypeFormValuesAlpha, TypeUtms, TypeReferer } from '@/types/index'
import axios from 'axios'
import { routesFront } from '@/config/index'

type TypeHitLeadRouteProps = TypeFormValuesAlpha & {
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
    let output
    res.status === 200 && (output = 200)
    res.status === 500 && (output = 500)
    return output
  } catch (err) {
    console.log(err)
    return err
  }
}

export default hitLeadRoute
