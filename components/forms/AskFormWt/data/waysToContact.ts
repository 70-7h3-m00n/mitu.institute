import { TbBrandTelegram, TbBrandWhatsapp, TbPhoneCall } from 'react-icons/tb'
import { SiViber } from 'react-icons/si'
import { SlSocialVkontakte } from 'react-icons/sl'
import { TfiEmail } from 'react-icons/tfi'
import { ContactMethods, ContactWay, ValidationRules } from '../types'

export const contactMethods: ContactMethods[] = [
  {
    name: 'Позвонить',
    icon: TbPhoneCall
  },
  {
    name: 'Написать',
    icon: TbBrandTelegram
  }
]

export const validationRules: ValidationRules[] = [
  {
    shouldBeValidated: true,
    validationType: 'phone'
  },
  {
    shouldBeValidated: true,
    validationType: 'vk'
  },
  {
    shouldBeValidated: true,
    validationType: 'email'
  }
]

export const waysToContact: ContactWay[] = [
  {
    name: 'Telegram',
    stageStep: 1,
    svg: TbBrandTelegram,
    contactMethods: contactMethods,
    validationRules: validationRules[0],
    contactButtonClass: 'telegramButton'
  },
  {
    name: 'WhatsApp',
    stageStep: 1,
    svg: TbBrandWhatsapp,
    contactMethods: contactMethods,
    validationRules: validationRules[0],
    contactButtonClass: 'whatsAppButton'
  },
  {
    name: 'Viber',
    stageStep: 1,
    svg: SiViber,
    contactMethods: contactMethods,
    validationRules: validationRules[0],
    contactButtonClass: 'viberButton'
  },
  {
    name: 'VK',
    stageStep: 2,
    svg: SlSocialVkontakte,
    contactMethods: [contactMethods[1]],
    validationRules: validationRules[1],
    contactButtonClass: 'vkButton'
  },
  {
    name: 'Телефон',
    stageStep: 2,
    svg: TbPhoneCall,
    contactMethods: [contactMethods[0]],
    validationRules: validationRules[0],
    contactButtonClass: 'mobilePhoneButton'
  },
  {
    name: 'Email',
    stageStep: 2,
    svg: TfiEmail,
    contactMethods: [contactMethods[0]],
    validationRules: validationRules[2],
    contactButtonClass: 'emailButton'
  }
]

export default waysToContact
