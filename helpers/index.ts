// data
import handleGetStaticPaths from '@/helpers/data/handleGetStaticPaths'
import handleGetStaticProps from '@/helpers/data/handleGetStaticProps'

// dataLayer
import pageview from '@/helpers/dataLayer/pageview'
import lead from '@/helpers/dataLayer/lead'

// general
import buildUserLocation from '@/helpers/general/buildUserLocation'
import getCasedRuMonthString from '@/helpers/general/getCasedRuMonthString'
import getCasedRuYearString from '@/helpers/general/getCasedRuYearString'
import getCasesRuCourseString from '@/helpers/general/getCasesRuCourseString'
import getCasesRuProfessionString from '@/helpers/general/getCasesRuProfessionString'
import getClassNames from '@/helpers/general/getClassNames'
import handleReferer from '@/helpers/general/handleReferer'
import handleUtms from '@/helpers/general/handleUtms'
import hitLeadRoute from '@/helpers/general/hitLeadRoute'
import onSubmitForm from '@/helpers/general/onSubmitForm'

// getStaticProps
import getStaticPropsPagePrograms from '@/helpers/getStaticProps/getStaticPropsPagePrograms'
import getStaticPropsPagePromo from '@/helpers/getStaticProps/getStaticPropsPagePromo'

// lead
import buildLeadData from '@/helpers/lead/buildLeadData'
import createLeadEmailBody from '@/helpers/lead/createLeadEmailBody'
import buildLeadEmailTbodyTrs from '@/helpers/lead/buildLeadEmailTbodyTrs'
import createLeadEmailTr from '@/helpers/lead/createLeadEmailTr'

export {
  // data
  handleGetStaticPaths,
  handleGetStaticProps,
  // dataLayer
  pageview,
  lead,
  // general
  buildUserLocation,
  getCasedRuMonthString,
  getCasedRuYearString,
  getCasesRuCourseString,
  getCasesRuProfessionString,
  getClassNames,
  handleReferer,
  handleUtms,
  hitLeadRoute,
  onSubmitForm,
  // getStaticProps
  getStaticPropsPagePrograms,
  getStaticPropsPagePromo,
  // lead
  buildLeadData,
  createLeadEmailBody,
  buildLeadEmailTbodyTrs,
  createLeadEmailTr
}
