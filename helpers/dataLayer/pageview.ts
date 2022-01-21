import { TypeRoute } from '@/types/index'

type TypePageviewProps = {
  url: TypeRoute
}

const pageview = ({ url }: TypePageviewProps) => {
  window.dataLayer?.push({
    event: 'pageview',
    page: url
  })
}

export default pageview
