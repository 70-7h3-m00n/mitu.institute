import { mituinstitute, company } from '@/config/index'
import { useAt } from '@/hooks/index'

const useCompanyInfo = () => {
  const at = useAt()

  return {
    ...company,
    fullName: at.uz
      ? '"Moskva texnologiya va menejment instituti" oliy ta\'lim avtonom notijorat tashkiloti'
      : 'Образовательная автономная некоммерческая организация высшего образования «Московский институт технологий и управления»',
    shortName: at.uz ? 'OANO VO "MITU"' : 'ОАНО ВО «МИТУ»',
    name: at.uz
      ? 'Moskva texnologiya va Menejment instituti'
      : 'Московский Институт Технологий и Управления',
    tagline: at.uz
      ? 'Mamlakatning eng innovatsion universitetida tahsil oling'
      : 'Обучайся в самом инновационном ВУЗЕ страны',
    address: {
      countryCode: 'RU',
      city: at.uz ? 'Moskva' : 'Москва',
      zip: '115114',
      street: {
        type: at.uz ? 'daryosi' : 'набережная',
        typeShort: at.uz ? 'daryosi' : 'наб.',
        name: at.uz ? 'Derbenevskaya' : 'Дербеневская',
        door: '11',
        room: '14'
      }
    },
    addressKz: {
      countryCode: 'KZ',
      city: at.uz ? 'Olmaota' : 'Алматы',
      zip: '050059',
      street: {
        type: at.uz ? "Ko'chasi" : 'Проспект',
        typeShort: at.uz ? "Ko'chasi" : 'пр-т.',
        name: at.uz ? 'Al-Farobiy' : 'Аль-Фараби',
        door: '17',
        block: {
          type: at.uz ? 'blok' : 'Блок',
          number: at.uz ? '4b' : '4Б'
        },
        office: {
          type: at.uz ? 'ofis' : 'офис',
          number: '1603'
        },
        room: at.uz ? 'nurli-Tau BC' : 'БЦ Нурлы-Тау'
      }
    },
    addressUz: {
      countryCode: 'UZ',
      city: at.uz ? 'Toshkent' : 'Ташкент',
      zip: '100015',
      street: {
        type: at.uz ? "Ko'chasi" : 'Улица',
        typeShort: at.uz ? "Ko'chasi" : 'ул.',
        name: at.uz ? 'Afrosiyob' : 'Афрасиаб',
        door: at.uz ? '8a' : '8а',
        room: at.uz ? 'Dmaar' : 'БЦ Dmaar'
      }
    },
    phoneNumber: {
      href: 'tel:+7-495-648-62-26',
      val: '+7 (495) 648-62-26',
      contactType: at.uz ? "O'quv bo'limi" : 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ']
    },
    phoneNumberAlt: {
      href: 'tel:+7-800-444-81-38',
      val: '+7 (800) 444-81-38',
      contactType: at.uz ? "O'quv bo'limi" : 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ']
    },
    phoneNumberKz: {
      href: 'tel:+7-727-311-09-11',
      val: '+7 (727) 311-09-11',
      contactType: at.uz ? "O'quv bo'limi" : 'Учебный отдел',
      areaServed: ['KZ']
    },
    phoneNumberKzAlt: {
      href: 'tel:+7-771-766-22-20',
      val: '+7 (771) 766-22-20',
      contactType: at.uz ? "O'quv bo'limi" : 'Учебный отдел',
      areaServed: ['KZ']
    },
    phoneNumberKzAlt2: {
      href: 'tel:+7-771-766-22-23',
      val: '+7 (771) 766-22-23',
      contactType: at.uz ? "O'quv bo'limi" : 'Учебный отдел',
      areaServed: ['KZ']
    },
    phoneNumberUz: {
      href: 'tel:+998-78-122-62-26',
      val: '+998 (78) 122-62-26',
      contactType: at.uz ? "O'quv bo'limi" : 'Учебный отдел',
      areaServed: ['UZ']
    }
  }
}

export default useCompanyInfo
