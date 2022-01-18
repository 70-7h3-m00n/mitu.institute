import {
  TypeFormAlphaValues,
  TypeUtms,
  TypeReferer,
  TypeLeadClientValues
} from '@/types/index'

import { Dispatch, SetStateAction } from 'react'
import { hitLeadRoute } from '@/helpers/index'
import { UseFormReset } from 'react-hook-form'

type onSubmitFormProps = {
  readonly formValues: TypeFormAlphaValues
  readonly asPath: string
  readonly programTitle?: string
  reset: UseFormReset<TypeFormAlphaValues>
  setLoaderIsOpen: Dispatch<SetStateAction<boolean>>
  setThanksIsOpen: Dispatch<SetStateAction<boolean>>
}

const onSubmitForm = async ({
  formValues,
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
    setLoaderIsOpen(false)
    setThanksIsOpen(true)
    reset()
  } else {
    console.log(req.data.msg)
    console.log(req.data.err)
  }
}

export default onSubmitForm
