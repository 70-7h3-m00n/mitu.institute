import stls from '@/styles/components/sections/SectionLeastDocuments.module.sass'
import { TypeClassNames } from '@/types/index'
import { useEffect, useState } from 'react'
import cn from 'classnames'
import { leastDocuments } from '@/data/index'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import { IconCheck, IconPaperPage } from '@/components/icons'

type TypeSectionLeastDocumentsProps = TypeClassNames

const SectionLeastDocuments = ({
  classNames
}: TypeSectionLeastDocumentsProps) => {
  const [offsetY, setOffsetY] = useState(0)
  const [scrollHeight, setScollHeight] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
    setScollHeight(document.body.scrollHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <GeneralSectionTitle classNames={[stls.title]}>
            Для получения высшего образования нужно{' '}
            <GeneralTextHighlight>минимум документов</GeneralTextHighlight>
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
        <div
          className={stls.right}
          style={{
            transform: `translateY(${
              (-offsetY + (scrollHeight * 50) / 100) * 0.3
            }px)`
          }}>
          <IconPaperPage
            classNames={[stls.iconPaperPage, stls.tabletLaptopDesktop]}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionLeastDocuments
