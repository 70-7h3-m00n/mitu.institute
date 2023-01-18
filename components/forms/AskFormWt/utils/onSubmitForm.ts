import { submitName } from '../config'
import {
  AskFormState,
  LeadValues,
  TypeReferer,
  TypeRoutesFront,
  TypeUtms
} from '../types'
import { HowToContact } from '../types/howToContact'
import hitLeadRoute from './hitLeadRoute'

type onSubmitFormProps = {
  howToContact?: HowToContact
  routeFront?: TypeRoutesFront
  readonly id: string
} & Pick<AskFormState, 'setContactPath'>

const onSubmitForm = async ({
  howToContact,
  id,
  routeFront,
  setContactPath
}: onSubmitFormProps) => {
  const utms: TypeUtms = JSON.parse(sessionStorage.getItem('utms') || '{}')
  const referer: TypeReferer = JSON.parse(
    sessionStorage.getItem('referer') || '{}'
  )

  sessionStorage.removeItem('utms')
  sessionStorage.removeItem('referer')

  const lead: LeadValues = {
    ...howToContact,
    id,
    utms: {
      ...utms,
      utm_term: utms.utm_term && decodeURIComponent(utms.utm_term)
    },
    referer
  }
  await hitLeadRoute({ lead, routeFront })
    .then(res =>
      res.status === 200
        ? (console.log(res.data.msg), setContactPath(submitName))
        : console.log(res.data.msg, res.data.err)
    )
    .catch(err => console.log(err))
}

export default onSubmitForm
