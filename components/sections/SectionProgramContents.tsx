import stls from '@/styles/components/sections/SectionProgramContents.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import {
  GeneralSectionTitle,
  GeneralTextHighlight,
  GeneralFullProgram
} from '@/components/general'
import { ImgProgramContents } from '@/components/imgs'
import { IconFourSquares } from '@/components/icons'
import mituinstitute from '@/config/mituinstitute'

type TypeSectionProgramContentsProps = TypeClassNames

const SectionProgramContents = ({
  classNames
}: TypeSectionProgramContentsProps) => {
  const at = useAt()

  const translations = {
    title: at.en
      ? 'Brief program contents'
      : at.uz
      ? 'Qisqa kurs dasturi'
      : 'Краткая программа курса',
    modules: at.en
      ? 'special modules'
      : at.uz
      ? 'tematik modullar'
      : 'тематических модулей',
    desc: at.en
      ? 'The practices we teach and the methodology on which the course is based are verified not only by the practical experience of teachers, but also by rigorous scientific research'
      : at.uz
      ? "Biz o'rgatadigan amaliyotlar va kursning metodologiyasi nafaqat o'qituvchilarning amaliy tajribasi, balki qat'iy ilmiy tadqiqotlar bilan ham tasdiqlangan"
      : 'Практики, которым мы учим, и методология, на которой строится курс, проверены не только практическим опытом преподавателей, но и строгими научными исследованиями'
  }

  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional' && mituinstitute

  // TODO: simplify following statement
  if (!program?.shortContents || program?.shortContents?.length === 0)
    return <></>

  return (
    <section
      className={
        cn(
          [stls.container],
          { [stls.atAdditional]: atAdditional },
          getClassNames({ classNames })
        ) || undefined
      }>
      <Wrapper>
        <div className={stls.heading}>
          <GeneralSectionTitle classNames={[stls.title]}>
            {translations.title}
          </GeneralSectionTitle>
          {atAdditional && (
            <p className={stls.shortContentsLength}>
              <GeneralTextHighlight>
                {program.shortContents.length}{' '}
              </GeneralTextHighlight>
              {translations.modules}
            </p>
          )}
        </div>
        <p className={stls.desc}>
          {program?.shortContentsDescription ||
            (atAdditional ? null : <>{translations.desc}</>)}
        </p>
        <div className={stls.content}>
          <ul className={stls.contents}>
            {program.shortContents
              .filter((content, idx) => idx < 5)
              .map((content, idx) => (
                <li
                  key={(content.title || 'SectionProgramContents_item') + idx}
                  className={stls.contentItem}>
                  {content.title}
                </li>
              ))}
          </ul>
          <div
            className={cn(stls.imgContainer, {
              [stls.atAdditional]: atAdditional
            })}>
            <ImgProgramContents classNames={[stls.img]} />
            {atAdditional && (
              <IconFourSquares
                classNames={[stls.IconFourSquares]}
                id='2356_9014'
              />
            )}
          </div>
        </div>
        {!atAdditional && (
          <GeneralFullProgram classNames={[stls.fullProgram]} />
        )}
      </Wrapper>
    </section>
  )
}

export default SectionProgramContents
