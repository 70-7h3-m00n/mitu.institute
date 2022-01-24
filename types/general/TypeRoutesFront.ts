import {
  TypeProgramCategory,
  TypeUrl,
  TypeRoute,
  TypeAnchor
} from '@/types/index'

type TypeRoutesFront = {
  root: 'http://localhost:3000' | 'https://mitu.msk.ru'
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
  anchorMain: '#main'
  anchorPrograms: '#programs'
}

export default TypeRoutesFront
