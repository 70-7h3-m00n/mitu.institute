import stls from '@/styles/components/icons/IconFourSquares.module.sass'
import { TypeClassNames, TypeColor } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TItemsCount = 1 | 2 | 3 | 4

type TypeIconFourSquaresProps = TypeClassNames &
  Partial<
    Record<`color${TItemsCount}`, TypeColor> &
      Record<`fillOpacity${TItemsCount}`, string>
  > &
  Record<'id', string>

const IconFourSquares = ({
  classNames,
  color1,
  color2,
  color3,
  color4,
  fillOpacity1,
  fillOpacity2,
  fillOpacity3,
  fillOpacity4,
  id
}: TypeIconFourSquaresProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? '' : at.uz ? '' : ''
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-hidden={'true'}>
      <svg viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <g clipPath={`url(#clip0_${id})`}>
          <rect
            width='40'
            height='40'
            transform='matrix(-1 0 0 1 40 0.00012207)'
            fill={color2 || colors.gamma}
            {...(fillOpacity2 ? { fillOpacity: fillOpacity2 } : undefined)}
          />
          {Array.from({ length: 4 }, (_v, idx) => (
            <g
              key={`clip${idx + 1}_${id}`}
              clipPath={`url(#clip${idx + 1}_${id})`}>
              <rect
                width='40'
                height='40'
                transform={`matrix(-1 0 0 1 ${idx > 1 ? 20 : 40} ${
                  [0, 3].includes(idx) ? 0.00012207 : 20.0001
                })`}
                fill={
                  (idx === 1 && (color4 || colors.delta)) ||
                  (idx === 3 && (color2 || colors.gamma)) ||
                  color3 ||
                  colors.beta
                }
                {...((idx === 1 &&
                  fillOpacity4 && { fillOpacity: fillOpacity4 }) ||
                  (idx === 3 &&
                    fillOpacity2 && { fillOpacity: fillOpacity2 }) ||
                  ([0, 2].includes(idx) &&
                    fillOpacity3 && { fillOpacity: fillOpacity3 }) ||
                  undefined)}
              />
            </g>
          ))}
        </g>
        <defs>
          {Array.from({ length: 5 }, (_v, idx) => (
            <clipPath key={`clip${idx}_${id}`} id={`clip${idx}_${id}`}>
              <rect
                width={idx === 0 ? '40' : '20'}
                height={idx === 0 ? '40' : '20'}
                fill={color1 || colors.upsilon}
                {...(fillOpacity1 ? { fillOpacity: fillOpacity1 } : undefined)}
                transform={`matrix(-1 0 0 1 ${idx > 2 ? 20 : 40} ${
                  [0, 1, 4].includes(idx) ? 0 : 20
                })`}
              />
            </clipPath>
          ))}
        </defs>
      </svg>
    </div>
  )
}

export default IconFourSquares
