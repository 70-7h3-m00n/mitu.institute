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
      door: '17',
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
    href: 'tel:+7-777-398-97-40',
    val: '+7 (777) 398-97-40',
    contactType: 'Учебный отдел',
    areaServed: ['KZ']
  },
  phoneNumberKzAlt: {
    href: 'tel:+7-727-311-15-00',
    val: '+7 (727) 311-15-00',
    contactType: 'Учебный отдел',
    areaServed: ['KZ']
  },
  languages: ['Russian', 'Kazakh', 'Uzbek']
}

export default company
