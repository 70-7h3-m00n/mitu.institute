import stls from '@/styles/components/sections/SectionProgramTeachers.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import { useContext } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { getClassNames, getImageHeight } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralSectionTitle,
  GeneralPopup,
  GeneralTextHighlight
} from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ImgTeacher } from '@/components/imgs'

type TypeSectionProgramTeachersProps = TypeClassNames

const SectionProgramTeachers = ({
  classNames
}: TypeSectionProgramTeachersProps) => {
  const at = useAt()

  const translations = {
    teachers: at.uz ? "O'qituvchilar" : 'Преподаватели',
    desc: at.uz ? (
      <>
        <GeneralTextHighlight>7 yildan 25 yilgacha</GeneralTextHighlight>{' '}
        bo&apos;lgan tajribaga ega etakchi rus va xorijiy ekspertlar tomonidan
        o&apos;qitiladi
      </>
    ) : (
      <>
        Преподают ведущие российские и зарубежные эксперты с опытом{' '}
        <GeneralTextHighlight>от 7 до 25 лет</GeneralTextHighlight>
      </>
    ),
    learnAll: at.uz ? 'Hamma Narsani Bilib Oling' : 'Узнать Всех'
  }

  const { program } = useContext(ContextProgramContext)

  if (!program?.teachers || program?.teachers?.length === 0) return <></>

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>{translations.teachers}</GeneralSectionTitle>
        <p className={stls.description}>
          {program?.teachersDescription || translations.desc}
        </p>
        <ul className={stls.teachers}>
          {program.teachers
            .filter(teacher => teacher.name)
            .map((teacher, idx) => (
              <li
                key={(teacher.name || 'SectionProgramTeachersTeacher') + idx}
                className={stls.teacher}>
                <ImgTeacher
                  src={teacher.portrait?.url}
                  width={192}
                  height={getImageHeight({
                    width: 192,
                    widthInitial: teacher.portrait?.width,
                    heightInitial: teacher.portrait?.height
                  })}
                  classNames={[stls.img]}
                  alt={teacher.name}
                />
                <h3 className={stls.name}>{teacher.name}</h3>
                {teacher.achievements && (
                  <p className={stls.achievements}>{teacher.achievements}</p>
                )}
              </li>
            ))}
        </ul>
        <div className={stls.bottom}>
          <Popup
            trigger={() => (
              <BtnAlpha variant='beta'>{translations.learnAll}</BtnAlpha>
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
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramTeachers
