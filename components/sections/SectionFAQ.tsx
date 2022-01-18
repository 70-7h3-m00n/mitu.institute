import stls from '@/styles/components/sections/SectionFAQ.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralCollapse } from '@/components/general'
import { FormLead } from '@/components/forms'

type TypeSectionFAQProps = TypeClassNames

const SectionFAQ = ({ classNames = [] }: TypeSectionFAQProps) => {
  const qna = [
    {
      title: 'Как у вас дела?',
      text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать.Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. '
    },
    {
      title: 'Как у вас дела?',
      text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать.Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. '
    },
    {
      title: 'Как у вас дела?',
      text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать.Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. '
    },
    {
      title: 'Как у вас дела?',
      text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать.Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать. '
    },
    {
      title: 'Как у вас дела?',
      text: 'Есть ощущение «что ходите по кругу», ситуации повторяются, вы не знаете что делать.'
    }
  ]

  return (
    <section className={cn(stls.container, getClassNames({ classNames }))}>
      <Wrapper>
        <GeneralSectionTitle classNames={[stls.title]}>
          Нас часто спрашивают
        </GeneralSectionTitle>
        <div className={stls.content}>
          <div className={stls.questions}>
            {qna.map((item, idx) => {
              return (
                <GeneralCollapse
                  key={idx}
                  classNames={[stls.collapse]}
                  title={item.title}>
                  <p className={stls.text}>{item.text}</p>
                </GeneralCollapse>
              )
            })}
          </div>
          <FormLead classNames={[stls.form]} />
        </div>
      </Wrapper>
    </section>
  )
}

export default SectionFAQ
