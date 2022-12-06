import { LeadValues, TypeReferer, TypeRoutesFront, TypeUtms } from '../types'
import { HowToContact } from '../types/howToContact'
import hitLeadRoute from './hitLeadRoute'

type onSubmitFormProps = {
  howToContact?: HowToContact
  routesFront?: TypeRoutesFront
  readonly id: string
}

const onSubmitForm = async ({
  howToContact,
  id,
  routesFront
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
  const req = await hitLeadRoute({ lead, routesFront })
    .then(res => res)
    .then(res =>
      !res
        ? console.log('Данные не отправились')
        : res.status === 200
        ? console.log(res.data.msg)
        : console.log(res.data.msg, res.data.err)
    )
}

export default onSubmitForm
