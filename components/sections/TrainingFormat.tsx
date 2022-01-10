import stls from '@/styles/components/sections/TrainingFormat.module.sass'
import TypeClassNames from '@/types/TypeClassNames'
import { useState } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { ImgStudent } from '@/components/imgs'

const list1 = [
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются',
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются',
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются',
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются',
    'Пережили сильнейший стресс',
    'Есть ощущение «что ходите по кругу», ситуации повторяются',
]

const list2 = [
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2',
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2',
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2',
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2',
    'Пережили сильнейший стресс_2',
    'Есть ощущение «что ходите по кругу», ситуации повторяются_2',
]



type TypeTrainingFormatProps = TypeClassNames

const TrainingFormat = ({ classNames = [] }: TypeTrainingFormatProps) => {
    const [flag, setFlag] = useState<boolean>(true)
    const [list, setList] = useState<string[]>(list1)

    return (
        <section
            className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper>
                <h1 className={stls.title}>Формат обучения</h1>
                <div className={stls.content}>
                    <div className={stls.nav}>
                        <button 
                        className={cn(stls.btn, { [stls.active]: flag })}
                        onClick={() => {
                            setFlag(true)
                            setList(list1)
                        }}
                        >Дистанционное <span className={stls.hide}>обучение</span></button>
                        <button 
                        className={cn(stls.btn, { [stls.active]: !flag })}
                        onClick={() => {
                            setFlag(false)
                            setList(list2)
                        }}
                        >Вечернее <span className={stls.hide}>обучение</span></button>
                    </div>
                    <div className={stls.block}>
                        <ul className={stls.list}>
                            {
                                list && list.map((item, idx) => {
                                    return (
                                        <li key={idx} className={stls.item}>{item}</li>
                                    )
                                })
                            }
                        </ul>
                        <ImgStudent classNames={[stls.img]}/>
                    </div>
                </div>
                <button className={stls.details}>Узнать подробнее</button>
            </Wrapper>
        </section>
    )
}

export default TrainingFormat
