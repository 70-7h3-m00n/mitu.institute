import stls from '@/styles/components/cards/CardProgram.module.sass'
import { TypeClassNames } from '@/types/index'
import { ProgramStudyDuration } from '@/components/program'
import { IconClock, IconArrowTopRight } from '@/components/icons'

type TypeCardProgramProps = TypeClassNames & {
  card: any
}

const CardProgram = ({ classNames, card }: TypeCardProgramProps) => {
  return (
    <>
      <div className={stls.label}>{card?.faculty?.label}</div>
      <div className={stls.top}>
        <h3 className={stls.title}>{card.title}</h3>
        <p className={stls.desc}>{card.desc}</p>
      </div>
      <div className={stls.bottom}>
        <div className={stls.studyDuration}>
          <IconClock classNames={[stls.iconClock]} />
          <ProgramStudyDuration
            studyDurationMonths={card.studyMonths}
            monthsOnly
          />
        </div>
        <div className={stls.learnMore}>
          <div className={stls.learnMoreLabel}>Подробнее</div>
          <IconArrowTopRight classNames={[stls.iconArrowTopRight]} />
        </div>
      </div>
    </>
  )
}

export default CardProgram
