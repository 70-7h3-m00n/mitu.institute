import stls from '@/styles/components/sections/SectionHero.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralPros, GeneralTextHighlight } from '@/components/general'

type TypeSectionProgramHeroProps = TypeClassNames

const SectionProgramHero = ({ classNames }: TypeSectionProgramHeroProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program) return <></>

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <div className={stls.top}>
          <h1 className={stls.title}>{program?.title}</h1>
        </div>
        <div className={stls.bottom}>
          <div className={stls.prosAndPicture}>
            <GeneralPros classNames={[stls.pros]} />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramHero
