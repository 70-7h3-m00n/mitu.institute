import stls from '@/styles/components/sections/SectionProgramForWhom.module.sass'
import { TypeClassNames } from '@/types/index'
import { Fragment, useContext } from 'react'
import cn from 'classnames'
import { getClassNames, getImageHeight } from '@/helpers/index'
import { ContextProgramContext } from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralTextHighlight } from '@/components/general'
import { IconWave } from '@/components/icons'
import { ImgForWhom } from '@/components/imgs'
import mituinstitute from '@/config/mituinstitute'

type TypeSectionProgramForWhomProps = TypeClassNames

const SectionProgramForWhom = ({
  classNames
}: TypeSectionProgramForWhomProps) => {
  const { program } = useContext(ContextProgramContext)

  if (!program?.forWhom) return <></>

  return (
    <section
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <Wrapper>
        <GeneralSectionTitle>Для кого эта программа?</GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.left}>
            <p className={stls.desc}>
              Образовательные программы института аккредитованы
              {mituinstitute && 'сертифицированы и имеют аккредитацию'}. По
              окончанию обучения выдается{' '}
              {mituinstitute
                ? 'диплом о высшем образовании государственного образца'
                : 'престижный диплом о высшем образовании'}
            </p>
            <IconWave classNames={[stls.icon]} />
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
