import stls from '@/styles/components/icons/IconEye.module.sass'
import { ReactNode } from 'react'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'

type IconEyeType = {
  classNames?: string[]
}

const IconEye = ({ classNames = [] }: IconEyeType) => {
  const container = getClassNames({ classNames })
  return (
    <div className={classnames([stls.container], container)}>
      <svg viewBox='0 0 18 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Глаз</title>
        <path
          d='M11.25 6C11.25 7.2405 10.2405 8.25 9 8.25C7.7595 8.25 6.75 7.2405 6.75 6C6.75 4.7595 7.7595 3.75 9 3.75C10.2405 3.75 11.25 4.7595 11.25 6ZM18 5.66325C18 5.66325 14.811 12 9.01125 12C3.62625 12 0 5.66325 0 5.66325C0 5.66325 3.3345 0 9.01125 0C14.7818 0 18 5.66325 18 5.66325ZM12.75 6C12.75 3.93225 11.0677 2.25 9 2.25C6.93225 2.25 5.25 3.93225 5.25 6C5.25 8.06775 6.93225 9.75 9 9.75C11.0677 9.75 12.75 8.06775 12.75 6Z'
          fill='#2A8ED9'
        />
      </svg>
    </div>
  )
}

export default IconEye
