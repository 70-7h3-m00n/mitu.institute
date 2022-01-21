import stls from '@/styles/pages/PageOrganizationDetails.module.sass'
import cn from 'classnames'
import type { NextPage } from 'next'
import { Wrapper } from '@/components/layout'
import { useState } from 'react'
import { SectionEducationTable, SectionManagementTable, SectionOrganizationList } from '@/components/sections'



export const dataNavbar = [
    {
        title: 'Основные сведения',
        type: 'basic-information'
    },
    {
        title: 'Структура и органы управления образовательной организацией',
        type: 'structure-organization'
    },
    {
        title: 'Документы',
        type: 'documentation'
    },
    {
        title: 'Образование',
        type: 'education'
    },
    {
        title: 'Руководство. Педагогический (научно-педагогический) состав',
        type: 'management'
    },
    {
        title: 'Материально-техническое обеспечение и оснащенность образовательного процесса',
        type: 'educational-process-equipment'
    },
    {
        title: 'Стипендии и меры поддержки обучающихся',
        type: 'scholarships-support'
    },
    {
        title: 'Платные образовательные услуги',
        type: 'paid-services'
    },
    {
        title: 'Финансово-хозяйственная деятельность',
        type: 'financial-activity'
    },
    {
        title: 'Вакантные места для приема (перевода) обучающихся',
        type: 'Vacancies-students'
    },
    {
        title: 'Доступная среда',
        type: 'accessible-environment'
    },
    {
        title: 'Международное сотрудничество',
        type: 'international-cooperation'
    }
]





const PageOrganizationDetails: NextPage = () => {
    const [content, setContent] = useState<{ title: string, type: string }>(dataNavbar[0])
    const [openFilter, setOpenFilter] = useState<boolean>(false)


    return (
        <>
            <Wrapper classNames={[stls.wrapper]}>
                <h1 className={stls.title}>Сведения об организации</h1>
                <div className={stls.content}>
                    <button className={stls.filter} onClick={() => setOpenFilter(!openFilter)}>{openFilter ? 'Свернуть фильтры' : 'Показать фильтры'}</button>
                    <ul className={cn(stls.list, {[stls.hide]: !openFilter})}>
                        {
                            dataNavbar.length > 0 && dataNavbar.map((item, idx) => {
                                return (
                                    <li key={idx} className={stls.item}>
                                        <button className={cn(stls.btn, { [stls.active]: item.type === content.type })} onClick={() => setContent(item)}>{item.title}</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={stls.component}>
                        <h2 className={stls.programTitle}>{content.title}</h2>
                        <SectionOrganizationList type={content.type} />
                        <SectionEducationTable type={content.type} />
                        <SectionManagementTable type={content.type} />
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default PageOrganizationDetails







