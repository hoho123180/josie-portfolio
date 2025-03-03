import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FC } from 'react'
import FAIcon, { IconSizes } from '../FAIcon'
import styles from './Button.module.css'

interface Prop {
  title: string
  type?: 'primary' | 'secondary' | 'tertiary'
  size?: 'large' | 'medium'
  leadingIcon?: IconDefinition
  trailingIcon?: IconDefinition
  leadingIconSize?: IconSizes
  trailingIconSize?: IconSizes
  disabled?: boolean
  forceColor?: string
}

const Button: FC<Prop> = ({
  title,
  type,
  size,
  leadingIcon,
  trailingIcon,
  leadingIconSize,
  trailingIconSize,
  disabled,
  forceColor,
}) => {
  return (
    <button
      className={`${styles.container} ${disabled ? styles.disabled : ''}`}
      data-type={type ?? 'primary'}
      data-size={size ?? 'large'}
      data-force-color={Boolean(forceColor !== undefined)}>
      {leadingIcon && (
        <FAIcon icon={leadingIcon} size={leadingIconSize ?? 20} />
      )}
      <span>{title}</span>
      {trailingIcon && (
        <FAIcon icon={trailingIcon} size={trailingIconSize ?? 20} />
      )}
    </button>
  )
}

export default Button
