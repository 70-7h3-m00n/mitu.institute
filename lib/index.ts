// getStaticPaths
import getStaticPathsPageProgram from '@/lib/getStaticPaths/getStaticPathsPageProgram'
import getStaticPathsPagePrograms from '@/lib/getStaticPaths/getStaticPathsPagePrograms'
import getStaticPathsPageStudyField from '@/lib/getStaticPaths/getStaticPathsPageStudyField'

// getStaticProps
import getStaticPropsPageHome from '@/lib/getStaticProps/getStaticPropsPageHome'
import getStaticPropsPageProgram from '@/lib/getStaticProps/getStaticPropsPageProgram'
import getStaticPropsPagePrograms from '@/lib/getStaticProps/getStaticPropsPagePrograms'
import getStaticPropsPagePromo from '@/lib/getStaticProps/getStaticPropsPagePromo'

// handlers
import handleGetStaticPaths from '@/lib/handlers/handleGetStaticPaths'
import handleGetStaticProps from '@/lib/handlers/handleGetStaticProps'

export {
  // getStaticPaths
  getStaticPathsPageProgram,
  getStaticPathsPagePrograms,
  getStaticPathsPageStudyField,
  // getStaticProps
  getStaticPropsPageHome,
  getStaticPropsPageProgram,
  getStaticPropsPagePrograms,
  getStaticPropsPagePromo,
  // handlers
  handleGetStaticPaths,
  handleGetStaticProps
}
