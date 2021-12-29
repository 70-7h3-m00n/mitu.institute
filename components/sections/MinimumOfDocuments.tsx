import stls from "@/styles/components/sections/MinimumOfDocuments.module.sass"
import TypeClassNames from "@/types/TypeClassNames"
import cn from 'classnames'
import { getClassNames } from "@/helpers/index"
import { Wrapper } from "@/components/layout"
import { IconCheck, IconList } from "@/components/icons"



type TypeMinimumOfDocuments = TypeClassNames
const MinimumOfDocuments = ({ classNames = [] }: TypeMinimumOfDocuments) => {
    return (
        <section className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper classNames={[stls.wrapper]}>
                <IconList classNames={[stls.iconList]} />
                <h1 className={stls.title}>
                    Для получения высшего образования нужен
                    <span className={stls.highlight}> минимум документов</span>
                </h1>
                <ul className={stls.list}>
                    <li className={stls.item}>
                        <div className={stls.check}>
                            <IconCheck classNames={[stls.icon]} />
                        </div>
                        <p className={stls.text}>Аттестат / диплом</p>
                    </li>
                    <li className={stls.item}>
                        <div className={stls.check}>
                            <IconCheck classNames={[stls.icon]} />
                        </div>
                        <p className={stls.text}>Паспорт</p>
                    </li>
                    <li className={stls.item}>
                        <div className={stls.check}>
                            <IconCheck classNames={[stls.icon]} />
                        </div>
                        <p className={stls.text}>Заявление на поступление</p>
                    </li>
                </ul>
            </Wrapper>
        </section>
    )
}


export default MinimumOfDocuments