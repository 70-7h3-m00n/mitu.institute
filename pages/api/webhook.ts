import type { NextApiRequest, NextApiResponse } from 'next'
import { TypeNextApiResponseLeadData } from '@/types/index'

const webhook = async (
  req: NextApiRequest,
  res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
  if (req.body) process.env.TZ = 'Europe/Moscow'

// console.log('req.body is empty:', !Boolean(req.body))
console.log('Received webhook data:', req.headers)


  res.status(200).json( {msg: 'success'})
}

export default webhook