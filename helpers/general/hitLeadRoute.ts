import { TypeLeadClientValues } from '@/types/index'
import axios from 'axios'
import { routesFront } from '@/config/index'

type TypeHitLeadRouteProps = {
  lead: TypeLeadClientValues
}

const hitLeadRoute = async ({ lead }: TypeHitLeadRouteProps) => {
  try {
    const res = await axios.post(
      `${routesFront.root}${routesFront.apiLead}`,
      lead
    )
    return res
  } catch (err) {
    console.log(err)
    return err
  }
}

export default hitLeadRoute
