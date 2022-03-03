import stls from '@/styles/components/sections/SectionWhyUs.module.sass'
import { TypeClassNames } from '@/types/index'
import { Fragment, useContext } from 'react'
import cn from 'classnames'
import { whyus } from '@/data/index'
import { mituinstitute } from '@/config/index'
import { getClassNames, getImageHeight } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'

type TypeSectionWhyUsProps = TypeClassNames

const SectionWhyUs = ({ classNames }: TypeSectionWhyUsProps) => {
  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          Почему выбирают{' '}
          <GeneralTextHighlight>
            «Московский институт технологий и управления»
          </GeneralTextHighlight>
        </GeneralSectionTitle>
      </Wrapper>
    </section>
  )
}

export default SectionWhyUs
