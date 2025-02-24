import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

type Prop = {
  icon: IconDefinition
  size?: IconSizes
}

export type IconSizes = 18 | 20 | 24 | 28 | 30 | 36 | 48

const FAIcon: FC<Prop> = ({ icon, size }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: size ?? '1em',
        width: size ?? '1em',
        minHeight: size ?? '1em',
        height: size ?? '1em',
      }}>
      <FontAwesomeIcon
        icon={icon}
        style={{
          color: 'currentcolor',
          width: size ? fontSizeMap[size] : '1em',
          height: size ? fontSizeMap[size] : '1em',
        }}
      />
    </div>
  )
}

export default FAIcon

const fontSizeMap = {
  18: 12,
  20: 14,
  24: 16,
  28: 20,
  30: 20,
  36: 24,
  48: 32,
} as { [size: number]: number }
