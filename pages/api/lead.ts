import type { NextApiRequest, NextApiResponse } from 'next'
import { TypeLeadClientValues } from '@/types/index'
import url from 'url'
import http from 'http'
import nodemailer from 'nodemailer'
import { v4 as uuidv4 } from 'uuid'
import { compareAsc, format } from 'date-fns'
import { WebServiceClient } from '@maxmind/geoip2-node'
import { dev } from '@/config/index'

type NextApiResponseData = {
  name: string
}

const lead = (
  req: NextApiRequest,
  res: NextApiResponse<NextApiResponseData>
) => {
  process.env.TZ = 'Europe/Moscow'

  const {
    name,
    phone,
    email,
    leadPage,
    programTitle,
    utms,
    referer
  }: TypeLeadClientValues = req.body

  // handle lead
  // res.status(200).json(req.body)
}

export default lead
