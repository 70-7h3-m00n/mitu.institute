import stls from '@/styles/components/icons/IconWave.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconWaveProps = TypeClassNames & {
  variant?: 'alpha' | 'beta'
}

const IconWave = ({ classNames, variant }: TypeIconWaveProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 585 66' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <path
          d='M8 58L56.8045 22.3018C67.4351 14.526 82.4117 17.2483 89.626 28.2677L95.7321 37.5944C102.98 48.6653 118.052 51.3522 128.679 43.4678L156.898 22.5322C167.525 14.6479 182.597 17.3347 189.845 28.4056L195.861 37.5944C203.109 48.6653 218.181 51.3521 228.808 43.4678L256.48 22.9374C267.308 14.904 282.693 17.8649 289.766 29.3435L294.448 36.942C301.456 48.3162 316.648 51.3459 327.484 43.5303L356.958 22.2704C367.692 14.5285 382.728 17.4192 389.826 28.589L395.344 37.2734C402.474 48.4942 417.605 51.3509 428.335 43.5021L456.774 22.7005C467.606 14.7772 482.893 17.773 489.934 29.1989L494.705 36.942C501.713 48.3162 516.905 51.3459 527.741 43.5303L577 8'
          stroke={variant === 'alpha' ? colors.alpha : colors.beta}
          strokeWidth='16'
          strokeLinecap='round'
        />
      </svg>
    </div>
  )
}

export default IconWave
