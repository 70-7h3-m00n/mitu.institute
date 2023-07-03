import {
  TypeFormAlphaValues,
  TypeUtms,
  TypeReferer,
  TypeLeadClientValues
} from '@/types/index'
import { v4 as uuidv4 } from 'uuid'

import { Dispatch, SetStateAction } from 'react'
import { hitLeadRoute, hitWebhookRoute } from '@/helpers/index'
import { UseFormReset } from 'react-hook-form'
import { getCookies } from 'cookies-next'

type onSubmitFormProps = {
  readonly formValues: TypeFormAlphaValues
  readonly id: string
  readonly asPath: string
  readonly programTitle?: string
  reset: UseFormReset<TypeFormAlphaValues>
  setLoaderIsOpen: Dispatch<SetStateAction<boolean>>
  setThanksIsOpen: Dispatch<SetStateAction<boolean>>
}

const onSubmitForm = async ({
  formValues,
  id,
  asPath,
  programTitle,
  reset,
  setLoaderIsOpen,
  setThanksIsOpen
}: onSubmitFormProps) => {
  setLoaderIsOpen(true)
  const utms: TypeUtms = JSON.parse(sessionStorage.getItem('utms') || '{}')
  const referer: TypeReferer = JSON.parse(
    sessionStorage.getItem('referer') || '{}'
  )

  sessionStorage.removeItem('utms')
  sessionStorage.removeItem('referer')

  const lead: TypeLeadClientValues = {
    ...formValues,
    id,
    leadPage: asPath,
    programTitle,
    utms: {
      ...utms,
      utm_term: utms.utm_term && decodeURIComponent(utms.utm_term)
    },
    referer
  }

  
  const req = await hitLeadRoute({ lead })

  
  const cookies = getCookies()

//   console.log(cookies)
  
  const lastUtmSource = cookies.utm_source
  const lastUtmCampaign = cookies.utm_campaign
  const lastClkUid = cookies.cl_uid
  
  const leadHook = {
     ...formValues,
    utms: { 
    utm_source: lastUtmSource,
    utm_campaign: lastUtmCampaign,
    cl_uid: lastClkUid,
  } 
}

  await hitWebhookRoute({ leadHook })
  if (req.status === 200) {
    // console.log(req.data.msg)
    setLoaderIsOpen(false)
    setThanksIsOpen(true)
    reset()
  } else {
    console.log(req.data.msg)
    console.log(req.data.err)
  }
}

export default onSubmitForm
