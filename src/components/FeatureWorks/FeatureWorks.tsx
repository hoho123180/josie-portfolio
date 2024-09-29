import { FC } from 'react'
import styles from './FeatureWorks.module.css'
import WorksHeader from './WorksHeader'
import FeatureWork from './FeatureWork'
import { Works } from '@/configs/works'
import Button from '../Button/Button'

interface Prop {

}

const FeatureWorks: FC<Prop> = ({ }) => {
  return (
    <div className={styles.container}>
      <WorksHeader
        title='Core Feature @Cake'
        description='Projects below are all conducted by 1 product designer(me), with involvement in discussions and decisions on functionality.'
      />
      <div className={styles.workList}>
        {Works.core.map(work => <FeatureWork work={work} key={work.title} />)}
      </div>
      <WorksHeader
        title='Other Works'
        description='Including side project and project in WeMo Scooter'
      />
      <div className={styles.otherWorkList}>
        {Works.other.map(work => <FeatureWork work={work} key={work.title} />)}
      </div>

      <div className={styles.buttonGroup} style={{ padding: 32, marginInline: 'auto' }}>
        <Button title='More Visual Works' />
      </div>
    </div>
  )
}

export default FeatureWorks