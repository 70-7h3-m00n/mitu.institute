import stls from '@/styles/components/sections/SectionYourFutureDiploma.module.sass'
import { TypeClassNames } from '@/types/index'
import { useRouter } from 'next/router'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralPopup } from '@/components/general'
import { GeneralSectionTitle } from '@/components/general'
import { ImgDiploma1, ImgDiploma2, ImgDiploma3 } from '@/components/imgs'
import { PopupImg } from '@/components/popups'
import { BtnImgPopupTrigger } from '@/components/btns'

type TypeSectionYourFutureDiplomaProps = TypeClassNames

const SectionYourFutureDiploma = ({
  classNames
}: TypeSectionYourFutureDiplomaProps) => {
  const router = useRouter()
  const { program } = useContext(ContextProgramContext)

  const diplomas = [
    {
      img: <ImgDiploma1 />,
      label: 'Диплом бакалавра'
    },
    {
      img: <ImgDiploma2 />,
      label: 'Диплом бакалавра'
    },
    {
      img: <ImgDiploma3 />,
      label: 'Приложение к диплому'
    }
  ]

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Ваш будущий диплом
        </GeneralSectionTitle>
        <ul className={stls.diplomas}>
          {diplomas.map((diploma, idx) => (
            <li key={diploma.label + idx} className={stls.diploma}>
              <Popup
                trigger={() => (
                  <BtnImgPopupTrigger label={diploma.label}>
                    {diploma.img}
                  </BtnImgPopupTrigger>
                )}
                modal
                lockScroll
                nested
                closeOnDocumentClick>
                {(close: MouseEventHandler) => (
                  <GeneralPopup close={close} img>
                    <PopupImg>{diploma.img}</PopupImg>
                  </GeneralPopup>
                )}
              </Popup>
            </li>
          ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionYourFutureDiploma
