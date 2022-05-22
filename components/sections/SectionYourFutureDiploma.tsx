import stls from '@/styles/components/sections/SectionYourFutureDiploma.module.sass'
import { TypeClassNames } from '@/types/index'
import { useRouter } from 'next/router'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import {
  ContextCategoriesContext,
  ContextProgramContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralPopup } from '@/components/general'
import { GeneralSectionTitle } from '@/components/general'
import {
  ImgDiplomaBachelor,
  ImgDiplomaDynamicProfession,
  ImgDiplomaInstitute,
  ImgDiplomaMaster,
  ImgDiplomaProfession,
  ImgDiplomaSupplement,
  ImgDiplomaSupplementTwoPages
} from '@/components/imgs'
import { PopupImg } from '@/components/popups'
import { BtnImgPopupTrigger } from '@/components/btns'

type TypeSectionYourFutureDiplomaProps = TypeClassNames & {
  atPageProgram?: boolean
}

const SectionYourFutureDiploma = ({
  classNames,
  atPageProgram
}: TypeSectionYourFutureDiplomaProps) => {
  const router = useRouter()
  const { program } = useContext(ContextProgramContext)
  const { curCategory } = useContext(ContextCategoriesContext)

  const diplomas = []

  // if (
  //   (atPageProgram && curCategory?.type === 'master') ||
  //   curCategory?.type === 'bachelor'
  // )
  //   diplomas = [
  //     {
  //       img: <ImgDiplomaDynamicProfession />,
  //       label: 'Диплом о профессиональной переподготовке'
  //     },
  //     {
  //       img: <ImgDiplomaBachelor />,
  //       label: 'Диплом бакалавра'
  //     },
  //     {
  //       img: <ImgDiplomaSupplement />,
  //       label: 'Диплом Supplement'
  //     }
  //   ]

  // if (atPageProgram && curCategory?.type === 'additional')
  //   diplomas = [
  //     {
  //       img: <ImgDiplomaDynamicProfession />,
  //       label: 'Диплом о профессиональной переподготовке'
  //     },
  //     {
  //       img: <ImgDiplomaSupplement />,
  //       label: 'Диплом Supplement'
  //     }
  //   ]

  // if (!atPageProgram)
  //   diplomas = [
  //     {
  //       img: <ImgDiplomaDynamicProfession />,
  //       label: 'Диплом о профессиональной переподготовке'
  //     },
  //     {
  //       img: <ImgDiplomaBachelor />,
  //       label: 'Диплом бакалавра'
  //     },
  //     {
  //       img: <ImgDiplomaSupplement />,
  //       label: 'Диплом Supplement'
  //     }
  //   ]

  if (mituinstitute) {
    if (!atPageProgram) {
      diplomas.push(
        {
          img: <ImgDiplomaBachelor />,
          label: 'Диплом бакалавра'
        },
        {
          img: <ImgDiplomaMaster />,
          label: 'Диплом магистра'
        },
        {
          img: <ImgDiplomaDynamicProfession />,
          label: 'Диплом переподготовки'
        },
        {
          img: <ImgDiplomaInstitute />,
          label: 'Диплом института'
        },
        {
          img: <ImgDiplomaSupplementTwoPages />,
          label: 'Диплом Supplement'
        }
      )
    } else {
      if (curCategory?.type === 'master') {
        diplomas.push(
          {
            img: <ImgDiplomaMaster />,
            label: 'Диплом магистра'
          },
          {
            img: <ImgDiplomaDynamicProfession />,
            label: 'Диплом о переподготовке'
          },
          {
            img: <ImgDiplomaInstitute />,
            label: 'Диплом института'
          },
          {
            img: <ImgDiplomaSupplementTwoPages />,
            label: 'Диплом Supplement'
          }
        )
      }
      if (curCategory?.type === 'bachelor') {
        diplomas.push(
          {
            img: <ImgDiplomaBachelor />,
            label: 'Диплом бакалавра'
          },
          {
            img: <ImgDiplomaDynamicProfession />,
            label: 'Диплом о переподготовке'
          },
          {
            img: <ImgDiplomaInstitute />,
            label: 'Диплом института'
          },
          {
            img: <ImgDiplomaSupplementTwoPages />,
            label: 'Диплом Supplement'
          }
        )
      }
      if (curCategory?.type === 'additional') {
        diplomas.push(
          {
            img: <ImgDiplomaDynamicProfession />,
            label: 'Диплом бакалавра'
          },
          {
            img: <ImgDiplomaInstitute />,
            label: 'Диплом института'
          }
        )
      }
    }
  } else {
    if (!atPageProgram) {
      diplomas.push(
        {
          img: <ImgDiplomaMaster />,
          label: 'Диплом магистра'
        },
        {
          img: <ImgDiplomaBachelor />,
          label: 'Диплом бакалавра'
        },
        {
          img: <ImgDiplomaDynamicProfession />,
          label: 'Диплом о переподготовке'
        },
        {
          img: <ImgDiplomaSupplementTwoPages />,
          label: 'Диплом Supplement'
        }
      )
    } else {
      if (curCategory?.type === 'master') {
        diplomas.push(
          {
            img: <ImgDiplomaMaster />,
            label: 'Диплом магистра'
          },
          {
            img: <ImgDiplomaDynamicProfession />,
            label: 'Диплом о переподготовке'
          },
          {
            img: <ImgDiplomaInstitute />,
            label: 'Диплом института'
          },
          {
            img: <ImgDiplomaSupplementTwoPages />,
            label: 'Диплом Supplement'
          }
        )
      }
      if (curCategory?.type === 'bachelor') {
        diplomas.push(
          {
            img: <ImgDiplomaBachelor />,
            label: 'Диплом бакалавра'
          },
          {
            img: <ImgDiplomaDynamicProfession />,
            label: 'Диплом о переподготовке'
          },
          {
            img: <ImgDiplomaInstitute />,
            label: 'Диплом института'
          },
          {
            img: <ImgDiplomaSupplementTwoPages />,
            label: 'Диплом Supplement'
          }
        )
      }
      if (curCategory?.type === 'additional') {
        diplomas.push(
          {
            img: <ImgDiplomaDynamicProfession />,
            label: 'Диплом бакалавра'
          },
          {
            img: <ImgDiplomaInstitute />,
            label: 'Диплом института'
          }
        )
      }
    }
  }

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Ваши будущие дипломы
        </GeneralSectionTitle>
        <ul className={stls.diplomas}>
          {diplomas?.map((diploma, idx) => (
            <li key={diploma.label + idx} className={stls.diploma}>
              <Popup
                trigger={() => (
                  <BtnImgPopupTrigger
                    label={diploma.label}
                    classNames={[stls.trigger]}>
                    <div className={stls.img}>{diploma.img}</div>
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
