import { whyus } from '@/data/index'
import { useAt } from '@/hooks/index'

const useWhyUs = () => {
  const at = useAt()
  return at.uz
    ? [
        "Institutdan ortiqcha to'lovsiz to'lash",
        'Xorijiy fuqarolarni qabul qilish',
        'Diplomlar butun dunyoda keltirilgan',
        'Narxlar raqobatchilardan past',
        "Har qanday dasturga oylik ro'yxatdan o'tish",
        "Kuchli professor-o'qituvchilar va amaliyotchilar",
        'Ish bilan birlashtirish oson',
        'Sinflar uchun qulay vaqt va joyni tanlashingiz mumkin'
      ]
    : whyus
}

export default useWhyUs
