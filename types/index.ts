declare global {
  interface Window {
    dataLayer?: Record<string, any>[]
  }
}

//btn
import type TypeBtn from '@/types/btn/TypeBtn'
import type TypeBtnAlphaVariant from '@/types/btn/TypeBtnAlphaVariant'
import type TypeBtnBeta from '@/types/btn/TypeBtnBeta'
import type TypeBtnBetaVariant from '@/types/btn/TypeBtnBetaVariant'
import type TypeBtnDisabled from '@/types/btn/TypeBtnDisabled'
import type TypeBtnHref from '@/types/btn/TypeBtnHref'
import type TypeBtnTag from '@/types/btn/TypeBtnTag'
import type TypeBtnTagWithLink from '@/types/btn/TypeBtnTagWithLink'
import type TypeBtnType from '@/types/btn/TypeBtnType'

// context
import type TypeContextAccessibility from '@/types/context/TypeContextAccessibility'
import type TypeContextCategory from '@/types/context/TypeContextCategory'
import type TypeContextGeneralPopup from '@/types/context/TypeContextGeneralPopup'

// general
import type TypeAnchor from '@/types/general/TypeAnchor'
import type TypeAriaLabel from '@/types/general/TypeAriaLabel'
import type TypeChildren from '@/types/general/TypeChildren'
import type TypeClassNames from '@/types/general/TypeClassNames'
import type TypeClose from '@/types/general/TypeClose'
import type TypeColor from '@/types/general/TypeColor'
import type TypeColorsKeys from '@/types/general/TypeColorsKeys'
import type TypeFormAlphaValues from '@/types/general/TypeFormAlphaValues'
import type TypeGetStaticPropsContext from '@/types/general/TypeGetStaticPropsContext'
import type TypeHandleGetStaticPaths from '@/types/general/TypeHandleGetStaticPaths'
import type TypeLeadClientValues from '@/types/general/TypeLeadClientValues'
import type TypeLinks from '@/types/general/TypeLinks'
import type TypeLinksHeaderPromo from '@/types/general/TypeLinksHeaderPromo'
import type TypeNextApiResponseLeadData from '@/types/general/TypeNextApiResponseLeadData'
import type TypeOnClick from '@/types/general/TypeOnClick'
import type TypePageData from '@/types/general/TypePageData'
import type TypeImg from '@/types/general/TypeImg'
import type TypeInput from '@/types/general/TypeInput'
import type TypeIsPopup from '@/types/general/TypeIsPopup'
import type TypeReferer from '@/types/general/TypeReferer'
import type TypeRoute from '@/types/general/TypeRoute'
import type TypeRoutesFront from '@/types/general/TypeRoutesFront'
import type TypeStyle from '@/types/general/TypeStyle'
import type TypeUrl from '@/types/general/TypeUrl'
import type TypeUtms from '@/types/general/TypeUtms'
import type TypeVariantForm from '@/types/general/TypeVariantForm'

// page
import type TypePageProgramsStaticPaths from '@/types/page/TypePageProgramsStaticPaths'
import type TypePageProgramsStaticProps from '@/types/page/TypePageProgramsStaticProps'
import type TypePageProgramStaticPaths from '@/types/page/TypePageProgramStaticPaths'
import type TypePageProgramStaticProps from '@/types/page/TypePageProgramStaticProps'
import type TypePagePromoStaticProps from '@/types/page/TypePagePromoStaticProps'
import type TypePageStudyFieldStaticPaths from '@/types/page/TypePageStudyFieldStaticPaths'

// program
import type TypeProgramCategory from '@/types/program/TypeProgramCategory'

export {
  // btns
  TypeBtn,
  TypeBtnAlphaVariant,
  TypeBtnBeta,
  TypeBtnBetaVariant,
  TypeBtnDisabled,
  TypeBtnHref,
  TypeBtnTag,
  TypeBtnTagWithLink,
  TypeBtnType,
  // context
  TypeContextAccessibility,
  TypeContextCategory,
  TypeContextGeneralPopup,
  // general
  TypeAnchor,
  TypeAriaLabel,
  TypeChildren,
  TypeClassNames,
  TypeClose,
  TypeColor,
  TypeColorsKeys,
  TypeFormAlphaValues,
  TypeGetStaticPropsContext,
  TypeHandleGetStaticPaths,
  TypeLeadClientValues,
  TypeLinks,
  TypeLinksHeaderPromo,
  TypeNextApiResponseLeadData,
  TypeOnClick,
  TypePageData,
  TypeImg,
  TypeInput,
  TypeIsPopup,
  TypeReferer,
  TypeRoute,
  TypeRoutesFront,
  TypeStyle,
  TypeUrl,
  TypeUtms,
  TypeVariantForm,
  // page
  TypePageProgramsStaticPaths,
  TypePageProgramsStaticProps,
  TypePageProgramStaticPaths,
  TypePageProgramStaticProps,
  TypePagePromoStaticProps,
  TypePageStudyFieldStaticPaths,
  // program
  TypeProgramCategory
}
