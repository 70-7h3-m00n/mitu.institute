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
import type TypeContextGeneralPopup from '@/types/context/TypeContextGeneralPopup'
import type TypeContextProgram from '@/types/context/TypeContextProgram'
import type TypeContextPrograms from '@/types/context/TypeContextPrograms'
import type TypeContextQuestions from '@/types/context/TypeContextQuestions'

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
import type TypeImg from '@/types/general/TypeImg'
import type TypeImgExtended from '@/types/general/TypeImgExtended'
import type TypeInput from '@/types/general/TypeInput'
import type TypeIsPopup from '@/types/general/TypeIsPopup'
import type TypeLeadClientValues from '@/types/general/TypeLeadClientValues'
import type TypeLinks from '@/types/general/TypeLinks'
import type TypeLinksHeaderPromo from '@/types/general/TypeLinksHeaderPromo'
import type TypeNextApiResponseLeadData from '@/types/general/TypeNextApiResponseLeadData'
import type TypeOnClick from '@/types/general/TypeOnClick'
import type TypePageData from '@/types/general/TypePageData'
import type TypeReferer from '@/types/general/TypeReferer'
import type TypeRoute from '@/types/general/TypeRoute'
import type TypeRoutesFront from '@/types/general/TypeRoutesFront'
import type TypeStyle from '@/types/general/TypeStyle'
import type TypeUrl from '@/types/general/TypeUrl'
import type TypeUtms from '@/types/general/TypeUtms'
import type TypeVariantForm from '@/types/general/TypeVariantForm'

// lib/general
import type TypeLibGeneralPicture from '@/types/lib/general/TypeLibGeneralPicture'
import type TypeLibGeneralPictureHeight from '@/types/lib/general/TypeLibGeneralPictureHeight'
import type TypeLibGeneralPictureUrl from '@/types/lib/general/TypeLibGeneralPictureUrl'
import type TypeLibGeneralPictureWidth from '@/types/lib/general/TypeLibGeneralPictureWidth'
import type TypeLibGeneralTitle from '@/types/lib/general/TypeLibGeneralTitle'
import type TypeLibGeneralTitleHighlight from '@/types/lib/general/TypeLibGeneralTitleHighlight'
import type TypeLibGeneralTitleTitlePart from '@/types/lib/general/TypeLibGeneralTitleTitlePart'

