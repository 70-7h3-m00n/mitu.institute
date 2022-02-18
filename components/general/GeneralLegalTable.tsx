import stls from '@/styles/components/general/GeneralLegalTable.module.sass'
import { TypeClassNames } from '@/types/index'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import axios from 'axios'
import parse from 'html-react-parser'
import { getClassNames } from '@/helpers/index'

type TypeGeneralLegalTableProps = TypeClassNames & { url?: string | null }

const GeneralLegalTable = ({ classNames, url }: TypeGeneralLegalTableProps) => {
  const [isBrowser, setIsBrowser] = useState(false)
  const [table, setTable] = useState<string | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const fetchTable = async () => {
    if (url) {
      const res = await axios.get(url)
      const data = await res.data
      setTable(data)
      setIsLoading(false)
    }
  }

  if (isBrowser) fetchTable()

  if (isLoading) return <>Идёт загрузка... Пожалуйста, подождите</>

  return (
    <div
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
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
