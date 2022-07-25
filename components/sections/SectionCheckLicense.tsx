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

  const { program } = useContext(ContextProgramContext)

  const atAdditional = program?.category?.type === 'additional'

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
          />
          <span className={stls.square}></span>
        </>
      )}
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          Проверьте лицензию
        </GeneralSectionTitle>
        <BtnBeta
          variant='alpha'
          classNames={[stls.btn]}
          tag='a'
          href={routesExternal.license}
          target='_blank'>
          Государственная лицензия на право ведения образовательной деятельности
        </BtnBeta>
      </Wrapper>
    </section>
  )
}

export default SectionCheckLicense
