import React from 'react'
import { SlArrowLeft } from 'react-icons/sl'
import { AskFormState } from '../../../types'
import stls from './ContactTitle.module.sass'

type Props = Pick<AskFormState, 'contactPath' | 'prev'>

const ContactTitle: React.FC<Props> = ({ prev, contactPath }) => {
  return (
    <div className={stls.wrap}>
      <SlArrowLeft className={stls.arrow} onClick={prev} />
      {contactPath}
    </div>
  )
}

export default ContactTitle
