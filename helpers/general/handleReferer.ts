import { TypeReferer } from '@/types/index'

const handleReferer = () => {
  const referer: TypeReferer = sessionStorage.getItem('referrer')
  if (!referer) {
    sessionStorage.setItem('referer', JSON.stringify(document.referrer))
  }
}

export default handleReferer
