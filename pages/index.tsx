import stls from '@/styles/pages/PageHome.module.sass'
import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import truncate from 'truncate'
import { routeHome } from '@/data/routes'

const PageHome: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`МИТУ - Получите первое или 
        второе высшее образование 
        в удобном формате обучения`}
        description={truncate(`Описание`, 120)}
        canonical={routeHome}
      />
      <div className={stls.container}>Index Page</div>
    </>
  )
}

export default PageHome
