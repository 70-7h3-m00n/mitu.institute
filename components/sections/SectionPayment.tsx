import stls from '@/styles/components/sections/SectionPayment.module.sass'
import { TypeClassNames } from '@/types/index'
import { MouseEventHandler } from 'react'
import Popup from 'reactjs-popup'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'
import { ImgPaymentCard } from '@/components/imgs'
import { BtnAlpha } from '../btns'
import routesFront from '@/config/routesFront'
import { GeneralPopup } from '../general'
import { UIFormAlpha } from '../uiforms'



type TypeSectionPaymentProps = TypeClassNames

const SectionPayment = ({ classNames = [] }: TypeSectionPaymentProps) => {
    return (
        <section className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper>
                <h1 className={stls.title}>Способы оплаты</h1>
                <div className={stls.content}>
                    <div className={stls.semantic}>
                        <h2 className={stls.subtitle}>Банковской картой</h2>
                        <p className={stls.description}>
                            Для проведения оплаты обучения, с помощью банковской карты, ниже на этой странице необходимо нажать кнопку Оплата банковской картой. Оплата происходит через ПАО СБЕРБАНК
                            с использованием банковских карт следующих платёжных систем:
                        </p>
                        <ul className={stls.list}>
                            <li className={stls.item}>Visa International</li>
                            <li className={stls.item}>Mastercard Worldwide</li>
                            <li className={stls.item}>JCB</li>
                            <li className={stls.item}>МИР</li>
                        </ul>
                    </div>
                    <ImgPaymentCard classNames={[stls.img]} />
                </div>
                <div className={stls.btns}>
                    <BtnAlpha classNames={[stls.link]} variant='beta' href={routesFront.home} tag='Link'>Оплата банковской картой</BtnAlpha>
                    <Popup
                        trigger={() => (
                            <BtnAlpha classNames={[stls.btn]} variant='beta-reverse'>Помощь</BtnAlpha>
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
    )
}

export default SectionPayment
