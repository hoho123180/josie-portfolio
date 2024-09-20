import { IconDefinition } from '@fortawesome/fontawesome-svg-core'
import { FC, ReactNode } from 'react'
import A from '../A'
import FAIcon from '../FAIcon'
import styles from './TextLink.module.css'

interface Prop {
  title: string
  href?: string
  type?: 'primary' | 'secondary'
  leadingIcon?: IconDefinition
  trailingIcon?: IconDefinition
  trailingComponent?: ReactNode
}

const TextLink: FC<Prop> = ({ title, href, type, leadingIcon, trailingIcon, trailingComponent }) => {
  return (
    <A
      href={href}
      className={styles.container}
      data-type={type ?? 'primary'}
    >
      {leadingIcon && <FAIcon icon={leadingIcon} size={20} />}
      <span>{title}</span>
      {trailingIcon && <FAIcon icon={trailingIcon} size={20} />}
      {trailingComponent}
    </A>
  )
}

export default TextLink