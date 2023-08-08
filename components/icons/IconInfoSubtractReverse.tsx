import stls from '@/styles/components/icons/IconInfoSubtract.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconInfoSubtractReverseProps = TypeClassNames & {
    color?: TypeColor
}

const IconInfoSubtractReverse = ({ classNames, color }: TypeIconInfoSubtractReverseProps) => {
  const at = useAt()

  const translations = {
    title: at.en
      ? 'Signature of information'
      : 'Значок информации'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}> 
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M0.25 11C0.25 5.06294 5.06294 0.25 11 0.25C16.9371 0.25 21.75 5.06294 21.75 11C21.75 16.9371 16.9371 21.75 11 21.75C5.06294 21.75 0.25 16.9371 0.25 11ZM11.5584 13.0034L12.3247 6.48973C12.418 5.69675 11.7984 5 10.9999 5C10.2015 5 9.58191 5.69675 9.67521 6.48973L10.4415 13.0034C10.4748 13.2866 10.7148 13.5 10.9999 13.5C11.2851 13.5 11.5251 13.2866 11.5584 13.0034ZM11.9999 16C11.9999 16.5523 11.5522 17 10.9999 17C10.4477 17 9.99994 16.5523 9.99994 16C9.99994 15.4477 10.4477 15 10.9999 15C11.5522 15 11.9999 15.4477 11.9999 16Z" fill={color || "#2969E3"}/>
      </svg>
    </div>
  )
}

export default IconInfoSubtractReverse
