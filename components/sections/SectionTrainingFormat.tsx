import stls from '@/styles/components/sections/SectionTrainingFormat.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import { useState } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ImgPersonStudying } from '@/components/imgs'

type TypeSectionTrainingFormatProps = TypeClassNames

const SectionTrainingFormat = ({
  classNames = []
}: TypeSectionTrainingFormatProps) => {
  const onlineFormatPros = [
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются',
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются',
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются',
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются',
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются'
  ]

  const blendedFormatPros = [
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2',
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2',
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2',
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2',
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2'
  ]

  const [flag, setFlag] = useState<boolean>(true)
  const [list, setList] = useState<string[]>(onlineFormatPros)

  return (
    <section className={cn(stls.container, getClassNames({ classNames }))}>
      <Wrapper>
        <h1 className={stls.title}>Формат обучения</h1>
        <div className={stls.content}>
          <div className={stls.nav}>
            <button
              className={cn(stls.btn, { [stls.active]: flag })}
              onClick={() => {
                setFlag(true)
                setList(onlineFormatPros)
              }}>
              Дистанционное <span className={stls.hide}>обучение</span>
            </button>
            <button
              className={cn(stls.btn, { [stls.active]: !flag })}
              onClick={() => {
                setFlag(false)
                setList(blendedFormatPros)
              }}>
              Вечернее <span className={stls.hide}>обучение</span>
            </button>
          </div>
          <div className={stls.block}>
            <ul className={stls.list}>
              {list &&
                list.map((item, idx) => {
                  return (
                    <li key={idx} className={stls.item}>
                      {item}
                    </li>
                  )
                })}
            </ul>
            <ImgPersonStudying classNames={[stls.img]} />
          </div>
        </div>
        <Popup
          trigger={() => (
            <BtnAlpha variant='delta-reverse' classNames={[stls.btn]}>
              Оставить заявку
            </BtnAlpha>
          )}
          modal
          lockScroll
          nested
          closeOnDocumentClick>
          {(close: MouseEventHandler) => (
            <GeneralPopup close={close}>
              <UIFormAlpha isPopup />
            </GeneralPopup>
          )}
        </Popup>
      </Wrapper>
    </section>
  )
}

export default SectionTrainingFormat
