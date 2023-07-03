import type { NextApiRequest, NextApiResponse } from 'next'
import { TypeNextApiResponseLeadData } from '@/types/index'
import axios from 'axios'

const AFFISE_SECURE = 'asdasd123123'

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
        // console.log(entries)
        const isEdpartnersFromAmocrm = entries.some(el => el === 'edpartners')
        const isAffiliateFromAmocrm = entries.some(el => el === 'affiliate')
        if(isAffiliateFromAmocrm && isEdpartnersFromAmocrm && price) {
          console.log('!!!!!!!!!!!!!!!!',isAffiliateFromAmocrm , isEdpartnersFromAmocrm ,price)
          const reaction =  await axios.get(`https://offers-edpartners.affise.com/postback?secure=${AFFISE_SECURE}&clickid=63a4d10e070c370001595c53&order_sum=${price}&goal=1`)
            console.log('*******************', reaction)
}
        const utm_source  = req?.body?.utms?.utm_source
        const utm_campaign = req?.body?.utms?.utm_campaign
        const cl_uid = req?.body?.utms?.cl_uid
        if (utm_source === 'edpartners' && utm_campaign === 'affiliate' && !price){
        //   console.log('&&&&&&&&&&&&&&&&', utm_source, utm_campaign, !price, cl_uid)
          await axios.get(`https://offers-edpartners.affise.com/postback?secure=${AFFISE_SECURE}&goal=1&clickid=${cl_uid}&comment=offer&name=${name}&phone=${phone}&email=${email}`)
        }
    } catch (e) {
        console.error(e)
    }
}
  res.status(200).json( {msg: 'success'})
}

export default webhook

// export default {}