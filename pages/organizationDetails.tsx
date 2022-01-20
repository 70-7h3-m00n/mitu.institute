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
    const [content, setContent] = useState<any>(dataNavbar[0].type)


    return (
        <>
            <Wrapper classNames={[stls.wrapper]}>
                <h1 className={stls.title}>Сведения об организации</h1>
                <div className={stls.content}>
                    <ul className={stls.list}>
                        {
                            dataNavbar.length > 0 && dataNavbar.map((item, idx) => {
                                return (
                                    <li key={idx} className={stls.item}>
                                        <button className={cn(stls.btn, {[stls.active]: item.type === content})} onClick={() => setContent(item.type)}>{item.title}</button>
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className={stls.component}>
                       <SectionOrganizationList type={content}/>
                       <SectionEducationTable type={content}/>
                       <SectionManagementTable type={content}/>
                    </div>
                </div>
            </Wrapper>
        </>
    )
}

export default PageOrganizationDetails







