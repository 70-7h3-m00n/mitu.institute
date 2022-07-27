import { TypeUrl, TypeRoute, TypeAnchor } from '@/types/index'
import { defaultRouteFrontRoot, officialRouteFrontRoot } from '@/config/index'

type TypeRoutesFront = {
  root: string
  defaultRoot: 'http://localhost:3000' | typeof defaultRouteFrontRoot
  officialRoot: 'http://localhost:3000' | typeof officialRouteFrontRoot
  home: '/'
  promo: '/promo'
  contact: '/contact'
  payment: '/payment'
  legal: '/legal'
  programs: '/programs'
  programsCategory: '/programs/[category]'
  programsAdditional: '/programs/additional'
  programsBachelor: '/programs/bachelor'
  programsMaster: '/programs/master'
  programsCategoryStudyField: '/programs/[category]/[studyField]'
  programsCategoryStudyFieldProgram: '/programs/[category]/[studyField]/[program]'
  apiLead: '/api/lead'
  assetsImgsIconsManifestIcon512: '/assets/imgs/icons/manifest-icon-512.png'
  assetsImgsIconsManifestIconBg512: '/assets/imgs/icons/manifest-icon-bg-512.png'
  anchorMain: '#main'
  anchorPrograms: '#programs'
  policiesTerms: '/policies/terms.pdf'
  policiesPrivacy: '/policies/privacy.pdf'
}

export default TypeRoutesFront
