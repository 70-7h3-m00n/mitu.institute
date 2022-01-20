import stls from '@/styles/components/sections/SectionEducationTable.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'


type TypeSectionEducationTableProps = TypeClassNames & {
    type: string
}

const SectionEducationTable = ({ classNames, type }: TypeSectionEducationTableProps) => {

    if (type === 'education') {
        return (
            <section className={cn(stls.container, getClassNames({ classNames }))}>
                <Wrapper>
                SectionEducationTable {type}
                </Wrapper>
            </section>
        )
    } else {
        return <></>
    }
}

export default SectionEducationTable