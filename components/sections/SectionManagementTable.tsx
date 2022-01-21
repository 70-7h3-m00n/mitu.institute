import stls from '@/styles/components/sections/SectionManagementTable.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'

type TypeDataManagementTable = {
    fullName: string
    position: string
    contactPhone: string
    email: string
}

const dataTable: TypeDataManagementTable[] = [
    {
        fullName: 'Рубин Юрий Борисович',
        position: 'Президент',
        contactPhone: '+7 (495) 995-33-34',
        email: '	YRubin@synergy.ru'
    },
    {
        fullName: 'Рубин Юрий Борисович',
        position: 'Президент',
        contactPhone: '+7 (495) 995-33-34',
        email: '	YRubin@synergy.ru'
    },
    {
        fullName: 'Рубин Юрий Борисович',
        position: 'Президент',
        contactPhone: '+7 (495) 995-33-34',
        email: '	YRubin@synergy.ru'
    },
]

type TypeSectionManagementTableProps = TypeClassNames & {
    type: string
}

const SectionManagementTable = ({ classNames, type }: TypeSectionManagementTableProps) => {

    const data: TypeDataManagementTable[] = dataTable

    if (type === 'management') {
        return (
            <section className={cn(stls.container, getClassNames({ classNames }))}>
                <Wrapper classNames={[stls.wrapper]}>
                <table className={stls.table}>
                        <tr className={stls.thead}>
                            <th className={cn(stls.item, stls.tilte)}>Ф.И.О.</th>
                            <th className={cn(stls.item, stls.tilte)}>Должность</th>
                            <th className={cn(stls.item, stls.tilte)}>Контактные телефоны</th>
                            <th className={cn(stls.item, stls.tilte)}>Адреса электронной почты</th>
                        </tr>
                      {
                          data.map((item, idx) => {
                              return (
                                  <tr key={idx} className={stls.tbody}>
                                      <td className={stls.item}>{item.fullName}</td>
                                      <td className={stls.item}>{item.position}</td>
                                      <td className={stls.item}>{item.contactPhone}</td>
                                      <td className={stls.item}>{item.email}</td>
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

export default SectionManagementTable