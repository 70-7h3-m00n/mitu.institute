import stls from '@/styles/components/sections/SectionOrganizationList.module.sass'
import { TypeClassNames, TypeProgramCategory } from '@/types/index'
import Link from 'next/link'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { IconDoc } from '@/components/icons'


type DataType = Array<{
    title: string
    items: Array<{subtitle: string, src: string}>  
    subitems: Array<{subtitle: string, src: string}>
}> 
const dataOrganization: DataType = [
    {
        title: 'О полном и сокращенном (при наличии) наименовании образовательной организации',
        items: [
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
        ],
        subitems: [
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
        ]
    },
    {
        title: 'Об учредителе (учредителях) образовательной организации',
        items: [
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
        ],
        subitems: [
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
        ]
    },
    {
        title: 'О наименовании представительств и филиалов образовательной организации (при наличии) (в том числе, находящихся за пределами Российской Федерации)',
        items: [
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
        ],
        subitems: [
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
            {
                subtitle: 'Устав образовательной организации',
                src: '#'
            },
        ]
    },
]


type TypeSectionOrganizationListProps = TypeClassNames & {
    type: string
}

const SectionOrganizationList = ({ classNames, type }: TypeSectionOrganizationListProps) => {
    if (type === 'education' || type === 'management') {
        return <></>
    }
    const data: DataType = dataOrganization

    return (
        <section className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper classNames={[stls.wrapper]}>
                {
                    data.length > 0 && data.map((el, idx) => {
                        return (
                            <div key={idx} className={stls.content}>
                                <p className={stls.title}>{el.title}</p>
                                <ul className={stls.list}>
                                    {
                                       el.items.map((item, i) => {
                                           return (
                                               <li key={i} className={stls.item}>
                                                   {/* <Link href={item.src}> */}
                                                       <IconDoc classNames={[stls.icon]}/>
                                                    <a className={stls.link}>{item.subtitle}</a>
                                                   {/* </Link> */}
                                               </li>
                                           )
                                       })
                                    }
                                </ul>
                                <ul className={stls.list}>
                                    {
                                        el.subitems.map((subitem, i) => {
                                            return (
                                                <li key={i} className={stls.subitem}>
                                                    {/* <Link href={subitem.src}> */}
                                                        <IconDoc classNames={[stls.icon]}/>
                                                     <a className={stls.link}>{subitem.subtitle}</a>
                                                    {/* </Link> */}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        )
                    })
                }
            </Wrapper>
        </section>
    )

}

export default SectionOrganizationList