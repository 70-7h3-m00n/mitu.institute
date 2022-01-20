import stls from '@/styles/components/sections/SectionManagementTable.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'


type TypeSectionManagementTableProps = TypeClassNames & {
    type: string
}

const SectionManagementTable = ({ classNames, type }: TypeSectionManagementTableProps) => {

    if (type === 'management') {
        return (
            <section className={cn(stls.container, getClassNames({ classNames }))}>
                <Wrapper>
                SectionManagementTable {type}
                </Wrapper>
            </section>
        )
    } else {
        return <></>
    }
}

export default SectionManagementTable