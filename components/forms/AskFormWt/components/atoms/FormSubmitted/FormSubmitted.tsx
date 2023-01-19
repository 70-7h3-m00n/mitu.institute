import { VscCheck } from 'react-icons/vsc'
import stls from './FormSubmitted.module.sass'

export const FormSubmitted = () => {
  return (
    <div className={stls.formSubmitted}>
      <div className={stls.circle}>
        <VscCheck color='white' className={stls.check} />
      </div>
      <h3 className={stls.thanksForSubmitting}>Спасибо за заявку!</h3>
      <p className={stls.weWillContactYouPara}>
        Менеджер свяжется с Вами в ближайшее время
      </p>
    </div>
  )
}
export default FormSubmitted
