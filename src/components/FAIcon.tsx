import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FC } from 'react'

type Prop = {
  icon: IconDefinition
}

const FAIcon: FC<Prop> = ({ icon }) => {
  return <FontAwesomeIcon icon={icon} style={{ color: 'currentcolor', width: '1em', height: '1em' }} />
}

export default FAIcon