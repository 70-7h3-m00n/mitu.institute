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
  ImgDiplomaSupplementTwoPages,
  ImgDiplomaCollege
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

  const { curCategory } = useContext(ContextCategoriesContext)

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
      : 'Диплом Supplement-',
    collegeDiploma: at.en
      ? 'Diploma of secondary vocational education'
      : at.uz
      ? "O'rta kasb-hunar ta'limi diplomi"
      : 'Диплом о среднем профессиональном образовании'
  }

  const diplomas = []

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
      if (curCategory?.type === 'college') {
        diplomas.push({
          img: <ImgDiplomaCollege />,
          label: translations.collegeDiploma
        })
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
                    <span className={stls.img}>{diploma.img}</span>
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
