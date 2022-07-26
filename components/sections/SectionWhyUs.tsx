import stls from '@/styles/components/sections/SectionWhyUs.module.sass'
import { TypeClassNames } from '@/types/index'
import { Fragment, useContext } from 'react'
import cn from 'classnames'
import { whyus } from '@/data/index'
import { mituinstitute, colors } from '@/config/index'
import { getClassNames, getImageHeight } from '@/helpers/index'
import { useAt, useCompanyInfo } from '@/hooks/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import { ImgWhyUs } from '@/components/imgs'
import { IconFourSquares } from '@/components/icons'

type TypeSectionWhyUsProps = TypeClassNames

const SectionWhyUs = ({ classNames }: TypeSectionWhyUsProps) => {
  const at = useAt()
  const company = useCompanyInfo()

  const translations = {
    title: at.uz ? 'Nima uchun' : 'Почему выбирают'
  }

  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional'

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          {translations.title}{' '}
          <GeneralTextHighlight>«{company.name}»</GeneralTextHighlight>
        </GeneralSectionTitle>
        <div className={stls.content}>
          <ul className={stls.list}>
            {whyus.map((item, idx) => (
              <li key={`${item}-${idx}`} className={stls.listItem}>
                <p className={stls.item}>{item}</p>
              </li>
            ))}
          </ul>
          <div className={cn(stls.img, { [stls.atAdditional]: atAdditional })}>
            <ImgWhyUs classNames={[stls.ImgWhyUs]} />
            {atAdditional && (
              <IconFourSquares
                classNames={[stls.IconFourSquares]}
                color1={colors.gamma}
                color2={colors.upsilon}
                fillOpacity2='0'
                color3={colors.gamma}
                color4={colors.upsilon}
                fillOpacity4='0'
              />
            )}
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionWhyUs
