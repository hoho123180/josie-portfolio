import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FC } from 'react'
import styles from './Button.module.css'

interface Prop {
  title: string
  type?: 'primary' | 'secondary' | 'tertiary'
  size?: 'large' | 'medium'
  leadingIcon?: IconDefinition
  trailingIcon?: IconDefinition
}

const Button: FC<Prop> = ({ title, type, size }) => {
  return (
    <div
      className={styles.container}
      data-type={type ?? 'primary'}
      data-size={size ?? 'large'}
    >
      {title}
    </div>
  )
}

export default Button