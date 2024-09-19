import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

type Prop = {
  icon: IconDefinition
  size?: 18 | 20 | 24 | 28 | 30 | 36 | 48
}

const FAIcon: FC<Prop> = ({ icon, size }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      style={{
        color: 'currentcolor',
        width: size ?? '1em',
        height: size ?? '1em',
      }}
    />
  )
}

export default FAIcon