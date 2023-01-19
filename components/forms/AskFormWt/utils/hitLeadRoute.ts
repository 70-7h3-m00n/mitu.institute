import axios, { AxiosResponse } from 'axios'
import { apiLead } from '../config'
import {
  LeadValues,
  TypeNextApiResponseLeadData,
  TypeRoutesFront
} from '../types'

type TypeHitLeadRouteProps = {
  lead: LeadValues
  routeFront?: TypeRoutesFront
}

const hitLeadRoute = async ({
  lead,
  routeFront = apiLead
}: TypeHitLeadRouteProps): Promise<
  AxiosResponse<TypeNextApiResponseLeadData>
> =>
  await axios.post<
    TypeNextApiResponseLeadData,
    AxiosResponse<TypeNextApiResponseLeadData>,
    LeadValues
  >(`${routeFront}`, lead)

export default hitLeadRoute
