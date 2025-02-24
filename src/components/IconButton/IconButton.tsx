import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FC } from 'react'
import FAIcon from '../FAIcon'
import styles from './IconButton.module.css'

interface Prop {
  icon: IconDefinition
  type?: 'primary' | 'secondary' | 'tertiary'
  size?: 32 | 36 | 48
  disabled?: boolean
}

const IconButton: FC<Prop> = ({ icon, type, size, disabled }) => {
  return (
    <div
      className={`${styles.container} ${disabled ? styles.disabled : ''}`}
      data-type={type ?? 'primary'}
      style={{
        minWidth: size ?? 32,
        width: size ?? 32,
        minHeight: size ?? 32,
        height: size ?? 32,
      }}>
      <FAIcon icon={icon} size={sizeMap[size ?? 32]} />
    </div>
  )
}

export default IconButton

const sizeMap = {
  32: 20,
  36: 24,
  48: 36,
} as const
