'use client'
import { FC } from 'react'
import styles from './Tag.module.css'

interface Prop {
  title: string
  isButton?: boolean
  isWarning?: boolean
  detectSelectedTag?: boolean // 是否要根據 global state 做 highlight
}

const Tag: FC<Prop> = ({ title, isButton, isWarning, detectSelectedTag }) => {

  const handleClick = () => {

  }

  return (
    <div
      className={`${styles.container} ${isButton ? styles.button : ''} ${isWarning ? styles.warning : ''}`}
      onClick={handleClick}
    >
      {title}
    </div>
  )
}

export default Tag