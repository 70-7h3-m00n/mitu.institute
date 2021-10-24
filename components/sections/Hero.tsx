import stls from '@/styles/components/sections/Hero.module.sass'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type HeroType = {
  classNames?: string[]
}

const Hero = ({ classNames = [] }: HeroType) => {
  const container = getClassNames({ classNames })
  return <div className={classnames([stls.container], container)}>Hero</div>
}

export default Hero
