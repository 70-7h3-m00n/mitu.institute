import stls from '@/styles/components/sections/SectionLeastDocuments.module.sass'
import TypeClassNames from '@/types/TypeClassNames'
import cn from 'classnames'
import { leastDocuments } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconCheck, IconPaperPage } from '@/components/icons'
import { GeneralSectionTitle } from '../general'

type TypeSectionLeastDocuments = TypeClassNames
const SectionLeastDocuments = ({
  classNames = []
}: TypeSectionLeastDocuments) => {
  return (
    <section className={cn(stls.container, getClassNames({ classNames }))}>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <GeneralSectionTitle classNames={[stls.title]}>
            Для получения высшего образования нужен
            <span className={stls.highlight}> минимум документов</span>
          </GeneralSectionTitle>
          <ul className={stls.leastDocuments}>
            {leastDocuments.map((document, idx) => (
              <li key={document + idx} className={stls.document}>
                <IconCheck classNames={[stls.iconCheck]} withBg />
                <span className={stls.text}>{document}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={stls.right}>
          <IconPaperPage classNames={[stls.iconList]} />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionLeastDocuments
