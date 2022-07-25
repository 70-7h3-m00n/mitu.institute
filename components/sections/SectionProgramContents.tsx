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

type TypeSectionProgramContentsProps = TypeClassNames

const SectionProgramContents = ({
  classNames
}: TypeSectionProgramContentsProps) => {
  const at = useAt()

  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional'

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
            Краткая программа курса
          </GeneralSectionTitle>
          {atAdditional && (
            <p className={stls.shortContentsLength}>
              <GeneralTextHighlight>
                {program.shortContents.length}{' '}
              </GeneralTextHighlight>
              тематических модулей
            </p>
          )}
        </div>
        <p className={stls.desc}>
          {program?.shortContentsDescription ||
            (atAdditional ? null : (
              <>
                Практики, которым мы учим, и методология, на которой строится
                курс, проверены не только практическим опытом преподавателей, но
                и строгими научными исследованиями
              </>
            ))}
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
              <IconFourSquares classNames={[stls.IconFourSquares]} />
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
