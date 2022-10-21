import stls from '@/styles/components/icons/IconMortarboard.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconMortarboardProps = TypeClassNames

const IconMortarboard = ({ classNames = [] }: TypeIconMortarboardProps) => {
  const at = useAt()

  const translations = {
    title: at.en
      ? 'Academic hat'
      : at.uz
      ? 'Kvadrat akademik qopqoq'
      : 'Квадратная академическая шапочка'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 176 132' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <path
          d='M36 72.8894V51.8182C36 51.1469 36.6483 50.6676 37.2907 50.8628L88.1117 66.3006C88.3012 66.3582 88.5035 66.3582 88.693 66.3006L139.514 50.8628C140.156 50.6676 140.804 51.1483 140.804 51.8196V61.8081V72.2672C140.804 72.7696 140.435 73.1935 139.937 73.2589C132.206 74.2753 117.194 76.374 112.626 77.489C108.019 78.6134 95.2752 85.5892 88.956 89.234C88.6176 89.4292 88.2017 89.4115 87.8774 89.1936C84.4585 86.8969 75.6667 81.8757 63.6842 77.489C52.141 73.2632 41.9139 73.2664 37.2042 73.91C36.5776 73.9956 36 73.5218 36 72.8894Z'
          fill={colors.eta}
        />
        <path
          d='M2.65928 33.8853L87.2619 0.293056C87.736 0.104832 88.264 0.104834 88.7381 0.293057L173.341 33.8853C174.22 34.2346 174.168 35.497 173.262 35.7717L88.5805 61.4563C88.202 61.5711 87.798 61.5711 87.4195 61.4563L2.73806 35.7717C1.83238 35.497 1.77966 34.2345 2.65928 33.8853Z'
          fill={colors.eta}
        />
        <path
          d='M28.8472 47.087L30.8472 47.8276C31.2396 47.9728 31.5 48.347 31.5 48.7653V91.5915C31.5 91.8589 31.6071 92.1152 31.7974 92.3031L34.2026 94.678C34.3929 94.8659 34.5 95.1222 34.5 95.3896V131C34.5 131.552 34.0523 132 33.5 132H25.0136C24.456 132 24.0062 131.544 24.0137 130.986L24.4945 95.3817C24.498 95.1189 24.6048 94.8682 24.7918 94.6836L27.2026 92.3031C27.3929 92.1152 27.5 91.8589 27.5 91.5915V48.0248C27.5 47.3283 28.1941 46.8452 28.8472 47.087Z'
          fill={colors.eta}
        />
      </svg>
    </div>
  )
}

export default IconMortarboard
