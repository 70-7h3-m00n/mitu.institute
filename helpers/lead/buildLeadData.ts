import { TypeLeadClientValues } from '@/types/index'
import { v4 as uuidv4 } from 'uuid'
import { format } from 'date-fns'
import { buildUserLocation } from '@/helpers/index'

type TypeBuildLeadDataProps = TypeLeadClientValues & {
  rootPath: string
  ip: string
  location: Awaited<ReturnType<typeof buildUserLocation>>
}

const buildLeadData = ({
  name,
  phone,
  email,
  id,
  programTitle,
  leadPage,
  utms,
  referer,
  rootPath,
  ip,
  location
}: TypeBuildLeadDataProps) => {
  const now = new Date()

  const output = {
    id: id || uuidv4(),
    date: format(now, 'dd-MM-yyyy'),
    time: format(now, 'HH:mm:ss'),
    utc: format(now, 'z'),
    name: name || null,
    phone: phone || null,
    email: email || null,
    vk: null,
    promocode: null,
    contactWay: null,
    contactMethod: null,
    question: null,
    rootPath: rootPath || null,
    leadPage: rootPath + leadPage || null,
    ip: ip || null,
    cityEn: location?.city.names.en || null,
    cityRu: location?.city.names.ru || null,
    countryCode: location?.country.code || null,
    countryEn: location?.country.names.en || null,
    countryRu: location?.country.names.ru || null,
    continentCode: location?.continent.code || null,
    continentEn: location?.continent.names.en || null,
    continentRu: location?.continent.names.ru || null,
    accuracyRadius: location?.coordinates.accuracyRadius || null,
    latitude: location?.coordinates.latitude || null,
    longitude: location?.coordinates.longitude || null,
    timeZone: location?.timeZone || null,
    postalCode: location?.postalCode || null,
    programTitle: programTitle || null,
    utmSource: (utms && utms.utm_source) || referer || null,
    utmMedium: (utms && utms.utm_medium) || null,
    utmCampaign: (utms && utms.utm_campaign) || null,
    utmContent: (utms && utms.utm_content) || null,
    utmTerm: (utms && utms.utm_term) || null
  }
  return output
}

export default buildLeadData
