import type { NextApiRequest, NextApiResponse } from 'next'
import { TypeNextApiResponseLeadData } from '@/types/index'
import axios from 'axios'

const AFFISE_SECURE = '011b594659b3d712d7da31ff85cca3e4'

const webhook = async (
  req: NextApiRequest,
  res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
  if (req.body) process.env.TZ = 'Europe/Moscow'

  if (req.body) {
    const price = req?.body?.['leads[status][0][price]']
    const name = req?.body?.name
    const phone = req?.body?.phone
    const email  = req?.body?.email

    try {
        const entries = Object.values(req.body)
        const clickIdIndex = entries?.findIndex(ell => ell === 'Клик ID')
        const clickId = clickIdIndex > 0 && entries?.[clickIdIndex + 1]
        const isEdpartnersFromAmocrm = entries.some(el => el === 'edpartners')
        const isAffiliateFromAmocrm = entries.some(el => el === 'affiliate')

        if(isAffiliateFromAmocrm && isEdpartnersFromAmocrm && price) {
          // console.log('!!!!!!!!!!!!!!!!',isAffiliateFromAmocrm, isEdpartnersFromAmocrm, price, clickId)
          await axios.get(`https://offers-edpartners.affise.com/postback?secure=${AFFISE_SECURE}&clickid=${clickId}&order_sum=${price}&goal=1`)
}
        const utm_source  = req?.body?.utms?.utm_source
        const utm_campaign = req?.body?.utms?.utm_campaign
        const cl_uid = req?.body?.utms?.cl_uid
        if (utm_source === 'edpartners' && utm_campaign === 'affiliate' && !price){

          await axios.get(`https://offers-edpartners.affise.com/postback?secure=${AFFISE_SECURE}&goal=1&clickid=${cl_uid}&comment=offer&name=${name}&phone=${phone}&email=${email}`)
        }
    } catch (e) {
        console.error(e)
    }
}
  res.status(200).json( {msg: 'success'})
}

export default webhook
