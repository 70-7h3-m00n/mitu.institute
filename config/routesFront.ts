import { TypeRoutesFront } from '@/types/index'
import { dev, env, defaultRouteFrontRoot } from '@/config/index'

const routesFront: TypeRoutesFront = {
  root: dev
    ? 'http://localhost:3000'
    : env.nextPublicRouteFrontRoot || defaultRouteFrontRoot,
  defaultRoot: dev ? 'http://localhost:3000' : defaultRouteFrontRoot,
  home: '/',
  promo: '/promo',
  contact: '/contact',
  payment: '/payment',
  legal: '/legal',
  programs: '/programs',
  programsCategory: '/programs/[category]',
  programsAdditional: '/programs/additional',
  programsBachelor: '/programs/bachelor',
  programsMaster: '/programs/master',
  programsCategoryStudyField: '/programs/[category]/[studyField]',
  programsCategoryStudyFieldProgram:
    '/programs/[category]/[studyField]/[program]',
  apiLead: '/api/lead',
  assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png',
  anchorMain: '#main',
  anchorPrograms: '#programs'
}

export default routesFront
