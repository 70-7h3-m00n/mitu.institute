import stls from '@/styles/components/general/GeneralProgramsFilters.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { routesFront } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext
} from '@/context/index'
import { BtnAlpha } from '@/components/btns'

type TypeGeneralProgramsFiltersProps = TypeClassNames

const GeneralProgramsFilters = ({
  classNames
}: TypeGeneralProgramsFiltersProps) => {
  const at = useAt()
  const { categories, curCategory, setCategories } = useContext(
    ContextCategoriesContext
  )

  const btnsCategories = categories?.map(category => ({
    variantType: category?.type,
    label: category?.label,
    href: category?.slug
  }))

  const translations = {
    title: at.en ? 'Programs' : at.uz ? 'Dasturlar' : 'Программы'
  }

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <div className={stls.filter}>
        <h3 className={stls.filterTitle}>{translations.title}</h3>
        <div className={stls.btnsCategories}>
          {btnsCategories?.map((btn, idx) => (
            <BtnAlpha
              key={(btn.label || 'btn') + idx}
              tag={'Link'}
              href={`${routesFront.programs}/${btn.href}`}
              scroll={false}
              variant={curCategory?.type === btn.variantType ? 'beta' : 'eta'}
              classNames={[stls.btnCategory]}>
              {btn.label}
            </BtnAlpha>
          ))}
        </div>
      </div>
    </div>
  )
}

export default GeneralProgramsFilters
