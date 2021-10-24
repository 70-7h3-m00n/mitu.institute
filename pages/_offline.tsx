import { number } from '@/data/contact'
import { Wrapper } from '@/components/layout'

const _offline = () => {
  return (
    <div>
      <Wrapper>
        <p>
          Подключение к сети отсутствует. Пожалуйста, попробуйте позже или
          позвоните нам по номеру
          <a href={number.href}>{number.val}</a>
        </p>
      </Wrapper>
    </div>
  )
}

export default _offline
