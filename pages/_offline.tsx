import { phoneNumber } from '@/config/index'

const _offline = () => {
  return (
    <div>
      <p>
        Подключение к сети отсутствует. Пожалуйста, попробуйте позже или
        позвоните нам по номеру
        <a href={phoneNumber.href}>{phoneNumber.val}</a>
      </p>
    </div>
  )
}

export default _offline
