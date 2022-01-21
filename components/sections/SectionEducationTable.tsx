import stls from '@/styles/components/sections/SectionEducationTable.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

type TypeDataEducationTable = {
    code: string
    nameSpecialty: string
    levelEducation: string
    periodAccreditation: string
    languages: string
    formStudy: string
    periodStudy: string
}
const dataTable: TypeDataEducationTable[] = [
    {
        code: '01.03.01	',
        nameSpecialty: 'Математика',
        levelEducation: 'Высшее образование / бакалавриат',
        periodAccreditation: 'до 08.05.2026',
        languages: 'Русский ',
        formStudy: 'очная',
        periodStudy: '4 года'
    },
    {
        code: '01.03.01	',
        nameSpecialty: 'Математика',
        levelEducation: 'Высшее образование / бакалавриат',
        periodAccreditation: 'до 08.05.2026',
        languages: 'Русский ',
        formStudy: 'очная',
        periodStudy: '4 года'
    },
    {
        code: '01.03.01	',
        nameSpecialty: 'Математика',
        levelEducation: 'Высшее образование / бакалавриат',
        periodAccreditation: 'до 08.05.2026',
        languages: 'Русский ',
        formStudy: 'очная',
        periodStudy: '4 года'
    },

]


type TypeSectionEducationTableProps = TypeClassNames & {
    type: string
}

const SectionEducationTable = ({ classNames, type }: TypeSectionEducationTableProps) => {

    const data: TypeDataEducationTable[] = dataTable

    if (type === 'education') {
        return (
            <section className={cn(stls.container, getClassNames({ classNames }))}>
                <Wrapper classNames={[stls.wrapper]}>
                    <table className={stls.table}>
                        <tr className={stls.thead}>
                            <th className={cn(stls.item, stls.tilte)}>Код</th>
                            <th className={cn(stls.item, stls.tilte)}>Наименование специальности, направления подготовки</th>
                            <th className={cn(stls.item, stls.tilte)}>Уровень образования</th>
                            <th className={cn(stls.item, stls.tilte)}>Срок действия государственной аккредитации (дата окончания действия свидетельства о государственной аккредитации)</th>
                            <th className={cn(stls.item, stls.tilte)}>Языки, на которых осуществляется образование (обучение)</th>
                            <th className={cn(stls.item, stls.tilte)}>Форма обучения</th>
                            <th className={cn(stls.item, stls.tilte)}>Нормативный срок обучения</th>
                        </tr>
                        {
                            data.map((item, idx) => {
                                return (
                                    <tr key={idx} className={stls.tbody}>
                                        <td className={stls.item}>{item.code}</td>
                                        <td className={stls.item}>{item.nameSpecialty}</td>
                                        <td className={stls.item}>{item.levelEducation}</td>
                                        <td className={stls.item}>{item.periodAccreditation}</td>
                                        <td className={stls.item}>{item.languages}</td>
                                        <td className={stls.item}>{item.formStudy}</td>
                                        <td className={stls.item}>{item.periodStudy}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </Wrapper>
            </section>
        )
    } else {
        return <></>
    }
}

export default SectionEducationTable