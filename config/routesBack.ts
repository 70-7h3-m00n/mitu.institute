import { TypeUrl, TypeRoute } from '@/types/index'
import { dev } from '@/config/index'

type TypeRoutesBack = {
  root: TypeUrl
  home: TypeRoute
}

const routesBack: TypeRoutesBack = {
  root: dev ? 'http://localhost:1337' : 'https://api-mitu-msk-ru.herokuapp.com',
  home: '/'
}

export default routesBack
