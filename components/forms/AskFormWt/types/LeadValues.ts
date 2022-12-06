import { HowToContact } from './howToContact'
import TypeReferer from './TypeReferer'
import TypeUtms from './TypeUtms'

export type LeadValues = HowToContact & {
  id: string
  utms: TypeUtms
  referer: TypeReferer
}

