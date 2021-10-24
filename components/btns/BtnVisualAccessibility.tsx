import stls from '@/styles/components/btns/BtnVisualAccessibility.module.sass'
import { ReactNode } from 'react'
import classnames from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconEye } from '@/components/icons'

type BtnVisualAccessibilityType = {
  classNames?: string[]
}

const BtnVisualAccessibility = ({
  classNames = []
}: BtnVisualAccessibilityType) => {
  const container = getClassNames({ classNames })
  return (
    <button className={classnames([stls.container], container)}>
      <IconEye classNames={[stls.icon]} />
      <span className={stls.text}>Версия для слабовидящих</span>
    </button>
  )
}

export default BtnVisualAccessibility
