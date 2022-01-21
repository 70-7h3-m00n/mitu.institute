import { TypeRoute } from '@/types/index'

type TypePageViewProps = {
  url: TypeRoute
}

const pageView = ({ url }: TypePageViewProps) => {
  window.dataLayer?.push({
    event: 'pageview',
    page: url
  })
}

export default pageView
