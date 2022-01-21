import { TypeRoutesFront } from '@/types/index'
import { dev } from '@/config/index'

const routesFront: TypeRoutesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mitu.msk.ru',
  home: '/',
  promo: '/promo',
  legal: '/legal',
  programs: '/programs',
  programsAdditional: '/programs/additional',
  programsBachelor: '/programs/bachelor',
  programsMaster: '/programs/master',
  apiLead: '/api/lead',
  assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png',
  anchorMain: '#main',
  anchorPrograms: '#programs'
}

export default routesFront
