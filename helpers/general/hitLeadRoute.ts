import {
  TypeLeadClientValues,
  TypeNextApiResponseLeadData
} from '@/types/index'
import axios, { AxiosResponse } from 'axios'
import { routesFront } from '@/config/index'

type TypeHitLeadRouteProps = {
  lead: TypeLeadClientValues
}

const hitLeadRoute = async ({
  lead
}: TypeHitLeadRouteProps): Promise<
  AxiosResponse<TypeNextApiResponseLeadData>
> =>
  await axios.post<TypeNextApiResponseLeadData>(`${routesFront.apiLead}`, lead)

export default hitLeadRoute
