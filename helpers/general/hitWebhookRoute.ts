import {
    TypeLeadHookValues,
    TypeNextApiResponseLeadData
  } from '@/types/index'
  import axios, { AxiosResponse } from 'axios'
  import { routesFront } from '@/config/index'
  
  type TypeHitLeadWebhookRouteProps = {
    leadHook: TypeLeadHookValues
  }
  
  const hitWebhookRoute = async ({
    leadHook
  }: TypeHitLeadWebhookRouteProps): Promise<
    AxiosResponse<TypeNextApiResponseLeadData>
  > =>
    await axios.post<TypeNextApiResponseLeadData>(`${routesFront.apiWebhook}`, leadHook)
  
  export default hitWebhookRoute
  // export default {}