// lib/program
import type TypeLibProgram from '@/types/lib/program/TypeLibProgram'
import type TypeLibProgramCategory from '@/types/lib/program/TypeLibProgramCategory'
import type TypeLibProgramCategoryLabel from '@/types/lib/program/TypeLibProgramCategoryLabel'
import type TypeLibProgramCategorySlug from '@/types/lib/program/TypeLibProgramCategorySlug'
import type TypeLibProgramCategoryType from '@/types/lib/program/TypeLibProgramCategoryType'
import type TypeLibProgramDescription from '@/types/lib/program/TypeLibProgramDescription'
import type TypeLibProgramForWhom from '@/types/lib/program/TypeLibProgramForWhom'
import type TypeLibProgramForWhomDesc from '@/types/lib/program/TypeLibProgramForWhomDesc'
import type TypeLibProgramHowProcessGoes from '@/types/lib/program/TypeLibProgramHowProcessGoes'
import type TypeLibProgramHowProcessGoesCourseContainsOf from '@/types/lib/program/TypeLibProgramHowProcessGoesCourseContainsOf'
import type TypeLibProgramHowProcessGoesCourseContainsOfPercent from '@/types/lib/program/TypeLibProgramHowProcessGoesCourseContainsOfPercent'
import type TypeLibProgramHowProcessGoesCourseContainsOfTitle from '@/types/lib/program/TypeLibProgramHowProcessGoesCourseContainsOfTitle'
import type TypeLibProgramHowProcessGoesDescription from '@/types/lib/program/TypeLibProgramHowProcessGoesDescription'
import type TypeLibProgramHowProcessGoesTitle from '@/types/lib/program/TypeLibProgramHowProcessGoesTitle'
import type TypeLibProgramJobTitles from '@/types/lib/program/TypeLibProgramJobTitles'
import type TypeLibProgramJobTitlesPosition from '@/types/lib/program/TypeLibProgramJobTitlesPosition'
import type TypeLibProgramJobTitlesSalary from '@/types/lib/program/TypeLibProgramJobTitlesSalary'
import type TypeLibProgramShortContents from '@/types/lib/program/TypeLibProgramShortContents'
import type TypeLibProgramShortContentsTitle from '@/types/lib/program/TypeLibProgramShortContentsTitle'
import type TypeLibProgramSlug from '@/types/lib/program/TypeLibProgramSlug'
import type TypeLibProgramStudyField from '@/types/lib/program/TypeLibProgramStudyField'
import type TypeLibProgramStudyFieldSlug from '@/types/lib/program/TypeLibProgramStudyFieldSlug'
import type TypeLibProgramStudyFieldType from '@/types/lib/program/TypeLibProgramStudyFieldType'
import type TypeLibProgramStudyForm from '@/types/lib/program/TypeLibProgramStudyForm'
import type TypeLibProgramStudyFormLabel from '@/types/lib/program/TypeLibProgramStudyFormLabel'
import type TypeLibProgramTeachers from '@/types/lib/program/TypeLibProgramTeachers'
import type TypeLibProgramTeachersAchievements from '@/types/lib/program/TypeLibProgramTeachersAchievements'
import type TypeLibProgramTeachersName from '@/types/lib/program/TypeLibProgramTeachersName'
import type TypeLibProgramTimenprice from '@/types/lib/program/TypeLibProgramTimenprice'
import type TypeLibProgramTimenpriceDiscount from '@/types/lib/program/TypeLibProgramTimenpriceDiscount'
import type TypeLibProgramTimenpricePrice from '@/types/lib/program/TypeLibProgramTimenpricePrice'
import type TypeLibProgramTimenpriceStudyMonthsDuration from '@/types/lib/program/TypeLibProgramTimenpriceStudyMonthsDuration'
import type TypeLibProgramTitle from '@/types/lib/program/TypeLibProgramTitle'
import type TypeLibProgramWhatYouWillLearn from '@/types/lib/program/TypeLibProgramWhatYouWillLearn'
import type TypeLibProgramWhatYouWillLearnItem from '@/types/lib/program/TypeLibProgramWhatYouWillLearnItem'
import type TypeLibProgramQuestion from '@/types/lib/program/TypeLibProgramQuestion'
import type TypeLibProgramQuestionAnswer from '@/types/lib/program/TypeLibProgramQuestionAnswer'
import type TypeLibProgramQuestionQuestion from '@/types/lib/program/TypeLibProgramQuestionQuestion'
import type TypeLibProgramQuestions from '@/types/lib/program/TypeLibProgramQuestions'

// lib/programs
import type TypeLibPrograms from '@/types/lib/programs/TypeLibPrograms'
import type TypeLibProgramsCategories from '@/types/lib/programs/TypeLibProgramsCategories'
import type TypeLibProgramsCategoriesLabel from '@/types/lib/programs/TypeLibProgramsCategoriesLabel'
import type TypeLibProgramsCategoriesSlug from '@/types/lib/programs/TypeLibProgramsCategoriesSlug'
import type TypeLibProgramsCategoriesType from '@/types/lib/programs/TypeLibProgramsCategoriesType'
import type TypeLibProgramsStudyFields from '@/types/lib/programs/TypeLibProgramsStudyFields'
import type TypeLibProgramsStudyFieldsSlug from '@/types/lib/programs/TypeLibProgramsStudyFieldsSlug'
import type TypeLibProgramsStudyFieldsTitle from '@/types/lib/programs/TypeLibProgramsStudyFieldsTitle'
import type TypeLibProgramsStudyFieldsType from '@/types/lib/programs/TypeLibProgramsStudyFieldsType'

