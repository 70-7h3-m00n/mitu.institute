import { dev } from '@/config/index'

type TypeRoutesBack = {
  root: string
  home: string
}

const routesBack: TypeRoutesBack = {
  root: dev
    ? 'https://localhost:1337'
    : 'https://api-mitu-msk-ru.herokuapp.com',
  home: '/'
}

export default routesBack
