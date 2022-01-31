import stls from '@/styles/components/general/GeneralHeaderNavPhoneTablet.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import Link from 'next/link'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { IconHelp, IconPrograms, IconManager } from '@/components/icons'

type TypeGeneralHeaderNavPhoneTabletProps = TypeClassNames & {
  atPromo?: boolean
}

const GeneralHeaderNavPhoneTablet = ({
  classNames,
  atPromo
}: TypeGeneralHeaderNavPhoneTabletProps) => {
  const btns = [
    {
      id: 'GeneralNavPhoneTablet_help',
      trigger: (
        <Popup
          trigger={() => (
            <button className={stls.btn}>
              <IconHelp classNames={[stls.icon]} />
              <span className={stls.label}>Помощь</span>
            </button>
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
      )
    },
    {
      id: 'GeneralNavPhoneTablet_programs',
      trigger: atPromo ? (
        <a className={stls.btn} href={routesFront.anchorPrograms}>
          <IconPrograms classNames={[stls.icon]} />
          <span className={stls.label}>Программы</span>
        </a>
      ) : (
        <Link href={routesFront.programs}>
          <a className={stls.btn}>
            <IconPrograms classNames={[stls.icon]} />
            <span className={stls.label}>Программы</span>
          </a>
        </Link>
      )
    },
    {
      id: 'GeneralNavPhoneTablet_contact',
      trigger: (
        <Popup
          trigger={() => (
            <button className={stls.btn}>
              <IconManager classNames={[stls.icon]} />
              <span className={stls.label}>Контакты</span>
            </button>
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
      )
    }
  ]
  return (
    <nav
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <ul className={stls.btns}>
        {btns.map((btn, idx) => (
          <li key={btn.id + idx} className={stls.btnItem}>
            {btn.trigger}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default GeneralHeaderNavPhoneTablet
