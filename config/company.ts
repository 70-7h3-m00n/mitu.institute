import { mituinstitute } from '@/config/index'

const company = {
  fullName:
    'Образовательная автономная некоммерческая организация высшего образования «Московский институт технологий и управления»',
  shortName: 'ОАНО ВО «МИТУ»',
  name: 'Московский Институт Технологий и Управления',
  tagline: 'Обучайся в самом инновационном ВУЗЕ страны',
  address: {
    countryCode: 'RU',
    city: 'Москва',
    zip: '115114',
    street: {
      type: 'набережная',
      typeShort: 'наб.',
      name: 'Дербеневская',
      door: '11',
      room: '14'
    }
  },
  addressKz: {
    countryCode: 'KZ',
    city: 'Алматы',
    zip: '050059',
    street: {
      type: 'Проспект',
      typeShort: 'пр-т.',
      name: 'Аль-Фараби',
      door: '17 Блок 4Б офис 1603', // TODO: figure out better keys
      room: 'БЦ Нурлы-Тау'
    }
  },
  email: {
    href: mituinstitute
      ? 'mailto:info@mitu.institute'
      : 'mailto:info@mitu.msk.ru',
    val: mituinstitute ? 'info@mitu.institute' : 'info@mitu.msk.ru'
  },
  emailKz: {
    href: mituinstitute
      ? 'mailto:almaty@mitu.institute'
      : 'mailto:almaty@mitu.msk.ru',
    val: mituinstitute ? 'almaty@mitu.institute' : 'almaty@mitu.msk.ru'
  },
  phoneNumber: {
    href: 'tel:+7-495-648-62-26',
    val: '+7 (495) 648-62-26',
    contactType: 'Учебный отдел',
    areaServed: ['RU', 'KZ', 'UZ']
  },
  phoneNumberAlt: {
    href: 'tel:+7-800-648-62-26',
    val: '+7 (800) 648-62-26',
    contactType: 'Учебный отдел',
    areaServed: ['RU', 'KZ', 'UZ']
  },
  phoneNumberKz: {
    href: 'tel:+7-727-311-09-11',
    val: '+7 (727) 311-09-11',
    contactType: 'Учебный отдел',
    areaServed: ['KZ']
  },
  phoneNumberKzAlt: {
    href: 'tel:+7-771-766-22-20',
    val: '+7 (771) 766-22-20',
    contactType: 'Учебный отдел',
    areaServed: ['KZ']
  },
  phoneNumberKzAlt2: {
    href: 'tel:+7-771-766-22-23',
    val: '+7 (771) 766-22-23',
    contactType: 'Учебный отдел',
    areaServed: ['KZ']
  },
  languages: ['Russian', 'Kazakh', 'Uzbek']
}

export default company
