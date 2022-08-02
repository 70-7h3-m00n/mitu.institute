import stls from '@/styles/components/sections/SectionYourFutureDiploma.module.sass'
import { TypeClassNames } from '@/types/index'
import { useRouter } from 'next/router'
import { useContext, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
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
  const at = useAt()

  const router = useRouter()
  const { program } = useContext(ContextProgramContext)
  const { curCategory } = useContext(ContextCategoriesContext)

  const translations = {
    title: at.uz ? 'Kelajakdagi diplomlaringiz' : 'Ваши будущие дипломы',
    bachelorDiploma: at.uz ? 'Bakalavr darajasi' : 'Диплом бакалавра',
    masterDiploma: at.uz ? 'Magistr darajasi' : 'Диплом магистра',
    professionalRetrainingDiploma: at.uz
      ? 'Kasbiy qayta tayyorlash diplomi'
      : 'Диплом о профессиональной переподготовка',
    instituteDiploma: at.uz ? 'Institut diplomi' : 'Диплом института',
    supplementDiploma: at.uz ? "Jum Ta'minoti" : 'Диплом Supplement-'
  }

  const diplomas = []

  // if (
  //   (atPageProgram && curCategory?.type === 'master') ||
  //   curCategory?.type === 'bachelor'
  // )
  //   diplomas = [
  //     {
  //       img: <ImgDiplomaDynamicProfession />,
  //       label: translations.professionalRetrainingDiploma
  //     },
  //     {
  //       img: <ImgDiplomaBachelor />,
  //       label: translations.bachelorDiploma
  //     },
  //     {
  //       img: <ImgDiplomaSupplement />,
  //       label: translations.supplementDiploma
  //     }
  //   ]

  // if (atPageProgram && curCategory?.type === 'additional')
  //   diplomas = [
  //     {
  //       img: <ImgDiplomaDynamicProfession />,
  //       label: translations.professionalRetrainingDiploma
  //     },
  //     {
  //       img: <ImgDiplomaSupplement />,
  //       label: translations.supplementDiploma
  //     }
  //   ]

  // if (!atPageProgram)
  //   diplomas = [
  //     {
  //       img: <ImgDiplomaDynamicProfession />,
  //       label: translations.professionalRetrainingDiploma
  //     },
  //     {
  //       img: <ImgDiplomaBachelor />,
  //       label: translations.bachelorDiploma
  //     },
  //     {
  //       img: <ImgDiplomaSupplement />,
  //       label: translations.supplementDiploma
  //     }
  //   ]

  if (mituinstitute) {
    if (!atPageProgram) {
      diplomas.push(
        {
          img: <ImgDiplomaBachelor />,
          label: translations.bachelorDiploma
        },
        {
          img: <ImgDiplomaMaster />,
          label: translations.masterDiploma
        },
        {
          img: <ImgDiplomaDynamicProfession />,
          label: translations.professionalRetrainingDiploma
        },
        {
          img: <ImgDiplomaInstitute />,
          label: translations.instituteDiploma
        },
        {
          img: <ImgDiplomaSupplementTwoPages />,
          label: translations.supplementDiploma
        }
      )
    } else {
      if (curCategory?.type === 'master') {
        diplomas.push(
          {
            img: <ImgDiplomaMaster />,
            label: translations.masterDiploma
          },
          {
            img: <ImgDiplomaDynamicProfession />,
            label: translations.professionalRetrainingDiploma
          },
          {
            img: <ImgDiplomaInstitute />,
            label: translations.instituteDiploma
          },
          {
            img: <ImgDiplomaSupplementTwoPages />,
            label: translations.supplementDiploma
          }
        )
      }
      if (curCategory?.type === 'bachelor' || curCategory?.type === 'GVD') {
        diplomas.push(
          {
            img: <ImgDiplomaBachelor />,
            label: translations.bachelorDiploma
          },
          {
            img: <ImgDiplomaDynamicProfession />,
            label: translations.professionalRetrainingDiploma
          },
          {
            img: <ImgDiplomaInstitute />,
            label: translations.instituteDiploma
          },
          {
            img: <ImgDiplomaSupplementTwoPages />,
            label: translations.supplementDiploma
          }
        )
      }
      if (curCategory?.type === 'additional') {
        diplomas.push(
          {
            img: <ImgDiplomaDynamicProfession />,
            label: translations.professionalRetrainingDiploma
          },
          {
            img: <ImgDiplomaInstitute />,
            label: translations.instituteDiploma
          }
        )
      }
    }
  } else {
    if (!atPageProgram) {
      diplomas.push(
        {
          img: <ImgDiplomaMaster />,
          label: translations.masterDiploma
        },
        {
          img: <ImgDiplomaBachelor />,
          label: translations.bachelorDiploma
        },
        {
          img: <ImgDiplomaDynamicProfession />,
          label: translations.professionalRetrainingDiploma
        },
        {
          img: <ImgDiplomaSupplementTwoPages />,
          label: translations.supplementDiploma
        }
      )
    } else {
      if (curCategory?.type === 'master') {
        diplomas.push(
          {
            img: <ImgDiplomaMaster />,
            label: translations.masterDiploma
          },
          {
            img: <ImgDiplomaDynamicProfession />,
            label: translations.professionalRetrainingDiploma
          },
          {
            img: <ImgDiplomaInstitute />,
            label: translations.instituteDiploma
          },
          {
            img: <ImgDiplomaSupplementTwoPages />,
            label: translations.supplementDiploma
          }
        )
      }
      if (curCategory?.type === 'bachelor' || curCategory?.type === 'GVD') {
        diplomas.push(
          {
            img: <ImgDiplomaBachelor />,
            label: translations.bachelorDiploma
          },
          {
            img: <ImgDiplomaDynamicProfession />,
            label: translations.professionalRetrainingDiploma
          },
          {
            img: <ImgDiplomaInstitute />,
            label: translations.instituteDiploma
          },
          {
            img: <ImgDiplomaSupplementTwoPages />,
            label: translations.supplementDiploma
          }
        )
      }
      if (curCategory?.type === 'additional') {
        diplomas.push(
          {
            img: <ImgDiplomaDynamicProfession />,
            label: translations.professionalRetrainingDiploma
          },
          {
            img: <ImgDiplomaInstitute />,
            label: translations.instituteDiploma
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
          {translations.title}
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
