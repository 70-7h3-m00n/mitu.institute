import stls from '@/styles/components/sections/SectionLeastDocuments.module.sass'
import { TypeClassNames } from '@/types/index'
import { useContext } from 'react'
import cn from 'classnames'
import { mituinstitute } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { ContextCategoriesContext } from '@/context/index'
import { useAt } from '@/hooks/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import { IconCheck, IconPaperPage } from '@/components/icons'

type TypeSectionLeastDocumentsProps = TypeClassNames

type TypeLeastDocuments = string[]

const SectionLeastDocuments = ({
  classNames
}: TypeSectionLeastDocumentsProps) => {
  const at = useAt()

  // const [offsetY, setOffsetY] = useState(0)
  // const [scrollHeight, setScollHeight] = useState(0)
  // const handleScroll = () => {
  //   setOffsetY(window.pageYOffset)
  //   setScollHeight(document.body.scrollHeight)
  // }

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll)
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll)
  //   }
  // }, [])

  const { curCategory } = useContext(ContextCategoriesContext)

  const translations = {
    title: at.uz
      ? "Oliy ma'lumot olish uchun sizga"
      : 'Для получения высшего образования нужно',
    titleHighlight: at.uz ? 'minimal hujjatlar kerak' : 'минимум документов',
    leastDocumentAdditional: at.uz
      ? [
          'Tugallangan oliy/oʻrta kasb-hunar taʼlimi',
          'Pasport',
          'Qabul qilish uchun ariza'
        ]
      : [
          'Законченное высшее / среднее профессиональное образование',
          'Паспорт',
          'Заявление на поступление'
        ],
    leastDocumentsMaster: at.uz
      ? [
          'Bakalavr darajasi / mutaxassis',
          'Pasport',
          'Qabul qilish uchun ariza'
        ]
      : ['Диплом бакалавра/специалиста', 'Паспорт', 'Заявление на поступление'],
    leastDocumentsDefault: at.uz
      ? ['Sertifikat / diplom', 'Pasport', 'Qabul qilish uchun ariza']
      : ['Аттестат / диплом', 'Паспорт', 'Заявление на поступление']
  }

  const leastDocuments: TypeLeastDocuments = mituinstitute
    ? curCategory?.type === 'additional'
      ? translations.leastDocumentAdditional
      : curCategory?.type === 'master'
      ? translations.leastDocumentsMaster
      : translations.leastDocumentsDefault
    : [
        'Документ о предыдущем образовании',
        'Паспорт',
        'Заявление на поступление'
      ]

  return (
    <section
      className={
        cn(stls.container, getClassNames({ classNames })) || undefined
      }>
      <Wrapper classNames={[stls.wrapper]}>
        <div className={stls.left}>
          <GeneralSectionTitle classNames={[stls.title]}>
            {translations.title}{' '}
            <GeneralTextHighlight>
              {translations.titleHighlight}
            </GeneralTextHighlight>
          </GeneralSectionTitle>
          <ul className={stls.leastDocuments}>
            {leastDocuments.map((document, idx) => (
              <li key={document + idx} className={stls.document}>
                <IconCheck classNames={[stls.iconCheck]} withBg />
                <span className={stls.text}>{document}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          className={stls.right}
          // style={{
          //   transform: `translateY(${
          //     (-offsetY + (scrollHeight * 25) / 100) * 0.3
          //   }px)`
          // }}
        >
          <IconPaperPage
            classNames={[stls.iconPaperPage, stls.tabletLaptopDesktop]}
          />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionLeastDocuments
