import { mituinstitute, company } from '@/config/index'
import { useAt } from '@/hooks/index'

const useCompanyInfo = () => {
  const at = useAt()

  return {
    ...company,
    name: at.uz
      ? 'Moskva texnologiya va Menejment instituti'
      : 'Московский Институт Технологий и Управления',
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
    }
  }
}

export default useCompanyInfo