// page
import type TypePageHomeProps from '@/types/page/TypePageHomeProps'
import type TypePageHomePropsQuery from '@/types/page/TypePageHomePropsQuery'
import type TypePageLegalProps from '@/types/page/TypePageLegalProps'
import type TypePageLegalPropsQuery from '@/types/page/TypePageLegalPropsQuery'
import type TypePageProgramPaths from '@/types/page/TypePageProgramPaths'
import type TypePageProgramPathsQuery from '@/types/page/TypePageProgramPathsQuery'
import type TypePageProgramProps from '@/types/page/TypePageProgramProps'
import type TypePageProgramPropsQuery from '@/types/page/TypePageProgramPropsQuery'
import type TypePageProgramsPaths from '@/types/page/TypePageProgramsPaths'
import type TypePageProgramsPathsQuery from '@/types/page/TypePageProgramsPathsQuery'
import type TypePageProgramsProps from '@/types/page/TypePageProgramsProps'
import type TypePageProgramsPropsQuery from '@/types/page/TypePageProgramsPropsQuery'
import type TypePagePromoProps from '@/types/page/TypePagePromoProps'
import type TypePagePromoPropsQuery from '@/types/page/TypePagePromoPropsQuery'
import type TypePageStudyFieldPaths from '@/types/page/TypePageStudyFieldPaths'
import type TypePageStudyFieldPathsQuery from '@/types/page/TypePageStudyFieldPathsQuery'

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
  TypeContextGeneralPopup,
  TypeContextProgram,
  TypeContextPrograms,
  TypeContextQuestions,
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
  TypeLinks,
  TypeLinksHeaderPromo,
  TypeNextApiResponseLeadData,
  TypeOnClick,
  TypePageData,
  TypeImg,
  TypeImgExtended,
  TypeInput,
  TypeIsPopup,
  TypeLeadClientValues,
  TypeReferer,
  TypeRoute,
  TypeRoutesFront,
  TypeStyle,
  TypeUrl,
  TypeUtms,
  TypeVariantForm,
  // lib/general
  TypeLibGeneralPicture,
  TypeLibGeneralPictureHeight,
  TypeLibGeneralPictureUrl,
  TypeLibGeneralPictureWidth,
  TypeLibGeneralTitle,
  TypeLibGeneralTitleHighlight,
  TypeLibGeneralTitleTitlePart,
  // lib/program
  TypeLibProgram,
  TypeLibProgramCategory,
  TypeLibProgramCategoryLabel,
  TypeLibProgramCategorySlug,
  TypeLibProgramCategoryType,
  TypeLibProgramDescription,
  TypeLibProgramForWhom,
  TypeLibProgramForWhomDesc,
  TypeLibProgramHowProcessGoes,
  TypeLibProgramHowProcessGoesCourseContainsOf,
  TypeLibProgramHowProcessGoesCourseContainsOfPercent,
  TypeLibProgramHowProcessGoesCourseContainsOfTitle,
  TypeLibProgramHowProcessGoesDescription,
  TypeLibProgramHowProcessGoesTitle,
  TypeLibProgramJobTitles,
  TypeLibProgramJobTitlesPosition,
  TypeLibProgramJobTitlesSalary,
  TypeLibProgramShortContents,
  TypeLibProgramShortContentsTitle,
  TypeLibProgramSlug,
  TypeLibProgramStudyField,
  TypeLibProgramStudyFieldSlug,
  TypeLibProgramStudyFieldType,
  TypeLibProgramStudyForm,
  TypeLibProgramStudyFormLabel,
  TypeLibProgramTeachers,
  TypeLibProgramTeachersAchievements,
  TypeLibProgramTeachersName,
  TypeLibProgramTimenprice,
  TypeLibProgramTimenpriceDiscount,
  TypeLibProgramTimenpricePrice,
  TypeLibProgramTimenpriceStudyMonthsDuration,
  TypeLibProgramTitle,
  TypeLibProgramWhatYouWillLearn,
  TypeLibProgramWhatYouWillLearnItem,
  TypeLibProgramQuestion,
  TypeLibProgramQuestionAnswer,
  TypeLibProgramQuestionQuestion,
  TypeLibProgramQuestions,
  // lib/programs
  TypeLibPrograms,
  TypeLibProgramsCategories,
  TypeLibProgramsCategoriesLabel,
  TypeLibProgramsCategoriesSlug,
  TypeLibProgramsCategoriesType,
  TypeLibProgramsStudyFields,
  TypeLibProgramsStudyFieldsSlug,
  TypeLibProgramsStudyFieldsTitle,
  TypeLibProgramsStudyFieldsType,
  // page
  TypePageHomeProps,
  TypePageHomePropsQuery,
  TypePageLegalProps,
  TypePageLegalPropsQuery,
  TypePageProgramPaths,
  TypePageProgramPathsQuery,
  TypePageProgramProps,
  TypePageProgramPropsQuery,
  TypePageProgramsPaths,
  TypePageProgramsPathsQuery,
  TypePageProgramsProps,
  TypePageProgramsPropsQuery,
  TypePagePromoProps,
  TypePagePromoPropsQuery,
  TypePageStudyFieldPaths,
  TypePageStudyFieldPathsQuery
}
