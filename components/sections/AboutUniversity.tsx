import stls from '@/styles/components/sections/AboutUniversity.module.sass'
import TypeClassNames from '@/types/TypeClassNames'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconArms } from '@/components/icons'

type TypeAboutUniversityProps = TypeClassNames

const AboutUniversity = ({ classNames = [] }: TypeAboutUniversityProps) => {
    const accreditation = () => {
        return (
            <>
                <div className={stls.document}>
                    <IconArms classNames={[stls.icon]} />
                    <p className={stls.strong}>
                        Государственная лицензия на право ведения образовательной деятельности
                    </p>
                    <div className={stls.arrow} />
                </div>

                <div className={stls.document}>
                    <IconArms classNames={[stls.icon]} />
                    <p className={stls.strong}>
                        Свидетельство о государственной аккредитации
                    </p>
                    <div className={stls.arrow} />
                </div>
            </>
        )
    }

    return (
        <div className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper>
                <h1 className={stls.title}>Об университете</h1>
                <div className={stls.content}>
                    <div className={stls.column}>
                        <div className={stls.text}>
                            <p>
                                Наш университет за современный подход в образовании.
                                Мы постоянно берем обратную связь от работодателей
                                и адаптируем учебные программы.
                            </p>
                            <p>
                                <span className={stls.strong}>Наша миссия</span> — создать систему образования, которая будет доступна каждому. Дистанционное обучение полностью отвечает поставленным целям и задачам, поэтому инновационные технологии — неотъемлемая часть образовательного процесса в нашем институте.
                            </p>
                        </div>
                        <div className={cn(stls.accreditation, stls.top)}>
                            {
                                accreditation()
                            }
                        </div>

                    </div>
                    <div className={stls.column}>
                        <div className={stls.item}>
                            <p className={stls.subtitle}>10 лет</p>
                            <p className={stls.description}>Занимаемся образованием</p>
                        </div>
                        <div className={stls.item}>
                            <p className={stls.subtitle}>>2000</p>
                            <p className={stls.description}>Учатся прямо сейчас</p>
                        </div>
                        <div className={stls.item}>
                            <p className={stls.subtitle}>7 лет</p>
                            <p className={stls.description}>Специализируется
                                на дистанционном обучении</p>
                        </div>
                        <div className={stls.item}>
                            <p className={stls.subtitle}>>10 000</p>
                            <p className={stls.description}>Студентов уже обучили</p>
                        </div>
                    </div>
                </div>
                <div className={cn(stls.accreditation, stls.bottom)}>
                    {
                        accreditation()
                    }
                </div>


            </Wrapper>
        </div>
    )
}

export default AboutUniversity