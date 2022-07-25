import stls from '@/styles/components/general/GeneralLegalTable.module.sass'
import { TypeClassNames } from '@/types/index'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import axios from 'axios'
import parse from 'html-react-parser'
import { getClassNames } from '@/helpers/index'
import { useAt } from '@/hooks/index'

type TypeGeneralLegalTableProps = TypeClassNames & {
  url?: string | null
  complicatedTable?: boolean | null
}

const GeneralLegalTable = ({
  classNames,
  url,
  complicatedTable
}: TypeGeneralLegalTableProps) => {
  const at = useAt()
  const [isBrowser, setIsBrowser] = useState(false)
  const [table, setTable] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const translations = {
    loading: at.uz
      ? 'Yuklanmoqda... Iltimos, kuting'
      : 'Идёт загрузка... Пожалуйста, подождите'
  }

  const fetchTable = async () => {
    if (url) {
      const res = await axios.get(url)
      const data = await res.data
      setTable(data)
      setIsLoading(false)
    }
  }

  if (isBrowser) fetchTable()

  if (isLoading) return <>{translations.loading}</>

  return (
    <div
      className={
        cn(
          stls.container,
          { [stls.regularTable]: !complicatedTable },
          { [stls.complicatedTable]: complicatedTable },
          getClassNames({ classNames })
        ) || undefined
      }>
      {table &&
        parse(
          table
            .replace(/<link.*>/g, '')
            .replace(/<meta.*>/g, '')
            .replace(/<style.*<\/style>/, '')
        )}
    </div>
  )
}

export default GeneralLegalTable
