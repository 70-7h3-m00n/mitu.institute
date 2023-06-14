import type { NextApiRequest, NextApiResponse } from 'next'
import { TypeNextApiResponseLeadData } from '@/types/index'

const webhook = async (
  req: NextApiRequest,
  res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
  if (req.body) process.env.TZ = 'Europe/Moscow'

  console.log('Received webhook data:', req.body);

  // Обработка полученных данных и выполнение необходимых действий
  // ...

  res.status(200);
}

export default webhook