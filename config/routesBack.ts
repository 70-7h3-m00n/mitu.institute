import { TypeUrl, TypeRoute } from '@/types/index'
import { dev, env, nextexport } from '@/config/index'

type TypeRoutesBack = {
  root: 'http://localhost:1337' | typeof env.backRouteRoot
  home: '/'
  graphql: '/graphql'
  land: '/land'
  programs: '/programs'
}

const routesBack: TypeRoutesBack = {
  root: dev || nextexport ? 'http://localhost:1337' : env.backRouteRoot,
  home: '/',
  graphql: '/graphql',
  land: '/land',
  programs: '/programs'
}

export default routesBack
