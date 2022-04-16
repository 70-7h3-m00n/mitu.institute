import { mituinstitute } from '@/config/index'

const revalidate = {
  // default: 60 * 60 * 24 * 7,
  // default: mituinstitute ? 60 : false,
  default: false,
  day: 60 * 60 * 24,
  hour: 60 * 60,
  minute: 60,
  secound: 1
}

export default revalidate
