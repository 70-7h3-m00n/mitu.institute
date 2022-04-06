import stls from '@/styles/pages/PagePayment.module.sass'
import type { NextPage } from 'next'
import { TypePageHomeProps } from '@/types/index'
import { GetStaticProps } from 'next'
import { useContext, useEffect, MouseEventHandler } from 'react'
import cn from 'classnames'
import Popup from 'reactjs-popup'
import { routesFront, routesExternal } from '@/config/index'
import { getClassNames } from '@/helpers/index'
import { handleGetStaticProps } from '@/lib/index'
import {
  ContextCategoriesContext,
  ContextStudyFieldContext,
  ContextProgramsContext,
  ContextQuestionsContext,
  ContextProgramContext
} from '@/context/index'
import { Wrapper } from '@/components/layout'
import { GeneralSectionTitle, GeneralPopup } from '@/components/general'
import { UIFormAlpha } from '@/components/uiforms'
import { BtnAlpha } from '@/components/btns'
import { ImgWallet } from '@/components/imgs'

const PagePayment: NextPage<TypePageHomeProps> = ({
  categories,
  programs,
  questions
}) => {
  const { setCategories } = useContext(ContextCategoriesContext)
  const { setStudyField } = useContext(ContextStudyFieldContext)
  const { setPrograms } = useContext(ContextProgramsContext)
  const { setQuestions } = useContext(ContextQuestionsContext)
  const { setProgram } = useContext(ContextProgramContext)

  useEffect(() => {
    setCategories({
      payload: { categories, curCategorySlug: categories?.[0]?.slug || null }
    })
    setStudyField({ payload: null })
    setPrograms({ payload: programs })
    setQuestions({ payload: questions })
    setProgram({ payload: null })
  }, [categories, programs, questions])

  const paymentSystems = [
    'Visa International',
    'Mastercard Worldwide',
    'JCB',
    'МИР'
  ]

  const notedPoints = [
    'Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL. В случае если Ваш банк поддерживает технологию безопасного проведения интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure, для проведения платежа также может потребоваться ввод специального пароля',
    'В случае возврата, срок возврата составляет 30 дней с момента получения образовательных материалов. Возврат переведённых средств производится на Ваш банковский счёт в течение 5-30 рабочих дней (срок зависит от банка, который выдал Вашу банковскую карту)',
    'Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB',
    'Пожалуйста, не забудьте указать ФИО и номер договора на странице с оплатой'
  ]

  return (
    <>
      <section className={stls.sectionHero}>
        <Wrapper>
          <h1 className={stls.title}>Способы оплаты</h1>
          <GeneralSectionTitle classNames={[stls.GeneralSectionTitle]}>
            Банковской картой
          </GeneralSectionTitle>
          <div className={stls.content}>
            <div className={stls.left}>
              <p className={stls.p}>
                Для проведения оплаты обучения, с помощью банковской карты, ниже
                на этой странице необходимо нажать кнопку Оплата банковской
                картой. Оплата происходит через ПАО СБЕРБАНК с использованием
                банковских карт следующих платёжных систем:
              </p>

              <ul className={stls.paymentSystems}>
                {paymentSystems.map((item, idx) => (
                  <li key={`${item}-${idx}`} className={stls.paymentSystem}>
                    <p className={stls.paymentSystemP}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className={stls.right}>
              <ImgWallet />
            </div>
          </div>
          <div className={stls.btns}>
            <BtnAlpha
              variant='delta'
              classNames={[stls.btnVDelta]}
              tag='a'
              href={routesExternal.payment}
              target={'_blank'}>
              Оплата банковской картой
            </BtnAlpha>

            <Popup
              trigger={() => (
                <BtnAlpha
                  variant='delta-reverse'
                  classNames={[stls.btnVDeltaReverse]}>
                  Помощь
                </BtnAlpha>
              )}
              modal
              lockScroll
              nested
              closeOnDocumentClick>
              {(close: MouseEventHandler) => (
                <GeneralPopup close={close}>
                  <UIFormAlpha isPopup />
                </GeneralPopup>
              )}
            </Popup>
          </div>
        </Wrapper>
      </section>
      <section className={stls.sectionNotedPoints}>
        <Wrapper>
          <ul className={stls.notedPoints}>
            {notedPoints.map((item, idx) => (
              <li
                key={`PagePayment_notedPoints_item-${idx}`}
                className={stls.notedPoint}>
                <p className={stls.notedPointP}>{item}</p>
              </li>
            ))}
          </ul>
        </Wrapper>
      </section>
    </>
  )
}

export default PagePayment

export const getStaticProps: GetStaticProps = async context =>
  await handleGetStaticProps({ page: routesFront.home, context })
