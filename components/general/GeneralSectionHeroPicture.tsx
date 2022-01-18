import stls from '@/styles/components/general/GeneralSectionHeroPicture.module.sass'
import { TypeClassNames } from '@/types/index'
import { useState, useEffect } from 'react'
import cn from 'classnames'
import { getClassNames } from '@/helpers/index'
import { ImgHeroLady } from '@/components/imgs'
import {
  IconChat,
  IconLightBulb,
  IconVideoOnStand,
  IconMortarboardAlt,
  IconMagnifyingGlass
} from '@/components/icons'

type TypeGeneralSectionHeroPictureProps = TypeClassNames

const GeneralSectionHeroPicture = ({
  classNames
}: TypeGeneralSectionHeroPictureProps) => {
  const [isTurnedOn, setIsTurnedOn] = useState(false)

  const [offsetY, setOffsetY] = useState(0)
  const [scrollHeight, setScollHeight] = useState(0)
  const handleScroll = () => {
    setOffsetY(window.pageYOffset)
    setScollHeight(document.body.scrollHeight)
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      className={
        cn([stls.container], getClassNames({ classNames })) || undefined
      }>
      <IconChat
        classNames={[stls.icon, stls.chat]}
        style={{
          transform: `translateY(${
            (-offsetY + scrollHeight / 100) * 0.14
          }px) rotate(-29deg)`
        }}
      />
      <IconLightBulb
        classNames={[
          stls.icon,
          stls.lightBulb,
          cn({ [stls.isTurnedOn]: isTurnedOn })
        ]}
        style={{
          transform: `translateY(${
            (-offsetY + scrollHeight / 100) * 0.12
          }px) rotate(24deg)`
        }}
        onMouseEnter={() => setIsTurnedOn(!isTurnedOn)}
        onTouchStart={() => setIsTurnedOn(!isTurnedOn)}
      />
      <IconMagnifyingGlass
        classNames={[stls.icon, stls.magnifyingGlass]}
        style={{
          transform: `translateY(${
            (-offsetY + scrollHeight / 100) * 0.26
          }px) rotate(29deg)`
        }}
      />
      <IconVideoOnStand
        classNames={[stls.icon, stls.videoOnStand]}
        style={{
          transform: `translateY(${
            (-offsetY + scrollHeight / 100) * 0.21
          }px) rotate(-25deg)`
        }}
      />
      <IconMortarboardAlt
        classNames={[stls.icon, stls.graduationHat]}
        style={{
          transform: `translateY(${
            (-offsetY + scrollHeight / 100) * 0.23
          }px) rotate(15deg)`
        }}
      />
      <ImgHeroLady />
    </div>
  )
}

export default GeneralSectionHeroPicture
