import stls from '@/styles/components/icons/IconVideoOnStand.module.sass'
import { TypeClassNames, TypeStyle } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconVideoOnStandProps = TypeClassNames & TypeStyle

const IconVideoOnStand = ({ classNames, style }: TypeIconVideoOnStandProps) => {
  const at = useAt()

  const translations = {
    title: at.uz ? 'Tarkib' : 'Контент'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      style={style}
      aria-hidden={'true'}>
      <svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <path
          d='M31.7101 20.0435H30.0435V3.37679H31.7101C32.1521 3.37679 32.5761 3.2012 32.8886 2.88864C33.2012 2.57607 33.3768 2.15215 33.3768 1.71012C33.3768 1.2681 33.2012 0.844173 32.8886 0.531612C32.5761 0.219052 32.1521 0.043457 31.7101 0.043457H1.71012C1.2681 0.043457 0.844173 0.219052 0.531612 0.531612C0.219052 0.844173 0.043457 1.2681 0.043457 1.71012C0.043457 2.15215 0.219052 2.57607 0.531612 2.88864C0.844173 3.2012 1.2681 3.37679 1.71012 3.37679H3.37679V20.0435H1.71012C1.2681 20.0435 0.844173 20.2191 0.531612 20.5316C0.219052 20.8442 0.043457 21.2681 0.043457 21.7101C0.043457 22.1522 0.219052 22.5761 0.531612 22.8886C0.844173 23.2012 1.2681 23.3768 1.71012 23.3768H15.0435V25.2935L7.46012 30.2935C7.14901 30.486 6.90992 30.7756 6.77974 31.1176C6.64955 31.4595 6.63551 31.8348 6.73978 32.1855C6.84405 32.5363 7.06083 32.8429 7.35668 33.0582C7.65253 33.2735 8.011 33.3855 8.37679 33.3768C8.70446 33.3805 9.02505 33.2814 9.29346 33.0935L15.0435 29.2935V31.7101C15.0435 32.1522 15.2191 32.5761 15.5316 32.8886C15.8442 33.2012 16.2681 33.3768 16.7101 33.3768C17.1521 33.3768 17.5761 33.2012 17.8886 32.8886C18.2012 32.5761 18.3768 32.1522 18.3768 31.7101V29.2935L24.1268 33.0935C24.3952 33.2814 24.7158 33.3805 25.0435 33.3768C25.3995 33.374 25.7454 33.2573 26.0303 33.0437C26.3152 32.8301 26.5242 32.5309 26.6267 32.1899C26.7292 31.8489 26.7198 31.484 26.5998 31.1487C26.4799 30.8134 26.2557 30.5254 25.9601 30.3268L18.3768 25.3268V23.3768H31.7101C32.1521 23.3768 32.5761 23.2012 32.8886 22.8886C33.2012 22.5761 33.3768 22.1522 33.3768 21.7101C33.3768 21.2681 33.2012 20.8442 32.8886 20.5316C32.5761 20.2191 32.1521 20.0435 31.7101 20.0435ZM26.7101 20.0435H6.71012V3.37679H26.7101V20.0435ZM12.7268 17.1435C13.171 17.4059 13.6775 17.5444 14.1935 17.5444C14.7094 17.5444 15.2159 17.4059 15.6601 17.1435L20.6601 14.2435C21.0876 13.9811 21.4406 13.6135 21.6855 13.1758C21.9304 12.7382 22.059 12.245 22.059 11.7435C22.059 11.2419 21.9304 10.7487 21.6855 10.3111C21.4406 9.87339 21.0876 9.50581 20.6601 9.24346L15.6601 6.34346C15.2159 6.08101 14.7094 5.94256 14.1935 5.94256C13.6775 5.94256 13.171 6.08101 12.7268 6.34346C12.2792 6.59579 11.9081 6.96444 11.6528 7.4104C11.3976 7.85636 11.2677 8.36303 11.2768 8.87679V14.6768C11.2796 15.1793 11.4152 15.6721 11.6698 16.1053C11.9245 16.5385 12.2891 16.8966 12.7268 17.1435ZM14.6101 9.51012L18.3768 11.7101L14.5768 13.9101L14.6101 9.51012Z'
          fill={colors.alpha}
        />
      </svg>
    </div>
  )
}

export default IconVideoOnStand
