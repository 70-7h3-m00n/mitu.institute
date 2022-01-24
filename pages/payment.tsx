import stls from '@/styles/pages/PagePayment.module.sass'
import type { NextPage } from 'next'
import { SectionPayment, SectionPaymentInformation } from '@/components/sections'

const PagePayment: NextPage = () => {
  return (
    <>
      <SectionPayment/>
      <SectionPaymentInformation/>
    </>
  )
}

export default PagePayment
