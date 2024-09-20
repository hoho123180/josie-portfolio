import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FC } from 'react'
import FAIcon from '../FAIcon'
import styles from './Button.module.css'

interface Prop {
  title: string
  type?: 'primary' | 'secondary' | 'tertiary'
  size?: 'large' | 'medium'
  leadingIcon?: IconDefinition
  trailingIcon?: IconDefinition
  disabled?: boolean
}

const Button: FC<Prop> = ({ title, type, size, leadingIcon, trailingIcon, disabled }) => {
  return (
    <div
      className={`${styles.container} ${disabled ? styles.disabled : ''}`}
      data-type={type ?? 'primary'}
      data-size={size ?? 'large'}
    >
      {leadingIcon && <FAIcon icon={leadingIcon} size={20} />}
      {title}
      {trailingIcon && <FAIcon icon={trailingIcon} size={20} />}
    </div>
  )
}

export default Button