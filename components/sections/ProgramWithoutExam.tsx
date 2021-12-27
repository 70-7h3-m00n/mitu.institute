import stls from "@/styles/components/sections/ProgramWithoutExam.module.sass"
import TypeClassNames from '@/types/TypeClassNames'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { IconAcademicCap } from "@/components/icons"
import Wrapper from "@/components/layout/Wrapper"
import Button from "@/components/general/Button"


type TypeProgramWithoutExam = TypeClassNames
const ProgramWithoutExam = ({ classNames = [] }: TypeProgramWithoutExam) => {
    return (
        <section className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper>
                <div className={stls.content}>
                    <IconAcademicCap classNames={[stls.icon]} />
                    <h1 className={stls.title}>Можно ли поступить без ЕГЭ?</h1>
                    <div className={stls.subtitle}>
                        <p className={stls.text}>
                            Оставь заявку и узнай подробности, как получить высшее образование без ЕГЭ по специальной программе.
                        </p>
                        <Button classNames={[stls.btn]} onClick={() => console.log('button')}>Оставить заявку</Button>
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}

export default ProgramWithoutExam