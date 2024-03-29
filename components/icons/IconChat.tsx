import stls from '@/styles/components/icons/IconChat.module.sass'
import { TypeClassNames, TypeStyle } from '@/types/index'
import cn from 'classnames'
import { colors } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeIconChatProps = TypeClassNames & TypeStyle

const IconChat = ({ classNames, style }: TypeIconChatProps) => {
  const at = useAt()

  const translations = {
    title: at.en ? 'Chat icon' : at.uz ? 'Aloqa' : 'Общение'
  }

  return (
    <div
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      style={style}
      aria-hidden={'true'}>
      <svg viewBox='0 0 34 34' fill='none' xmlns='http://www.w3.org/2000/svg'>
        <title>{translations.title}</title>
        <path
          d='M28.4007 0.0668945H5.06738C3.7413 0.0668945 2.46953 0.593679 1.53185 1.53136C0.594167 2.46904 0.0673828 3.74081 0.0673828 5.06689V21.7336C0.0673828 23.0596 0.594167 24.3314 1.53185 25.2691C2.46953 26.2068 3.7413 26.7336 5.06738 26.7336H24.3841L30.5507 32.9169C30.7065 33.0714 30.8911 33.1936 31.0942 33.2765C31.2973 33.3595 31.5147 33.4015 31.7341 33.4002C31.9527 33.4059 32.1696 33.3602 32.3674 33.2669C32.6718 33.1419 32.9323 32.9295 33.1162 32.6567C33.3001 32.3838 33.3991 32.0626 33.4007 31.7336V5.06689C33.4007 3.74081 32.8739 2.46904 31.9363 1.53136C30.9986 0.593679 29.7268 0.0668945 28.4007 0.0668945ZM30.0674 27.7169L26.2507 23.8836C26.095 23.7291 25.9103 23.6069 25.7072 23.5239C25.5042 23.441 25.2867 23.399 25.0674 23.4002H5.06738C4.62536 23.4002 4.20143 23.2246 3.88887 22.9121C3.57631 22.5995 3.40072 22.1756 3.40072 21.7336V5.06689C3.40072 4.62487 3.57631 4.20094 3.88887 3.88838C4.20143 3.57582 4.62536 3.40023 5.06738 3.40023H28.4007C28.8427 3.40023 29.2667 3.57582 29.5792 3.88838C29.8918 4.20094 30.0674 4.62487 30.0674 5.06689V27.7169Z'
          fill={colors.alpha}
        />
      </svg>
    </div>
  )
}

export default IconChat
