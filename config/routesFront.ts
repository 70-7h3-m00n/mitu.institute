import { dev } from '@/config/index'

type TypeRoutesFront = {
  root: string
  home: string
}

const routesFront: TypeRoutesFront = {
  root: dev ? 'http://localhost:3000' : 'https://mitu.msk.ru',
  home: '/'
}

export default routesFront
