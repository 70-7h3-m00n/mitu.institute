import { TbBrandTelegram, TbBrandWhatsapp, TbPhoneCall } from 'react-icons/tb'
import { SiViber } from 'react-icons/si'
import { SlSocialVkontakte } from 'react-icons/sl'
import { TfiEmail } from 'react-icons/tfi'
import { ContactWay } from '../types'

export const waysToContact: ContactWay[] = [
  {
    name: 'Telegram',
    stageStep: 1,
    svg: TbBrandTelegram,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: TbPhoneCall
      },
      {
        name: 'Написать',
        icon: TbBrandTelegram
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'telegramButton'
  },
  {
    name: 'WhatsApp',
    stageStep: 1,
    svg: TbBrandWhatsapp,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: TbPhoneCall
      },
      {
        name: 'Написать',
        icon: TbBrandTelegram
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'whatsAppButton'
  },
  {
    name: 'Viber',
    stageStep: 1,
    svg: SiViber,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: TbPhoneCall
      },
      {
        name: 'Написать',
        icon: TbBrandTelegram
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'viberButton'
  },
  {
    name: 'VK',
    stageStep: 2,
    svg: SlSocialVkontakte,
    contactMethods: [
      {
        name: 'Написать',
        icon: TbBrandTelegram
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'vk'
    },
    contactButtonClass: 'vkButton'
  },
  {
    name: 'Телефон',
    stageStep: 2,
    svg: TbPhoneCall,
    contactMethods: [
      {
        name: 'Позвонить',
        icon: TbPhoneCall
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'phone'
    },
    contactButtonClass: 'mobilePhoneButton'
  },
  {
    name: 'Email',
    stageStep: 2,
    svg: TfiEmail,
    contactMethods: [
      {
        name: 'Написать',
        icon: TbBrandTelegram
      }
    ],
    validationRules: {
      shouldBeValidated: true,
      validationType: 'email'
    },
    contactButtonClass: 'emailButton'
  }
]

export default waysToContact
