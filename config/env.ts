type TypeEnv = {
  smtpHost?: string
  smtpPort?: number
  smtpLogin?: string
  smtpPassword?: string
  smtpFromEmail?: string
  smtpToEmailDev?: string
  smtpToEmailProd?: string
  geo2UderId?: string
  geo2ApiKey?: string
  geo2Host?: string
}

const env: TypeEnv = {
  smtpHost: process.env.SMTP_HOST,
  smtpPort: Number(process.env.SMTP_PORT),
  smtpLogin: process.env.SMTP_LOGIN,
  smtpPassword: process.env.SMTP_PASSWORD,
  smtpFromEmail: process.env.SMTP_FROM_EMAIL,
  smtpToEmailDev: process.env.SMTP_TO_EMAIL_DEV,
  smtpToEmailProd: process.env.SMTP_TO_EMAIL_PROD,
  geo2UderId: process.env.GEO2_USER_ID,
  geo2ApiKey: process.env.GEO2_APIKEY,
  geo2Host: process.env.GEO2_HOST
}

export default env
