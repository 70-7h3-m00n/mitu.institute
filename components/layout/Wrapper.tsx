import stls from '@/styles/components/layout/Wrapper.module.sass'
import { ReactNode } from 'react'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type WrapperType = {
  children: ReactNode
  classNames?: string[]
}

const Wrapper = ({ children, classNames = [] }: WrapperType) => {
  const container = getClassNames({ classNames })
  return (
    <div className={classnames([stls.container], container)}>{children}</div>
  )
}

export default Wrapper
