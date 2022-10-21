import stls from '@/styles/components/icons/IconElderScroll.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconElderScrollProps = TypeClassNames

const IconElderScroll = ({ classNames }: TypeIconElderScrollProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? 'Whistle' : at.uz ? "O'tish" : 'Свиток'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 128 60' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <g clipPath='url(#clip0_857_6630)'>
          <path
            d='M58.2433 43.7004L53.6016 55.3632L57.8213 54.5201L61.7598 56.9089L61.4785 44.403L58.2433 43.7004Z'
            fill='white'
          />
          <path
            d='M62.7338 43.9814L62.5931 45.8081L59.6393 45.246L60.7645 55.0821L57.5294 54.52L54.7162 56.9088L49.2305 52.2718L54.5755 40.7495L62.7338 43.9814Z'
            fill={colors.delta}
          />
          <path
            d='M125.609 20.9368L14.066 0.702637C14.066 0.702637 3.93854 3.51294 1.12536 23.0446C1.12536 23.0446 8.14795e-05 34.4263 3.37591 36.1125L119.139 56.7682C120.264 37.2366 125.609 20.9368 125.609 20.9368Z'
            fill={colors.delta}
          />
          <path
            d='M125.609 20.9368L14.066 0.702637C14.066 0.702637 3.93854 3.51294 1.12536 23.0446C1.12536 23.0446 8.14757e-05 34.4263 3.37591 36.1125L119.139 56.7682C120.264 37.2366 125.609 20.9368 125.609 20.9368Z'
            stroke={colors.beta}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M124.061 32.3187L8.29799 11.5224C5.62546 11.1009 3.79689 15.8784 2.67162 22.7636C1.40568 29.6489 1.26502 35.8316 3.93755 36.3936L119.7 57.0494C122.373 57.4709 125.608 52.4124 126.874 45.5271C127.999 38.6419 126.874 32.7402 124.061 32.3187Z'
            fill='white'
          />
          <path
            d='M6.46937 29.9297L3.9375 36.2529L119.7 56.9086C121.669 57.1896 123.779 54.8009 125.326 51.1475L6.46937 29.9297Z'
            fill={colors.delta}
          />
          <path
            d='M8.29794 11.5222C7.45398 11.3817 6.46937 11.8032 5.62541 12.7868C8.29794 13.3489 9.56387 19.2505 8.29794 25.9953C7.45398 30.6323 5.76607 34.4262 3.9375 36.2529C6.61003 36.6744 9.84519 31.6159 11.1111 24.7306C12.3771 17.9859 11.1111 12.0843 8.29794 11.5222Z'
            fill={colors.delta}
          />
          <path
            d='M63.8594 47.0727C66.532 47.4943 69.7671 42.4357 71.0331 35.5505C72.299 28.6652 71.0331 22.7636 68.3605 22.3421L60.0616 20.7964C62.7342 21.2179 64.0001 27.2601 62.7342 34.0048C61.4682 40.8901 58.2331 45.9486 55.5605 45.5271L63.8594 47.0727Z'
            fill='white'
          />
          <path
            d='M69.2045 22.7634C70.1891 25.1522 70.4704 29.2271 69.6265 33.7236C68.3605 40.6089 65.1254 45.6674 62.4529 45.2459L58.3737 44.5433C57.3891 45.5269 56.5452 45.9484 55.5605 45.8079L63.8594 47.3536C66.532 47.7751 69.7671 42.7166 71.0331 35.8313C72.1583 29.5082 71.3144 24.3091 69.2045 22.7634Z'
            fill={colors.delta}
          />
          <path
            d='M9.14205 26.1359C9.42337 24.4497 9.56403 22.904 9.56403 21.4989L3.37502 20.3748C-0.704105 30.7729 3.93765 36.253 3.93765 36.253C6.61018 36.815 7.87611 33.0211 9.14205 26.1359Z'
            fill={colors.delta}
          />
          <path
            d='M11.1123 24.8712C11.3937 23.185 11.5343 21.6394 11.5343 20.2342L7.03322 19.3911C6.04861 20.6558 4.64202 23.4661 3.79806 27.541C3.09476 31.7565 3.37608 34.8478 3.93872 36.3935C6.61125 36.815 9.84641 31.6159 11.1123 24.8712Z'
            fill='white'
          />
          <path
            d='M11.5329 20.0937L7.03177 19.3911C6.75045 19.8127 6.32847 20.2342 6.04715 20.9368C8.15704 21.3583 9.70429 23.3255 9.28231 25.5738C9.28231 25.8548 9.14166 25.9953 9.14166 26.2764C8.2977 30.7728 6.75045 34.4262 4.92188 36.3935C7.45374 35.6909 9.98561 30.9134 11.1109 25.0117C11.3922 23.185 11.5329 21.6394 11.5329 20.0937Z'
            fill={colors.delta}
          />
          <path
            d='M11.1123 24.8712C11.3937 23.185 11.5343 21.6394 11.5343 20.2342L7.03322 19.3911C6.04861 20.6558 4.64202 23.4661 3.79806 27.541C3.09476 31.7565 3.37608 34.8478 3.93872 36.3935C6.61125 36.815 9.84641 31.6159 11.1123 24.8712Z'
            stroke={colors.beta}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8.29845 11.5222C10.971 11.9438 12.2369 17.9859 10.971 24.7306C9.70504 31.6159 6.46987 36.6744 3.79735 36.2529C1.12482 35.8313 -0.141114 29.7892 1.12482 23.0445'
            stroke={colors.beta}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M8.29883 11.5222L59.9208 20.7962C62.5933 21.2178 63.8593 27.2599 62.5933 34.0047C61.3274 40.8899 58.2323 46.089 55.5598 45.6675M68.2192 22.4825C70.8917 22.904 72.1576 28.9462 70.8917 35.6909C70.4697 37.8455 68.9225 44.9649 65.406 47.0726'
            stroke={colors.beta}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M125.186 32.3185L57.6699 20.3748'
            stroke={colors.beta}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M4.21875 36.6746L119.419 57.0493C122.091 57.4708 125.326 52.4123 126.592 45.527C127.155 42.1547 127.155 38.9228 126.733 36.5341C126.452 35.1289 125.748 32.3186 125.186 32.3186'
            stroke={colors.beta}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M58.857 46.3701L54.8555 57.5366L58.4932 56.7294L61.8884 59.0165L61.6459 47.0428L58.857 46.3701Z'
            stroke={colors.beta}
            strokeWidth='1.5'
            strokeMiterlimit='10'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_857_6630'>
            <rect width='128' height='60' fill='white' />
          </clipPath>
        </defs>
      </svg>
    </div>
  )
}

export default IconElderScroll
