import stls from '@/styles/components/sections/SectionProgramForWhom.module.sass'
import { TypeClassNames } from '@/types/index'
import { Fragment, useContext } from 'react'
import cn from 'classnames'
import { mituinstitute } from '@/config/index'
import { getClassNames, getImageHeight } from '@/helpers/index'
import { useAt } from '@/hooks/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import { IconWave } from '@/components/icons'
import { ImgForWhom } from '@/components/imgs'

type TypeSectionProgramForWhomProps = TypeClassNames

const SectionProgramForWhom = ({
  classNames
}: TypeSectionProgramForWhomProps) => {
  const at = useAt()

  const translations = {
    title: at.uz ? 'Ushbu dastur kim uchun?' : 'Для кого эта программа?',
    descAdditional: at.uz
      ? "Institutning o'quv dasturlari sertifikatlangan va akkreditatsiyadan o'tgan. O'qishni tugatgandan so'ng, belgilangan shakldagi oliy ma'lumot to'g'risida diplom beriladi"
      : 'Образовательные программы института сертифицированы и имеют аккредитацию. По окончанию обучения выдается диплом о переподготовке',
    descNotAdditional: at.uz
      ? "Institutning ta'lim dasturlari sertifikatlangan va akkreditatsiya qilingan. O‘qishni tugatgandan so‘ng belgilangan namunadagi oliy ma’lumot to‘g‘risidagi diplom beriladi"
      : 'Образовательные программы института сертифицированы и имеют аккредитацию. По окончанию обучения выдается диплом о высшем образовании установленного образца',
    descNotMituinstitute: at.uz
      ? "Institutning ta'lim dasturlari akkreditatsiyadan o'tgan. O'qishni tugatgandan so'ng, oliy ma'lumot to'g'risidagi nufuzli diplom beriladi"
      : 'Образовательные программы института аккредитованы. По окончанию обучения выдается престижный диплом о высшем образовании'
  }

  const { program } = useContext(ContextProgramContext)

  if (!program?.forWhom || program?.forWhom?.length === 0) return <></>

  const atAdditional = program?.category?.type === 'additional'

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>{translations.title}</GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.left}>
            <p className={stls.desc}>
              {mituinstitute
                ? atAdditional
                  ? translations.descAdditional
                  : translations.descNotAdditional
                : translations.descNotMituinstitute}
            </p>
            {!atAdditional && <IconWave classNames={[stls.icon]} />}
            <ImgForWhom
              classNames={[stls.img, stls.laptopDesktop]}
              src={program.forWhomPicture?.url}
              width={program.forWhomPicture?.url ? 592 : undefined}
              height={
                program.forWhomPicture?.url
                  ? getImageHeight({
                      width: 592,
                      widthInitial: program.forWhomPicture?.width,
                      heightInitial: program.forWhomPicture?.height
                    })
                  : undefined
              }
              filter
            />
          </div>
          <div className={stls.right}>
            <ul className={stls.forWhom}>
              {program.forWhom
                .filter(item => item.title?.[0]?.titlePart)
                .map((item, idx) => (
                  <li
                    key={
                      item.title?.reduce(
                        (acc, cur) => acc + cur.titlePart,
                        ''
                      ) || 'SectionProgramForWhom_item' + idx
                    }
                    className={stls.forWhomItem}>
                    <h3 className={stls.itemTitle}>
                      {item.title?.map((part, idx) => (
                        <Fragment key={part.titlePart + idx}>
                          {part.highlight ? (
                            <GeneralTextHighlight>
                              {part.titlePart}
                            </GeneralTextHighlight>
                          ) : (
                            part.titlePart + ' '
                          )}
                        </Fragment>
                      ))}
                    </h3>
                    <p className={stls.itemDesc}>{item.desc}</p>
                  </li>
                ))}
            </ul>
            <ImgForWhom
              classNames={[stls.img, stls.phoneTablet]}
              src={program.forWhomPicture?.url}
              width={program.forWhomPicture?.url ? 640 : undefined}
              height={
                program.forWhomPicture?.url
                  ? getImageHeight({
                      width: 640,
                      widthInitial: program.forWhomPicture?.width,
                      heightInitial: program.forWhomPicture?.height
                    })
                  : undefined
              }
              filter
            />
          </div>
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionProgramForWhom
