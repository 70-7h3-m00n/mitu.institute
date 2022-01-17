import stls from '@/styles/components/general/GeneralCollapse.module.sass'
import { TypeChildren, TypeClassNames } from '@/types/index'
import { useState } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeGeneralCollapseProps = TypeClassNames & TypeChildren & {
    title: string
}

const GeneralCollapse = ({classNames = [], children, title}: TypeGeneralCollapseProps) => {
    const [open, setOpen] = useState<boolean>(false)

    return (
        <div className={cn(stls.container, getClassNames({ classNames }))}>
            <div className={cn(stls.toggle, {[stls.open]: open})} onClick={() => setOpen(!open)}>
                <p className={stls.title}>{title}</p>
                <span className={stls.cross}/>
            </div>
            <div className={stls.content}>
                <div className={cn(stls.block, {[stls.open]: open})}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default GeneralCollapse