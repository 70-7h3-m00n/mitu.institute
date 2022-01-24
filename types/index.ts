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
import type TypeContextCategories from '@/types/context/TypeContextCategories'
import type TypeContextCategory from '@/types/context/TypeContextCategory'
import type TypeContextGeneralPopup from '@/types/context/TypeContextGeneralPopup'
import type TypeContextProgram from '@/types/context/TypeContextProgram'
import type TypeContextStudyField from '@/types/context/TypeContextStudyField'

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

// lib
import type TypeLibProgram from '@/types/lib/program/TypeLibProgram'
import type TypeLibProgramCategory from '@/types/lib/program/TypeLibProgramCategory'
import type TypeLibProgramCategoryLabel from '@/types/lib/program/TypeLibProgramCategoryLabel'
import type TypeLibProgramCategorySlug from '@/types/lib/program/TypeLibProgramCategorySlug'
import type TypeLibProgramCategoryType from '@/types/lib/program/TypeLibProgramCategoryType'
import type TypeLibProgramDescription from '@/types/lib/program/TypeLibProgramDescription'
import type TypeLibProgramSlug from '@/types/lib/program/TypeLibProgramSlug'
import type TypeLibProgramStudyField from '@/types/lib/program/TypeLibProgramStudyField'
import type TypeLibProgramStudyFieldSlug from '@/types/lib/program/TypeLibProgramStudyFieldSlug'
import type TypeLibProgramStudyFieldType from '@/types/lib/program/TypeLibProgramStudyFieldType'
import type TypeLibProgramStudyForm from '@/types/lib/program/TypeLibProgramStudyForm'
import type TypeLibProgramStudyFormLabel from '@/types/lib/program/TypeLibProgramStudyFormLabel'
import type TypeLibProgramTimenprice from '@/types/lib/program/TypeLibProgramTimenprice'
import type TypeLibProgramTimenpriceDiscount from '@/types/lib/program/TypeLibProgramTimenpriceDiscount'
import type TypeLibProgramTimenpricePrice from '@/types/lib/program/TypeLibProgramTimenpricePrice'
import type TypeLibProgramTimenpriceStudyMonthsDuration from '@/types/lib/program/TypeLibProgramTimenpriceStudyMonthsDuration'
import type TypeLibProgramTitle from '@/types/lib/program/TypeLibProgramTitle'

// page
import type TypePageProgramsStaticPaths from '@/types/page/TypePageProgramsStaticPaths'
import type TypePageProgramsStaticProps from '@/types/page/TypePageProgramsStaticProps'
import type TypePageProgramStaticPaths from '@/types/page/TypePageProgramStaticPaths'
import type TypePageProgramStaticProps from '@/types/page/TypePageProgramStaticProps'
import type TypePagePromoStaticProps from '@/types/page/TypePagePromoStaticProps'
import type TypePageStudyFieldStaticPaths from '@/types/page/TypePageStudyFieldStaticPaths'

// program
import type TypeProgramCategories from '@/types/program/TypeProgramCategories'
import type TypeProgramCategory from '@/types/program/TypeProgramCategory'
import type TypeProgramStudyField from '@/types/program/TypeProgramStudyField'

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
  TypeContextCategories,
  TypeContextCategory,
  TypeContextGeneralPopup,
  TypeContextProgram,
  TypeContextStudyField,
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
  // lib
  TypeLibProgram,
  TypeLibProgramCategory,
  TypeLibProgramCategoryLabel,
  TypeLibProgramCategorySlug,
  TypeLibProgramCategoryType,
  TypeLibProgramDescription,
  TypeLibProgramSlug,
  TypeLibProgramStudyField,
  TypeLibProgramStudyFieldSlug,
  TypeLibProgramStudyFieldType,
  TypeLibProgramStudyForm,
  TypeLibProgramStudyFormLabel,
  TypeLibProgramTimenprice,
  TypeLibProgramTimenpriceDiscount,
  TypeLibProgramTimenpricePrice,
  TypeLibProgramTimenpriceStudyMonthsDuration,
  TypeLibProgramTitle,
  // page
  TypePageProgramsStaticPaths,
  TypePageProgramsStaticProps,
  TypePageProgramStaticPaths,
  TypePageProgramStaticProps,
  TypePagePromoStaticProps,
  TypePageStudyFieldStaticPaths,
  // program
  TypeProgramCategories,
  TypeProgramCategory,
  TypeProgramStudyField
}
