import { TypeUrl, TypeRoute } from '@/types/index'
import { dev } from '@/config/index'

type TypeRoutesBack = {
  root: 'http://localhost:1337' | 'https://api-mitu-msk-ru.herokuapp.com'
  home: '/'
  graphql: '/graphql'
  land: '/land'
  programs: '/programs'
}

const routesBack: TypeRoutesBack = {
  root: dev ? 'http://localhost:1337' : 'https://api-mitu-msk-ru.herokuapp.com',
  home: '/',
  graphql: '/graphql',
  land: '/land',
  programs: '/programs'
}

export default routesBack
