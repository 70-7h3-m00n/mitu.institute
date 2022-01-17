import {
  TypeFormAlphaValues,
  TypeUtms,
  TypeReferer,
  TypeLeadClientValues
} from '@/types/index'

import { hitLeadRoute } from '@/helpers/index'
import { UseFormReset } from 'react-hook-form'

type onSubmitFormProps = {
  readonly formValues: TypeFormAlphaValues
  readonly asPath: string
  readonly programTitle?: string
  reset: UseFormReset<TypeFormAlphaValues>
}

const onSubmitForm = async ({
  formValues,
  asPath,
  programTitle,
  reset
}: // setOpenLoader,
// setOpen,
onSubmitFormProps) => {
  // setOpenLoader(o => !o)
  const utms: TypeUtms = JSON.parse(sessionStorage.getItem('utms') || '{}')
  const referer: TypeReferer = JSON.parse(
    sessionStorage.getItem('referer') || '{}'
  )

  sessionStorage.removeItem('utms')
  sessionStorage.removeItem('referer')

  const lead: TypeLeadClientValues = {
    ...formValues,
    leadPage: asPath,
    programTitle,
    utms: {
      ...utms,
      utm_term: utms.utm_term && decodeURIComponent(utms.utm_term)
    },
    referer
  }

  const req = await hitLeadRoute({ lead })
  if (req.status === 200) {
    console.log(req.data.msg)

    // setOpenLoader(false)
    // setOpen(o => !o)
    reset()
  } else {
    console.log(req.data.msg)
    console.log(req.data.err)
  }
}

export default onSubmitForm
