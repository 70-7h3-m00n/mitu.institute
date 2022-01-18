import stls from "@/styles/components/sections/HowTrainingGoing.module.sass"
import TypeClassNames from '@/types/TypeClassNames'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from "@/components/layout"


type TypeHowTrainingGoingProps = TypeClassNames

const HowTrainingGoing = ({classNames = []}: TypeHowTrainingGoingProps) => {

    const data = [
        {
            title: 'Изучайте темы',
            subtitle: 'В курсе — практические видеоуроки.'
        },
        {
            title: 'Выполняете задания',
            subtitle: 'В тот темпе, в котором Вам удобно.'
        },
        {
            title: 'Общайтесь с единомышленниками',
            subtitle: 'У нас большое сообщество выпускников и студентов, которые всегда помогут и подскажут.'
        },
        {
            title: 'Работаете с преподавателями',
            subtitle: 'Закрепляете знания и исправляете ошибки.'
        },
        {
            title: 'Получаете диплом гособразца',
            subtitle: 'Защищаете дипломную работу и дополняете ею своё портфолио.'
        },
        {
            title: 'Готовитесь к собеседованию',
            subtitle: 'Мы поможем подготовить резюме и расскажем как вести себя на собеседовании в компаниях.'
        }
    ]

    return (
        <section className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper>
                <h1 className={stls.title}>Как проходит обучение?</h1>
                <ul className={stls.list}>
                    {
                        data.map((item, idx) => {
                            return (
                                <li key={item.title + idx} className={stls.item}>
                                    <div className={stls.number}>{idx + 1}</div>
                                    <p className={stls.subtitle}>{item.title}</p>
                                    <p className={stls.description}>{item.subtitle}</p>
                                </li>
                            )
                        })
                    }
                </ul>
            </Wrapper>
        </section>
    )
}
export default HowTrainingGoing