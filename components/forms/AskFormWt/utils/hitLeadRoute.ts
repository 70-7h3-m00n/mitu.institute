import axios, { AxiosResponse } from 'axios'
import {
  LeadValues,
  TypeNextApiResponseLeadData,
  TypeRoutesFront
} from '../types'

type TypeHitLeadRouteProps = {
  lead: LeadValues
  routesFront?: TypeRoutesFront
}

const hitLeadRoute = async ({
  lead,
  routesFront = { apiLead: '/api/contact' }
}: TypeHitLeadRouteProps): Promise<
  AxiosResponse<TypeNextApiResponseLeadData>
> =>
  await axios.post<TypeNextApiResponseLeadData>(`${routesFront?.apiLead}`, lead)

export default hitLeadRoute
