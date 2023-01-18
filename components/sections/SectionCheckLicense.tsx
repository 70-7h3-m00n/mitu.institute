import stls from '@/styles/components/sections/SectionCheckLicense.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { routesExternal, mituinstitute } from '@/config/index'
import { ContextProgramContext } from '@/context/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import {
  IconCoatOfArmsRussia,
  IconDecorationGeometricStar,
  IconDecorationFourShadowSquares
} from '@/components/icons'
import { BtnBeta } from '@/components/btns'

type TypeSectionCheckLicenseProps = TypeClassNames

const SectionCheckLicense = ({ classNames }: TypeSectionCheckLicenseProps) => {
  const at = useAt()

  const translations = {
    title: at.en
      ? 'Check the license'
      : at.uz
      ? 'Litsenziyani tekshiring'
      : 'Проверьте лицензию',
    btnVal: at.en
      ? 'State license allows us to provide online education'
      : at.uz
      ? "Ta'lim faoliyatini amalga oshirish huquqini beruvchi davlat litsenziyasi"
      : 'Государственная лицензия на право ведения образовательной деятельности'
  }

  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional' && mituinstitute

  return (
    <section
      className={
        cn(
          stls.container,
          { [stls.atAdditional]: atAdditional },
          getClassNames({ classNames })
        ) || undefined
      }>
      {atAdditional && (
        <>
          <IconDecorationGeometricStar
            classNames={[stls.IconDecorationGeometricStar]}
          />
          <IconDecorationFourShadowSquares
            classNames={[stls.IconDecorationFourShadowSquares]}
            id='2356_9336'
          />
          <span className={stls.square}></span>
        </>
      )}
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          {translations.title}
        </GeneralSectionTitle>
        <BtnBeta
          variant='alpha'
          classNames={[stls.btn]}
          tag='a'
          href={routesExternal.license}
          target='_blank'>
          {translations.btnVal}
        </BtnBeta>
      </Wrapper>
    </section>
  )
}

export default SectionCheckLicense
