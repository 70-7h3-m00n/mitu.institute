import stls from '@/styles/components/sections/SectionYourFutureDiploma.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle } from '@/components/general'

type TypeSectionYourFutureDiplomaProps = TypeClassNames

const SectionYourFutureDiploma = ({
  classNames
}: TypeSectionYourFutureDiplomaProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <GeneralSectionTitle classNames={[stls.title]}>
          Твой будущий диплом
        </GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionYourFutureDiploma
