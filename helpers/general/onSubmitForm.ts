import { TypeFormValuesAlpha, TypeUtms, TypeReferer } from '@/types/index'
import { hitLeadRoute } from '@/helpers/index'

type onSubmitFormProps = {
  readonly formValues: TypeFormValuesAlpha
  readonly asPath: string
  readonly programTitle?: string
}

const onSubmitForm = async ({
  formValues,
  asPath,
  programTitle
}: // setOpenLoader,
// setOpen,
// reset
onSubmitFormProps) => {
  // setOpenLoader(o => !o)
  const utms: TypeUtms = JSON.parse(sessionStorage.getItem('utms') || '{}')
  const referer: TypeReferer = JSON.parse(
    sessionStorage.getItem('referer') || '{}'
  )
  sessionStorage.removeItem('utms')
  sessionStorage.removeItem('referer')
  const lead = {
    ...formValues,
    leadPage: asPath,
    programTitle,
    utms: {
      ...utms,
      utm_term: utms.utm_term && decodeURIComponent(utms.utm_term)
    },
    referer
  }
  const req = await hitLeadRoute(lead)
  if (req === 200) {
    // handle 200
    // setOpenLoader(false)
    // setOpen(o => !o)
    // reset()
  } else {
    console.log('err')
  }
}

export default onSubmitForm
