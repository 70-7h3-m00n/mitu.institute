import stls from '@/styles/components/sections/SectionProgramJobTitles.module.sass'
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

type TypeSectionProgramJobTitlesProps = TypeClassNames

const SectionProgramJobTitles = ({
  classNames
}: TypeSectionProgramJobTitlesProps) => {
  const at = useAt()

  const { program } = useContext(ContextProgramContext)

  if (!program?.jobTitles || program?.jobTitles?.length === 0) return <></>

  const translations = {
    title: at.en
      ? 'Your job titles after the program'
      : at.uz
      ? 'Siz kim bilan ishlashingiz mumkin?'
      : 'Кем Вы сможете работать?',
    positionLabel: at.en ? 'Position' : at.uz ? 'Lavozim' : 'Должность'
  }

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>{translations.title}</GeneralSectionTitle>
        <ul className={stls.jobTitles}>
          {program.jobTitles
            .filter(jobTitle => jobTitle?.picture && jobTitle?.position)
            .map((jobTitle, idx) => (
              <li
                key={(jobTitle.position || 'SectionProgramJobTitle') + idx}
                className={stls.jobTitle}>
                <ImgJobTitle
                  src={jobTitle.picture?.url}
                  width={90}
                  height={getImageHeight({
                    width: 90,
                    widthInitial: jobTitle.picture?.width,
                    heightInitial: jobTitle.picture?.height
                  })}
                  alt={jobTitle.position}
                  title={jobTitle.position}
                  classNames={[stls.img]}
                />
                <div className={stls.content}>
                  <p className={stls.label}>{translations.positionLabel}:</p>
                  <h3 className={stls.position}>{jobTitle.position}</h3>

                  {/* <div className={stls.price}>
                    <p className={stls.priceLabel}>з/п</p>
                    {jobTitle.salary && (
                      <p className={stls.salary}>
                        {' '}
                        от {addSpacesToNumber(jobTitle.salary)} &#8381;
                      </p>
                    )}
                  </div> */}
                </div>
              </li>
            ))}
        </ul>
      </Wrapper>
    </section>
  )
}

export default SectionProgramJobTitles
