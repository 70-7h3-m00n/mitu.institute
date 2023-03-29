import { mituinstitute, company } from '@/config/index'
import { useAt } from '@/hooks/index'

const useCompanyInfo = () => {
  const at = useAt()

  return {
    ...company,
    fullName: at.en
      ? 'Educational autonomous non-profit organization of higher education Moscow Institute of Technology and Management'
      : at.uz
      ? '"Moskva texnologiya va menejment instituti" oliy ta\'lim avtonom notijorat tashkiloti'
      : 'Образовательная автономная некоммерческая организация высшего образования «Московский институт технологий и управления»',
    shortName: at.en
      ? 'EANPO MITM'
      : at.uz
      ? 'OANO VO "MITU"'
      : 'ОАНО ВО «МИТУ»',
    name: at.en
      ? 'Moscow Institute of Technology and Management'
      : at.uz
      ? 'Moskva texnologiya va Menejment instituti'
      : 'Московский Институт Технологий и Управления',
    tagline: at.en
      ? 'Study in the most innovative institute'
      : at.uz
      ? 'Mamlakatning eng innovatsion universitetida tahsil oling'
      : 'Обучайся в самом инновационном ВУЗЕ страны',
    address: {
      countryCode: 'RU',
      city: at.en ? 'Moscow' : at.uz ? 'Moskva' : 'Москва',
      zip: '115114',
      street: {
        type: at.en ? 'embankment' : at.uz ? 'daryosi' : 'набережная',
        typeShort: at.en ? 'emb.' : at.uz ? 'daryosi' : 'наб.',
        name: at.en
          ? 'Derbenevskaya'
          : at.uz
          ? 'Derbenevskaya'
          : 'Дербеневская',
        door: '11',
        room: '14'
      }
    },
    addressKz: {
      countryCode: 'KZ',
      city: at.en ? 'Almaty' : at.uz ? 'Olmaota' : 'Алматы',
      zip: '050059',
      street: {
        type: at.en ? 'avenue' : at.uz ? "Ko'chasi" : 'Проспект',
        typeShort: at.en ? 'ave.' : at.uz ? "Ko'chasi" : 'пр-т.',
        name: at.en ? 'Al-Farabi' : at.uz ? 'Al-Farobiy' : 'Аль-Фараби',
        door: '17',
        block: {
          type: at.en ? 'block' : at.uz ? 'blok' : 'Блок',
          number: at.uz ? '4b' : '4Б'
        },
        office: {
          type: at.en ? 'office' : at.uz ? 'ofis' : 'офис',
          number: '1603'
        },
        room: at.en
          ? 'Business center Nurly-Tau'
          : at.uz
          ? 'nurli-Tau BC'
          : 'БЦ Нурлы-Тау'
      }
    },
    addressUz: {
      countryCode: 'UZ',
      city: at.en ? 'Tashkent' : at.uz ? 'Toshkent' : 'Ташкент',
      zip: '100015',
      street: {
        type: at.en ? 'Street' : at.uz ? "Ko'chasi" : 'Улица',
        typeShort: at.en ? 'St.' : at.uz ? "Ko'chasi" : 'ул.',
        name: at.en ? 'Afrosiab' : at.uz ? 'Afrosiyob' : 'Афросиаб',
        door: at.en ? '8a' : at.uz ? '8a' : '8а',
        room: at.en ? 'Business center Dmaar' : at.uz ? 'Dmaar' : 'БЦ Dmaar'
      }
    },
    phoneNumber: {
      href: 'tel:+7-495-648-62-26',
      val: '+7 (495) 648-62-26',
      contactType: at.en
        ? 'Training Division'
        : at.uz
        ? "O'quv bo'limi"
        : 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ']
    },
    phoneNumberAlt: {
      href: 'tel:+7-800-444-81-38',
      val: '+7 (800) 444-81-38',
      contactType: at.en
        ? 'Training Division'
        : at.uz
        ? "O'quv bo'limi"
        : 'Учебный отдел',
      areaServed: ['RU', 'KZ', 'UZ']
    },
    phoneNumberKz: {
      href: 'tel:+7-727-311-09-11',
      val: '+7 (727) 311-09-11',
      contactType: at.en
        ? 'Training Division'
        : at.uz
        ? "O'quv bo'limi"
        : 'Учебный отдел',
      areaServed: ['KZ']
    },
    phoneNumberKzAlt: {
      href: 'tel:+7-771-766-22-20',
      val: '+7 (771) 766-22-20',
      contactType: at.en
        ? 'Training Division'
        : at.uz
        ? "O'quv bo'limi"
        : 'Учебный отдел',
      areaServed: ['KZ']
    },
    phoneNumberKzAlt2: {
      href: 'tel:+7-771-766-22-23',
      val: '+7 (771) 766-22-23',
      contactType: at.en
        ? 'Training Division'
        : at.uz
        ? "O'quv bo'limi"
        : 'Учебный отдел',
      areaServed: ['KZ']
    },
    phoneNumberUz: {
      href: 'tel:+998-78-122-62-26',
      val: '+998 (78) 122-62-26',
      contactType: at.en
        ? 'Training Division'
        : at.uz
        ? "O'quv bo'limi"
        : 'Учебный отдел',
      areaServed: ['UZ']
    }
  }
}

export default useCompanyInfo
