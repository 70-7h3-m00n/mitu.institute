import stls from '@/styles/components/btns/BtnImgPopupTrigger.module.sass'
import {
  TypeAriaLabel,
  TypeChildren,
  TypeClassNames,
  TypeOnClick
} from '@/types/index'
import { ReactNode, useEffect, useState } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { IconInfoSubtract, IconInfoSubtractReverse } from '../icons'

type TypeBtnImgPopupTriggerProps = TypeClassNames &
  TypeChildren &
  TypeAriaLabel &
  TypeOnClick & {
    label: ReactNode
  }

const BtnImgPopupTrigger = ({
  classNames,
  children,
  ariaLabel,
  onClick,
  label
}: TypeBtnImgPopupTriggerProps) => {
  const [clicked, setClicked] = useState(false)

  const handleMouseEnter = () => {
    setClicked(true);
    console.log("Mouse entered the element");
  }

  const handleMouseLeave = () => {
    setClicked(false);
    console.log("Mouse left the element");
  }

  const at = useAt()
  const translations = {
    title: at.en
      ? 'Your future diplomas'
      : at.uz
      ? 'Kelajakdagi diplomlaringiz'
      : 'Ваши будущие дипломы',
    bachelorDiploma: at.en
      ? 'Bachelor diploma'
      : at.uz
      ? 'Bakalavr darajasi'
      : 'Диплом бакалавра',
    masterDiploma: at.en
      ? 'Master diploma'
      : at.uz
      ? 'Magistr darajasi'
      : 'Диплом магистра',
    professionalRetrainingDiploma: at.en
      ? 'Professional Retraining Diploma'
      : at.uz
      ? 'Kasbiy qayta tayyorlash diplomi'
      : 'Диплом о профессиональной переподготовке',
    instituteDiploma: at.en
      ? 'Institute Diploma'
      : at.uz
      ? 'Institut diplomi'
      : 'Диплом института',
    supplementDiploma: at.en
      ? 'Supplement'
      : at.uz
      ? "Jum Ta'minoti"
      : 'Диплом Supplement-'
  }
  return (
    <button
      className={cn(stls.container, getClassNames({ classNames })) || undefined}
      aria-label={ariaLabel}
      onClick={onClick}>
      <span className={stls.img}>{children}</span>
      <span style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
      }} className={stls.label}>
        <span style={{
          marginTop: 0
        }} className={stls.label}>{label}</span>
        {
        label === translations.professionalRetrainingDiploma &&
        <> 
        <div 
        id='tooltip-popup__info' 
        className={stls['tooltip-container']}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
            marginLeft: '1rem',
            width: '21.5px',
            minWidth: '21.5px',
            height: '21.5px',
            minHeight: '21.5px'
          }}>
          {
            !clicked ? 
            <IconInfoSubtract /> :
            <IconInfoSubtractReverse />
          }
        </div>
        <span className={stls['tooltip-text']}>Для присвоения квалификации могут быть установлены дополнительные требования</span>
        </>
        } 
      </span>
    </button>
  )
}

export default BtnImgPopupTrigger
