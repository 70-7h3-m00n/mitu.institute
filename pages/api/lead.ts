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
  if (req.body) process.env.TZ = 'Europe/Moscow'

  // prevent spam
  const bodyFields = (req?.body && Object.keys(req.body)) || undefined

  if (!bodyFields || !bodyFields?.length) return

  const spamValues = [
    `1 wait fordelay`,
    `1*DBMS_PIPE.RECEIVE_MESSAGE(CHR(99)||CHR(99)||CHR(99),15)`,
    `OR 2+736-736-1=0+0+0+1`,
    `555-666-0606`,
    `9qmh1xar'; waitfor delay '0:0:15' --`,
    `	-1" OR 2+652-652-1=0+0+0+1 --`,
    `ghovjnjv`,
    `(select(0)from(select(sleep(15)))v)/*'+(select(0)from(select(sleep(15)))v)+'"+(select(0)from(select(sleep(15)))v)+"*/`,
    `pyFGFP1s') OR 56=(SELECT 56 FROM PG_SLEEP(15))--`,
    `(select(0)from(select(sleep(15)))a)`,
    `1' waitfor delay '0:0:15' --`
  ]

  if (
    bodyFields.some((field: string) => {
      const bodyField = req.body?.[field]?.toLowerCase()?.trim()

      return spamValues.some(spamValue =>
        bodyField?.includes(spamValue.toLowerCase().trim())
      )

      // return (
      //   bodyField.includes(`1 wait fordelay`.toLowerCase().trim()) ||
      //   bodyField.includes(
      //     `1*DBMS_PIPE.RECEIVE_MESSAGE(CHR(99)||CHR(99)||CHR(99),15)`
      //       .toLowerCase()
      //       .trim()
      //   ) ||
      //   bodyField.includes(`OR 2+736-736-1=0+0+0+1`.toLowerCase().trim()) ||
      //   bodyField.includes(`555-666-0606`.toLowerCase().trim()) ||
      //   bodyField.includes(
      //     `9qmh1xar'; waitfor delay '0:0:15' --`.toLowerCase().trim()
      //   ) ||
      //   bodyField.includes(
      //     `	-1" OR 2+652-652-1=0+0+0+1 --`.toLowerCase().trim()
      //   ) ||
      //   bodyField.includes(`ghovjnjv`.toLowerCase().trim()) ||
      //   bodyField.includes(
      //     `(select(0)from(select(sleep(15)))v)/*'+(select(0)from(select(sleep(15)))v)+'"+(select(0)from(select(sleep(15)))v)+"*/`
      //       .toLowerCase()
      //       .trim()
      //   ) ||
      //   bodyField.includes(
      //     `pyFGFP1s') OR 56=(SELECT 56 FROM PG_SLEEP(15))--`
      //       .toLowerCase()
      //       .trim()
      //   ) ||
      //   bodyField.includes(`@@t5xeD`.toLowerCase().trim()) ||
      //   bodyField.includes(
      //     `if(now()=sysdate(),sleep(15),0)`.toLowerCase().trim()
      //   )
      // )
    })
  ) {
    // * tricking the attacker
    res.status(200).json({ msg: 'Email is sent' })
    return
  }

  const protocol = req.headers['x-forwarded-proto']
  const rootPath = `${protocol ? `${protocol}://` : ''}${req.headers.host}`
  const ip =
    req.headers['x-forwarded-for']?.toString() ||
    req.socket.remoteAddress?.toString() ||
    req.connection.remoteAddress?.toString() ||
    null

  // geo2ip does not work and needs to be replaced with other service
  // const geo2ip = new WebServiceClient(
  //   env.geo2UderId || '',
  //   env.geo2ApiKey || '',
  //   {
  //     host: env.geo2Host
  //   }
  // )
  // const geo2ipData = dev ? null : await geo2ip.city(ip || '')
  // const location = dev ? null : buildUserLocation({ geo2ipData })
  const location = null

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
