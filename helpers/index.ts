// dataLayer
import pageview from '@/helpers/dataLayer/pageview'
import lead from '@/helpers/dataLayer/lead'

// general
import buildUserLocation from '@/helpers/general/buildUserLocation'
import addSpacesToNumber from '@/helpers/general/addSpacesToNumber'
import getCasedRuMonthString from '@/helpers/general/getCasedRuMonthString'
import getCasedRuYearString from '@/helpers/general/getCasedRuYearString'
import getCasesRuCourseString from '@/helpers/general/getCasesRuCourseString'
import getCasesRuProfessionString from '@/helpers/general/getCasesRuProfessionString'
import getClassNames from '@/helpers/general/getClassNames'
import getCorrectLocale from '@/helpers/general/getCorrectLocale'
import getImageHeight from '@/helpers/general/getImageHeight'
import handleLocale from '@/helpers/general/handleLocale'
import handleReferer from '@/helpers/general/handleReferer'
import handleUtms from '@/helpers/general/handleUtms'
import handleCookiesExpiration from '@/helpers/general/handleCookiesExpiration'
import hitLeadRoute from '@/helpers/general/hitLeadRoute'
import hitWebhookRoute from '@/helpers/general/hitWebhookRoute'
import onSubmitForm from '@/helpers/general/onSubmitForm'
import sortBasedOnNumericOrder from '@/helpers/general/sortBasedOnNumericOrder'
import generateYmlCatalog from '@/helpers/general/generateYmlCatalog'

// lead
import buildLeadData from '@/helpers/lead/buildLeadData'
import createLeadEmailBody from '@/helpers/lead/createLeadEmailBody'
import buildLeadEmailTbodyTrs from '@/helpers/lead/buildLeadEmailTbodyTrs'
import createLeadEmailTr from '@/helpers/lead/createLeadEmailTr'

export {
  // dataLayer
  pageview,
  lead,
  // general
  buildUserLocation,
  addSpacesToNumber,
  getCasedRuMonthString,
  getCasedRuYearString,
  getCasesRuCourseString,
  getCasesRuProfessionString,
  getClassNames,
  getCorrectLocale,
  getImageHeight,
  handleLocale,
  handleReferer,
  handleUtms,
  handleCookiesExpiration,
  hitLeadRoute,
  hitWebhookRoute,
  onSubmitForm,
  sortBasedOnNumericOrder,
  generateYmlCatalog,
  // lead
  buildLeadData,
  createLeadEmailBody,
  buildLeadEmailTbodyTrs,
  createLeadEmailTr
}
