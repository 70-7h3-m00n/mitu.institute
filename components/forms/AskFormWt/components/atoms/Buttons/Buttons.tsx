import React from 'react'
import { waysToContact } from '../../../data'
import { AskFormState } from '../../../types'
import stls from './Buttons.module.sass'
import { contactMethods } from '../../../data/waysToContact'
import cn from 'classnames'

type Props = Pick<
  AskFormState,
  | 'contactPath'
  | 'setContactPath'
  | 'isStageSubmit'
  | 'submit'
  | 'isDirty'
  | 'isValid'
>

const Buttons: React.FC<Props> = ({
  contactPath,
  setContactPath,
  isStageSubmit,
  submit,
  isDirty,
  isValid
}): JSX.Element => {
  return (
    <div className={cn(stls.wrap, !isStageSubmit && stls.methodWrap)}>
      {!contactPath ? (
        <>
          <p className={stls.whereTo}>Куда ответить:</p>
          {waysToContact.map((way, idx) => (
            <button
              key={idx}
              className={cn(stls.buttonWays, stls[way.contactButtonClass])}
              onClick={() => setContactPath(way.name)}>
              <way.svg title={way.name} className={stls.waysSvg} />
            </button>
          ))}
        </>
      ) : !isStageSubmit ? (
        contactMethods.map((method, idx) => (
          <button
            key={idx}
            className={stls.buttonMethods}
            onClick={() => setContactPath(method.name)}>
            <div className={stls.methodName}>
              <method.icon title={method.name} className={stls.methodSvg} />
              {method.name}
            </div>
          </button>
        ))
      ) : (
        <button
          type='submit'
          className={stls.buttonSubmit}
          onClick={submit}
          disabled={isDirty && !isValid}>
          Отправить
        </button>
      )}
    </div>
  )
}

export default Buttons
