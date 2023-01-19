import stls from '@/styles/components/sections/SectionProgramJobTitlesWithoutPictures.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import {
  addSpacesToNumber,
  getClassNames,
  getImageHeight
} from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'
import { ImgJobTitle } from '@/components/imgs'

type TypeSectionProgramJobTitlesWithoutPicturesProps = TypeClassNames

const SectionProgramJobTitlesWithoutPictures = ({
  classNames
}: TypeSectionProgramJobTitlesWithoutPicturesProps) => {
  const at = useAt()

  const translations = {
    title: at.en
      ? 'Your job titles after the program'
      : at.uz
      ? 'Siz kim bilan ishlashingiz mumkin?'
      : 'Кем Вы сможете работать?'
  }

  const { program } = useContext(ContextProgramContext)

  if (!program?.jobTitles || program?.jobTitles?.length === 0) return <></>

  // console.log(program.jobTitles)
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>{translations.title}</GeneralSectionTitle>
        <ul className={stls.jobTitles}>
          {program.jobTitles
            .filter(jobTitle => jobTitle?.position)
            .map((jobTitle, idx) => (
              <li
                key={(jobTitle.position || 'SectionProgramJobTitle') + idx}
                className={stls.jobTitle}>
                <h3 className={stls.position}>{jobTitle.position}</h3>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionProgramJobTitlesWithoutPictures
