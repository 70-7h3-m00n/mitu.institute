import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

const lead = (req: NextApiRequest, res: NextApiResponse<Data>) => {
  // handle lead
  res.status(200).json(req.body)
}

export default lead
