import { TypeUrl, TypeRoute, TypeAnchor } from '@/types/index'
import { dev } from '@/config/index'

type TypeRoutesFront = {
  root: TypeUrl
  home: TypeRoute
  apiLead: TypeRoute
  assetsImgsIconsManifestIcon512: TypeRoute
  anchorMain: TypeAnchor
}

const routesFront: TypeRoutesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mitu.msk.ru',
  home: '/',
  apiLead: '/api/lead',
  assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png',
  anchorMain: '#main'
}

export default routesFront
