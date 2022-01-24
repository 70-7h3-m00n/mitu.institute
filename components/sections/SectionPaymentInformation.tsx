import stls from '@/styles/components/sections/SectionPaymentInformation.module.sass'
import { TypeClassNames } from '@/types/index'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { Wrapper } from '@/components/layout'



type TypeSectionPaymentInformationProps = TypeClassNames

const SectionPaymentInformation = ({ classNames = [] }: TypeSectionPaymentInformationProps) => {
    return (
        <section className={cn(stls.container, getClassNames({ classNames }))}>
            <Wrapper>
                <ul className={stls.list}>
                    <li className={stls.item}>
                        <p className={stls.text}>
                            Для оплаты (ввода реквизитов Вашей карты) Вы будете перенаправлены на платёжный шлюз ПАО СБЕРБАНК. Соединение с платёжным шлюзом и передача информации осуществляется в защищённом режиме с использованием протокола шифрования SSL.
                            В случае если Ваш банк поддерживает технологию безопасного проведения
                            интернет-платежей Verified By Visa, MasterCard SecureCode, MIR Accept, J-Secure,
                            для проведения платежа также может потребоваться ввод специального пароля
                        </p>
                    </li>
                    <li className={stls.item}>
                        <p className={stls.text}>
                            В случае возврата, срок возврата составляет 30 дней с момента получения образовательных материалов. Возврат переведённых средств производится на Ваш банковский счёт в течение 5-30 рабочих дней (срок зависит от банка, который выдал Вашу банковскую карту)
                        </p>
                    </li>
                   
                </ul>
                <ul className={stls.list}>
                <li className={stls.item}>
                        <p className={stls.text}>
                            Настоящий сайт поддерживает 256-битное шифрование. Конфиденциальность сообщаемой персональной информации обеспечивается ПАО СБЕРБАНК. Введённая информация не будет предоставлена третьим лицам за исключением случаев, предусмотренных законодательством РФ. Проведение платежей по банковским картам осуществляется в строгом соответствии с требованиями платёжных систем МИР, Visa Int., MasterCard Europe Sprl, JCB
                        </p>
                    </li>
                    <li className={stls.item}>
                        <p className={stls.text}>
                            Пожалуйста, не забудьте указать ФИО и номер договора на странице с оплатой
                        </p>
                    </li>
                </ul>
            </Wrapper>
        </section>
    )
}

export default SectionPaymentInformation
