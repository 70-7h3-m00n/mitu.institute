import { TypeRoutesFront } from '@/types/index'
import {
  dev,
  env,
  defaultRouteFrontRoot,
  officialRouteFrontRoot
} from '@/config/index'

// figure out dynamic root domain for mitm.uz
const routesFront: TypeRoutesFront = {
  root: dev
    ? 'http://localhost:3000'
    : env.nextPublicRouteFrontRoot || defaultRouteFrontRoot,
  defaultRoot: dev ? 'http://localhost:3000' : defaultRouteFrontRoot,
  officialRoot: dev ? 'http://localhost:3000' : officialRouteFrontRoot,
  home: '/',
  promo: '/promo',
  contact: '/contact',
  payment: '/payment',
  paymentHigherEducation: '/payment/higherEducation',
  paymentAdditionalEducation: '/payment/additionalEducation',
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
  apiWebhook: '/api/webhook',
  assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png',
  assetsImgsIconsManifestIconBg512:
    '/assets/imgs/icons/manifest-icon-bg-512.png',
  anchorMain: '#main',
  anchorPrograms: '#programs',
  policiesTerms: '/policies/terms.pdf',
  policiesPrivacy: '/policies/privacy.pdf'
}

export default routesFront
