import stls from '@/styles/components/icons/IconAlarm.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconAlarmProps = TypeClassNames

const IconAlarm = ({ classNames }: TypeIconAlarmProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? 'An alarm' : at.uz ? 'Budilnik' : 'Будильник'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 142 154' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <path
          d='M105.705 116.833C122.203 94.0094 117.14 60.1249 94.5978 41.5148C72.056 22.5536 40.3666 25.8893 23.8686 48.8886C14.7211 61.705 12.1076 77.8572 15.7012 92.956L15.0478 92.4293L1 99.1008L65.8488 153L68.299 136.672L67.9723 136.321C82.5102 136.321 96.3947 129.474 105.705 116.833Z'
          fill={colors.lambda}
        />
        <path
          d='M47.0639 31.6816C38.0798 34.6663 29.9124 40.46 23.8686 48.8872C14.7212 61.7036 12.1076 77.8558 15.7012 92.9546L15.0478 92.4279L1 99.0994L28.9323 122.45C19.1315 91.55 23.7052 57.1389 47.0639 31.6816Z'
          fill={colors.delta}
        />
        <path
          d='M68.2989 136.671L67.9722 136.32C82.5101 136.144 96.3946 129.473 105.705 116.656C122.203 93.8324 117.14 59.948 94.5978 41.3379C80.3866 29.3993 62.4184 26.4147 47.0638 31.6817C23.8685 57.3145 19.1314 91.5501 29.0956 122.274L66.012 152.999L68.2989 136.671Z'
          fill='white'
        />
        <path
          d='M135.761 75.0481C137.068 74.8725 138.211 74.697 139.518 74.3458C141.968 73.9947 141.152 69.9567 138.701 70.3078C137.395 70.4834 136.251 70.6589 134.945 71.0101C131.678 59.5982 120.897 52.0488 109.789 53.8045C125.47 73.9947 118.773 98.9252 118.773 98.9252C129.881 97.3451 137.068 86.8111 135.761 75.0481Z'
          fill={colors.lambda}
        />
        <path
          d='M79.241 28.6979C78.2609 16.7593 68.6234 7.45428 57.5158 6.92758C57.3525 5.52305 57.1891 4.29408 57.1891 2.88954C57.0258 0.256033 53.1054 0.4316 53.4321 3.06511C53.5955 4.46964 53.7588 5.69861 53.7588 7.10315C42.8146 8.68325 35.1373 18.8661 36.2807 30.8047C36.444 30.6291 57.1891 17.4616 79.241 28.6979Z'
          fill={colors.lambda}
        />
        <path
          d='M68.2967 10.4389C65.0298 8.33212 61.4361 7.10315 57.5158 6.92758C57.3525 5.52305 57.1891 4.29408 57.1891 2.88954C57.0258 0.256033 53.1054 0.4316 53.4321 3.06511C53.5955 4.46964 53.7588 5.69861 53.7588 7.10315C42.8146 8.68325 35.1373 18.8661 36.2807 30.8047C36.2807 30.8047 41.1811 27.6445 48.6951 25.7133C50.3285 16.4082 59.3126 8.68325 68.2967 10.4389Z'
          fill={colors.delta}
        />
        <path
          d='M52.291 141.587L1 98.9247L15.0478 92.4287L15.7012 92.9554'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M67.9725 136.32L68.2992 136.671L65.849 152.999L59.6418 147.732L50.166 139.844'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M94.4361 59.9479L95.0495 59.5164C95.0397 59.5025 95.0295 59.4889 95.0188 59.4757L94.4361 59.9479ZM95.2528 108.229L95.8616 108.667L95.8637 108.664L95.2528 108.229ZM42.4917 113.847L42.0111 114.423L42.0146 114.426L42.4917 113.847ZM34.161 57.49L33.5503 57.0546L33.5501 57.0549L34.161 57.49ZM75.4878 45.2003L75.8256 44.5307C75.802 44.5187 75.7777 44.5081 75.753 44.4987L75.4878 45.2003ZM86.7586 51.8718L87.2293 51.2879L86.7586 51.8718ZM93.8226 60.3794C103.786 74.5432 104.566 93.8583 94.6419 107.794L95.8637 108.664C106.195 94.1575 105.341 74.1455 95.0495 59.5164L93.8226 60.3794ZM94.644 107.791C82.6661 124.441 59.4859 126.884 42.9688 113.268L42.0146 114.426C59.147 128.549 83.3374 126.077 95.8616 108.667L94.644 107.791ZM42.9723 113.271C26.4283 99.4602 22.7632 74.7903 34.772 57.925L33.5501 57.0549C21.0568 74.6007 24.9057 100.143 42.0111 114.423L42.9723 113.271ZM34.7717 57.9253C44.2001 44.6999 60.6578 40.397 75.2226 45.9018L75.753 44.4987C60.5886 38.7673 43.3969 43.2426 33.5503 57.0546L34.7717 57.9253ZM95.0188 59.4757C93.5649 57.6817 91.3881 54.6403 87.2293 51.2879L86.2879 52.4557C90.2964 55.687 92.3669 58.5857 93.8534 60.4201L95.0188 59.4757ZM87.2293 51.2879C83.9326 48.6304 81.7374 47.2669 80.0113 46.396C79.1507 45.9618 78.4156 45.6548 77.7417 45.3766C77.0641 45.0969 76.4624 44.8519 75.8256 44.5307L75.15 45.8699C75.8472 46.2216 76.5046 46.4887 77.1694 46.7631C77.838 47.0391 78.5288 47.3282 79.3357 47.7353C80.9445 48.5469 83.0507 49.8462 86.2879 52.4557L87.2293 51.2879Z'
          fill={colors.alpha}
        />
        <path
          d='M83.4915 133.511L83.7445 134.217C83.7521 134.214 83.7597 134.211 83.7672 134.208L83.4915 133.511ZM34.9775 124.206L34.4973 124.782L34.4973 124.782L34.9775 124.206ZM94.5991 41.5137L94.119 42.0899L94.1225 42.0928L94.5991 41.5137ZM112.894 102.26L112.178 102.036C112.175 102.046 112.172 102.057 112.169 102.067L112.894 102.26ZM83.2386 132.805C67.8117 138.332 49.7949 135.577 35.4576 123.63L34.4973 124.782C49.2358 137.063 67.8087 139.926 83.7445 134.217L83.2386 132.805ZM35.4576 123.63C13.195 105.077 8.22813 71.8068 24.4777 49.3269L23.262 48.4481C6.5155 71.6156 11.6762 105.764 34.4973 124.782L35.4576 123.63ZM24.4777 49.3269C40.7034 26.8799 71.8872 23.5626 94.119 42.0899L95.0793 40.9375C72.2273 21.8935 40.0324 25.2477 23.262 48.4481L24.4777 49.3269ZM94.1225 42.0928C112.013 56.8176 118.623 81.4284 112.178 102.036L113.61 102.484C120.233 81.3065 113.448 56.0562 95.0758 40.9346L94.1225 42.0928ZM112.169 102.067C111.208 105.681 107.757 114.502 101.737 120.699L102.813 121.744C109.074 115.299 112.618 106.212 113.619 102.453L112.169 102.067ZM101.737 120.699C95.6982 126.914 86.865 131.371 83.2159 132.813L83.7672 134.208C87.5231 132.724 96.5704 128.169 102.813 121.744L101.737 120.699Z'
          fill={colors.alpha}
        />
        <path
          d='M91.9876 74.6947C90.8442 75.0458 89.7007 74.5191 89.2107 73.2902C88.7207 72.0612 89.2107 70.8322 90.3541 70.3055C91.4976 69.9544 92.641 70.4811 93.131 71.7101C93.6211 72.939 93.131 74.3436 91.9876 74.6947Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M39.0618 95.2362C37.9184 95.5873 36.775 95.0606 36.2849 93.8317C35.7949 92.6027 36.2849 91.3737 37.4284 90.847C38.5718 90.4959 39.7152 91.0226 40.2053 92.2516C40.6953 93.4805 40.2053 94.8851 39.0618 95.2362Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M83.6563 61.0008C83.0029 61.8786 81.5328 62.0542 80.7161 61.3519C79.736 60.4741 79.5726 59.0695 80.226 58.1917C80.8794 57.3139 82.3495 57.1383 83.1663 57.8406C84.1463 58.7184 84.473 60.1229 83.6563 61.0008Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M49.1907 107.525C48.5374 108.403 47.0672 108.579 46.0872 107.876C45.1071 106.998 44.9437 105.594 45.5971 104.716C46.2505 103.663 47.7206 103.663 48.5374 104.365C49.6808 105.243 49.8441 106.647 49.1907 107.525Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M92.9622 90.8495C91.8187 90.674 91.002 89.445 91.1653 88.216C91.3287 86.987 92.4721 86.1092 93.6155 86.4603C94.759 86.6359 95.5757 87.8649 95.4124 89.0938C95.0857 90.3228 94.1056 91.0251 92.9622 90.8495Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M35.9544 79.2612C34.8109 79.0856 33.9942 77.8566 34.1575 76.6276C34.3209 75.3987 35.4643 74.5208 36.6077 74.872C37.7512 75.0475 38.5679 76.2765 38.4046 77.5055C38.2412 78.7345 37.0978 79.6123 35.9544 79.2612Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M87.0793 103.313C86.0993 102.611 85.9359 101.031 86.5893 100.153C87.2427 99.0995 88.5495 98.924 89.5295 99.8018C90.5096 100.504 90.673 102.084 90.0196 102.962C89.3662 104.015 88.0594 104.191 87.0793 103.313Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M39.8723 65.9171C38.8922 65.2149 38.7289 63.6348 39.3823 62.7569C40.0357 61.7035 41.3424 61.528 42.3225 62.4058C43.3026 63.1081 43.4659 64.6882 42.8126 65.566C42.1592 66.6194 40.8524 66.795 39.8723 65.9171Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M64.2141 113.321C64.3775 112.092 63.3974 110.863 62.254 110.688C61.1105 110.512 59.9671 111.39 59.9671 112.619C59.8037 113.848 60.7838 115.077 61.9273 115.253C63.0707 115.428 64.0508 114.55 64.2141 113.321Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M69.4407 53.1022C69.604 51.8732 68.6239 50.6442 67.4805 50.4687C66.3371 50.2931 65.1937 51.1709 65.1937 52.3999C65.0303 53.6289 66.0104 54.8578 67.1538 55.0334C68.2972 55.209 69.2773 54.3311 69.4407 53.1022Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M79.0803 110.162C78.5903 108.933 77.2835 108.406 76.1401 108.933C74.9966 109.46 74.6699 110.689 75.16 111.918C75.65 113.146 76.9568 113.673 78.1002 113.146C79.0803 112.62 79.5703 111.391 79.0803 110.162Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M54.2522 53.8039C53.7621 52.575 52.4554 52.0483 51.3119 52.575C50.1685 53.1017 49.8418 54.3306 50.3318 55.5596C50.8219 56.7886 52.1287 57.3153 53.2721 56.7886C54.4155 56.2619 54.7422 55.0329 54.2522 53.8039Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M66.6632 84.3527C65.8465 85.4061 64.3764 85.5817 63.3963 84.7038C62.4162 83.826 62.0895 82.2459 62.9063 81.1925C63.723 80.1391 65.1931 79.9635 66.1732 80.8414C67.1533 81.7192 67.48 83.2993 66.6632 84.3527Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M135.762 75.0466C137.069 74.871 138.212 74.6955 139.519 74.3443C141.969 73.9932 141.153 69.9552 138.702 70.3063C137.396 70.4819 136.252 70.6574 134.945 71.0086'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
        />
        <path
          d='M135.435 73.1167C132.984 60.6514 121.55 52.0487 109.789 53.9799C125.47 74.1701 118.773 99.1006 118.773 99.1006C130.534 97.345 137.885 85.582 135.435 73.1167Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M57.5178 6.92758C56.8644 6.92758 56.211 6.92758 55.5577 6.92758C54.9043 6.92758 54.2509 6.92758 53.5975 7.10315C53.4341 5.69861 53.2708 4.46964 53.2708 3.06511C53.1075 0.4316 56.8644 0.256033 57.0278 2.88954C57.3545 4.11851 57.5178 5.52305 57.5178 6.92758Z'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M57.5158 6.92773C68.6234 7.45444 78.0975 16.7595 79.241 28.6981C57.0258 17.4618 36.2807 30.6293 36.2807 30.6293C35.1373 18.6907 42.8146 8.50784 53.7588 6.92773'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M66.0117 81.0172L77.7727 64.6895'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M66.8281 81.0167L82.8361 77.5054'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
      </svg>
    </div>
  )
}

export default IconAlarm
