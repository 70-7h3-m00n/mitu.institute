type TypeDev = boolean

const dev: TypeDev = process.env.NODE_ENV === 'development'

export default dev
