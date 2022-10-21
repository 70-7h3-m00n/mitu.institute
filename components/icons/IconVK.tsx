import stls from '@/styles/components/icons/IconVK.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconVKProps = TypeClassNames

const IconVK = ({ classNames }: TypeIconVKProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? 'VK' : at.uz ? 'VK' : 'VK'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 26 16' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <path
          d='M21.6554 9.90184C22.4515 10.703 23.2918 11.4568 24.0058 12.3388C24.3212 12.7308 24.6199 13.1352 24.8483 13.5901C25.172 14.2367 24.8788 14.9482 24.3163 14.9868L20.82 14.9852C19.9182 15.0623 19.1988 14.6881 18.5939 14.0526C18.1098 13.5443 17.6615 13.0034 17.1961 12.478C17.0052 12.2632 16.8055 12.0612 16.5669 11.9015C16.0896 11.5821 15.6753 11.6799 15.4025 12.193C15.1247 12.7149 15.0617 13.2928 15.0344 13.8745C14.997 14.7232 14.7481 14.9463 13.9211 14.9851C12.1537 15.071 10.4763 14.7954 8.91805 13.8764C7.54426 13.0661 6.47894 11.9223 5.5517 10.6274C3.74634 8.10599 2.36379 5.33534 1.12121 2.48705C0.841513 1.84533 1.04606 1.50086 1.73296 1.48867C2.87358 1.46583 4.01405 1.46745 5.15601 1.48704C5.61959 1.49403 5.92649 1.76811 6.10549 2.21955C6.7226 3.78366 7.47771 5.27177 8.42553 6.65113C8.67794 7.01836 8.93532 7.38559 9.30184 7.64407C9.7073 7.93026 10.016 7.83541 10.2068 7.36982C10.3278 7.07461 10.3808 6.75663 10.4081 6.44045C10.4984 5.35265 10.5104 4.26672 10.3519 3.18275C10.2546 2.50624 9.88488 2.06829 9.23 1.94027C8.89582 1.875 8.94557 1.74682 9.10738 1.5502C9.38842 1.21109 9.65274 1 10.1796 1H14.1311C14.7532 1.12656 14.8913 1.41462 14.9765 2.05984L14.9799 6.58423C14.9731 6.83401 15.1009 7.57522 15.5374 7.74055C15.8867 7.85825 16.117 7.57018 16.3265 7.34186C17.2726 6.30682 17.9479 5.08361 18.5511 3.81699C18.8188 3.26004 19.049 2.68164 19.2721 2.10373C19.4373 1.67488 19.6967 1.46388 20.1653 1.47322L23.9684 1.47672C24.0811 1.47672 24.1952 1.47843 24.3044 1.49769C24.9453 1.61026 25.1209 1.89443 24.923 2.53948C24.6111 3.55152 24.0043 4.3949 23.411 5.24219C22.7768 6.14677 22.0985 7.02039 21.4696 7.93034C20.8917 8.76129 20.9376 9.18014 21.6554 9.90184V9.90184Z'
          stroke={colors.upsilon}
          strokeWidth='1.5'
        />
      </svg>
    </div>
  )
}

export default IconVK
