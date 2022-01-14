import stls from '@/styles/components/sections/SectionEnterWithoutExam.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { BtnAlpha } from '@/components/btns'
import { IconMortarboard } from '@/components/icons'

type TypeProgramWithoutExamProps = TypeClassNames

const SectionEnterWithoutExam = ({
  classNames
}: TypeProgramWithoutExamProps) => {
  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.bg}>
          <div className={stls.left}>
            <h2 className={stls.title}>
              <IconMortarboard classNames={[stls.icon]} />
              <span className={stls.text}>Можно ли поступить без ЕГЭ?</span>
            </h2>
          </div>
          <div className={stls.right}>
            <p className={stls.p}>
              Оставь заявку и узнай подробности, как получить высшее образование
              без ЕГЭ по специальной программе
            </p>
            <BtnAlpha reverse>Оставить заявку</BtnAlpha>
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionEnterWithoutExam
