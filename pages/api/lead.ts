import type { NextApiRequest, NextApiResponse } from 'next'
import { TypeNextApiResponseLeadData } from '@/types/index'
import url from 'url'
import http from 'http'
import { WebServiceClient } from '@maxmind/geoip2-node'
import nodemailer from 'nodemailer'
import { dev, env } from '@/config/index'
import {
  buildUserLocation,
  buildLeadData,
  createLeadEmailBody
} from '@/helpers/index'

const lead = async (
  req: NextApiRequest,
  res: NextApiResponse<TypeNextApiResponseLeadData | Error>
) => {
  process.env.TZ = 'Europe/Moscow'

  const protocol = req.headers['x-forwarded-proto']
  const rootPath = `${protocol ? `${protocol}://` : ''}${req.headers.host}`
  const ip =
    req.headers['x-forwarded-for']?.toString() ||
    req.socket.remoteAddress?.toString() ||
    req.connection.remoteAddress?.toString() ||
    null

  const geo2ip = new WebServiceClient(
    env.geo2UderId || '',
    env.geo2ApiKey || '',
    {
      host: env.geo2Host
    }
  )
  const geo2ipData = dev ? null : await geo2ip.city(ip || '')
  const location = dev ? null : buildUserLocation({ geo2ipData })

  const data = buildLeadData({ ...req.body, rootPath, ip, location })
  const subject = `Новая заявка с ${data.rootPath}!`
  const html = createLeadEmailBody({ data, subject })

  const transporter = nodemailer.createTransport({
    // @ts-expect-error
    host: env.smtpHost,
    port: env.smtpPort,
    secure: false, // true for 465, false for other ports
    logger: true,
    debug: true,
    tls: {
      rejectUnAuthorized: true
    },
    auth: {
      user: env.smtpLogin,
      pass: env.smtpPassword
    }
  })
  try {
    const emailRes = await transporter.sendMail({
      from: env.smtpFromEmail,
      to: `${dev ? env.smtpToEmailDev : env.smtpToEmailProd}`,
      subject, // Subject line
      text: `
      ${data.name}, \n
      ${data.phone}, \n
      ${data.email}
      `, // plain text body
      html
    })

    console.log('Message sent: %s', emailRes.messageId)
    // res.setHeader('Cache-Control', 'max-age=0, s-maxage=86400')
    res.status(200).json({ msg: 'Email is sent' })
  } catch (err) {
    res.status(500).json({ err, msg: 'Unexpected server error' })
    console.error(err)
  }
}

export default lead
