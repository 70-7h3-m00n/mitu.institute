import stls from "@/styles/components/general/Button.module.sass"
import TypeClassNames from '@/types/TypeClassNames'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'

type TypeButton = TypeClassNames & React.ComponentPropsWithoutRef<"button"> & {
    children: React.ReactNode
}
const ProgramWithoutExam = ({ classNames = [],  children, ...props}: TypeButton) => {
    return (
        <button className={cn(stls.container, getClassNames({ classNames }))} {...props}>
            {children}
        </button>
    )
}

export default ProgramWithoutExam