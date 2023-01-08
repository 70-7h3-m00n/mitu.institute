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
    id: id?.toString() || uuidv4(),
    date: format(now, 'dd-MM-yyyy'),
    time: format(now, 'HH:mm:ss'),
    utc: format(now, 'z'),
    name: name?.toString() || null,
    phone: phone?.toString() || null,
    email: email?.toString() || null,
    vk: null,
    promocode: null,
    contactWay: null,
    contactMethod: null,
    question: null,
    rootPath: rootPath?.toString() || null,
    leadPage: rootPath?.toString() + leadPage?.toString() || null,
    ip: ip?.toString() || null,
    cityEn: location?.city.names.en?.toString() || null,
    cityRu: location?.city.names.ru?.toString() || null,
    countryCode: location?.country.code?.toString() || null,
    countryEn: location?.country.names.en?.toString() || null,
    countryRu: location?.country.names.ru?.toString() || null,
    continentCode: location?.continent.code?.toString() || null,
    continentEn: location?.continent.names.en?.toString() || null,
    continentRu: location?.continent.names.ru?.toString() || null,
    accuracyRadius: location?.coordinates.accuracyRadius?.toString() || null,
    latitude: location?.coordinates.latitude?.toString() || null,
    longitude: location?.coordinates.longitude?.toString() || null,
    timeZone: location?.timeZone?.toString() || null,
    postalCode: location?.postalCode?.toString() || null,
    programTitle: programTitle?.toString() || null,
    utmSource:
      (utms && utms.utm_source?.toString()) || referer?.toString() || null,
    utmMedium: (utms && utms.utm_medium?.toString()) || null,
    utmCampaign: (utms && utms.utm_campaign?.toString()) || null,
    utmContent: (utms && utms.utm_content?.toString()) || null,
    utmTerm: (utms && utms.utm_term?.toString()) || null
  }
  return output
}

export default buildLeadData
