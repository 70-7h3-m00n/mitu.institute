import stls from '@/styles/components/icons/IconPaperPage.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'

type TypeIconPaperPageProps = TypeClassNames

const IconPaperPage = ({ classNames }: TypeIconPaperPageProps) => {
  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 280 311' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>Документ</title>
        <path
          d='M139.385 0L1.53836 95.8649C0.307587 166.722 94.1537 314.527 137.846 309.076L275.692 213.211C251.077 214.494 160.308 101.957 139.385 0Z'
          fill='white'
        />
        <path
          d='M92 32.8741L133.5 5.21802L165.229 74.0631C185.536 117.667 212.921 157.424 235.998 183.073L245.5 193.592'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M94.1538 31.4207L1.53836 95.865C0.307587 166.722 94.1537 314.527 137.846 309.076'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M153.395 101.605C153.928 102.64 153.718 104.067 152.758 104.725C122.635 125.35 92.7917 145.98 62.9542 166.899C61.8897 167.645 60.4097 167.258 59.8472 166.086C59.4018 165.158 59.6933 164.044 60.5363 163.453C90.4084 142.505 120.28 121.845 150.153 100.902C151.28 100.112 152.764 100.38 153.395 101.605Z'
          fill={colors.gamma}
        />
        <path
          d='M158.267 110.753C158.808 111.739 158.624 113.061 157.699 113.701C127.877 134.326 98.0495 155.236 67.9451 175.863C66.8408 176.62 65.2755 176.23 64.5894 175.081C64.0389 174.159 64.3407 173.005 65.2243 172.394C95.1532 151.713 125.358 131.027 155.289 110.049C156.305 109.338 157.67 109.666 158.267 110.753Z'
          fill={colors.gamma}
        />
        <path
          d='M163.49 119.72C164.034 120.712 163.848 122.042 162.918 122.686C133.048 143.344 103.172 164.288 73.0177 184.948C71.9369 185.689 70.4276 185.383 69.8123 184.227C69.2551 183.179 69.6382 181.935 70.614 181.261C100.485 160.602 130.36 139.658 160.514 118.998C161.536 118.298 162.895 118.634 163.49 119.72Z'
          fill={colors.gamma}
        />
        <path
          d='M169.129 128.53C169.816 129.455 169.46 130.656 168.517 131.318C138.523 152.35 108.528 173.088 78.5341 193.821C77.6386 194.44 76.3769 194.135 75.7942 193.215C75.1356 192.176 75.3778 190.775 76.3898 190.075C106.19 169.464 135.99 148.57 165.79 127.959C166.845 127.229 168.363 127.5 169.129 128.53Z'
          fill={colors.gamma}
        />
        <path
          d='M174.968 136.955C175.644 137.915 175.514 139.376 174.548 140.043C144.677 160.684 114.533 181.33 84.6606 202.266C83.6116 203.001 82.0942 202.735 81.3302 201.707C80.644 200.783 81.0032 199.584 81.9495 198.93C111.89 178.224 141.835 157.231 172.06 136.523C173.037 135.854 174.287 135.987 174.968 136.955Z'
          fill={colors.gamma}
        />
        <path
          d='M181.128 145.04C181.788 146.081 181.551 147.482 180.542 148.189C150.708 169.107 120.874 189.735 91.0397 210.357C90.0348 211.052 88.648 210.82 87.8719 209.877C87.0747 208.908 87.3083 207.496 88.3405 206.782C118.256 186.091 148.178 165.115 178.38 144.425C179.28 143.809 180.544 144.118 181.128 145.04Z'
          fill={colors.gamma}
        />
        <path
          d='M163.012 169.985C163.831 170.977 163.657 172.517 162.601 173.25C140.701 188.458 119.062 203.393 97.1583 218.605C96.3132 219.192 95.1789 219.078 94.5239 218.285C93.7048 217.293 93.8786 215.753 94.9354 215.019C116.835 199.812 138.474 184.877 160.378 169.665C161.223 169.078 162.357 169.191 163.012 169.985Z'
          fill={colors.gamma}
        />
        <path
          d='M201.613 167.945C202.589 168.991 202.314 170.666 201.137 171.48C171.364 192.075 141.591 212.95 111.817 233.541C110.857 234.205 109.601 234.156 108.757 233.349C107.795 232.429 107.973 230.865 109.069 230.108C139.011 209.411 168.953 188.707 198.896 167.71C199.733 167.123 200.915 167.197 201.613 167.945Z'
          fill={colors.gamma}
        />
        <path
          d='M208.9 175.109C209.974 176.056 209.879 177.809 208.701 178.624C178.857 199.268 149.006 220.193 118.875 240.831C118.078 241.376 116.947 241.294 116.238 240.639C115.236 239.713 115.477 238.158 116.599 237.382C146.535 216.675 176.471 195.685 206.406 174.984C207.17 174.456 208.203 174.495 208.9 175.109Z'
          fill={colors.gamma}
        />
        <path
          d='M167.605 216.115C168.537 216.992 168.584 218.576 167.533 219.306C153.963 228.732 140.393 238.159 126.823 247.586C126.058 248.117 125.023 248.08 124.324 247.463C123.251 246.517 123.344 244.766 124.519 243.949C138.042 234.556 151.564 225.163 165.086 215.769C165.848 215.239 166.928 215.479 167.605 216.115Z'
          fill={colors.gamma}
        />
        <path
          d='M200.613 228.922C202.459 223.792 203.998 218.341 204.613 212.891C205.229 207.44 204.921 201.669 203.075 196.539C203.075 203.593 204.613 210.326 206.152 217.059C206.459 218.341 206.767 219.303 207.998 219.944C208.921 218.982 209.229 218.021 209.229 216.738C209.536 214.814 209.844 212.57 209.536 210.646C208.921 213.211 208.921 216.738 209.229 216.738C210.152 216.097 210.767 215.135 211.075 214.173C211.69 214.814 212.921 214.494 213.536 213.852C214.152 213.211 214.767 212.249 215.075 211.288C215.383 211.608 215.998 210.967 216.306 210.326C216.921 210.967 217.229 210.646 217.536 210.646C217.844 210.326 217.844 210.005 217.844 209.684C217.844 205.196 215.998 200.707 213.844 196.539C213.229 195.577 212.613 194.615 211.998 193.974C211.383 194.936 211.383 196.218 211.383 197.18C211.998 202.631 213.229 208.081 215.075 213.532C215.383 214.494 215.69 215.456 216.306 216.097C216.613 216.417 216.921 217.059 217.536 217.059C218.459 217.059 219.075 216.417 219.383 215.456C221.229 211.608 220.306 205.837 222.459 204.555'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M120 280.862C124 277.976 131.385 282.144 136.308 289.839C141.231 297.534 142.154 306.191 138.154 309.076L276 213.211C280 210.326 279.077 201.99 274.154 193.974C269.231 186.279 261.846 182.111 257.846 184.997L120 280.862Z'
          fill={colors.delta}
        />
        <path
          d='M120 280.862L189.846 232.448L258.5 184.721'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M257.54 185.318C261.54 182.432 268.925 186.6 273.848 194.295C278.771 202.31 279.694 210.646 275.694 213.532L188.617 274.129L138.5 308.913'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M138.463 308.756C138.155 309.076 138.155 309.076 137.848 309.397'
          stroke={colors.alpha}
          strokeWidth='1.5'
          strokeMiterlimit='10'
          strokeLinecap='round'
          strokeLinejoin='round'
        />
        <path
          d='M120 280.862C124 277.976 131.385 282.144 136.308 289.839C140.923 297.214 141.846 305.229 138.769 308.435'
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

export default IconPaperPage