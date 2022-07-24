import { pros } from '@/data/index'
import { useAt } from '@/hooks/index'

const usePros = () => {
  const at = useAt()
  return at.uz
    ? [
        'Davlat jum',
        "Institutdan ortiqcha to'lovsiz to'lash",
        'Xorijiy fuqarolarni qabul qilish',
        "Masofaviy ta'lim. Mintaqangizdan o'rganishingiz mumkin",
        'Diplomlar butun dunyoda keltirilgan',
        "Har qanday dasturga oylik ro'yxatdan o'tish",
        'Ish bilan birlashtirish oson',
        "Kuchli professor-o'qituvchilar va amaliyotchilar"
      ]
    : pros
}

export default usePros
