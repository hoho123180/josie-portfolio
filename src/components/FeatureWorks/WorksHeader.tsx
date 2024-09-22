import { FC } from 'react'
import styles from './FeatureWorks.module.css'

interface Prop {
  title: string
  description: string
}

const WorksHeader: FC<Prop> = ({ title, description }) => {
  return (
    <div className={styles.worksHeader}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.divider} />
      <p className={styles.description}>{description}</p>
    </div>
  )
}

export default WorksHeader