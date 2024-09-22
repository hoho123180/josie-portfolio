import { FC } from 'react'
import styles from './FeatureWorks.module.css'
import WorksHeader from './WorksHeader'
import FeatureWork from './FeatureWork'
import { Works } from '@/configs/works'

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
        {Works.core.map(work => <FeatureWork work={work} />)}
      </div>
      <WorksHeader
        title='Other Works'
        description='Including side project and project in WeMo Scooter'
      />
      {Works.other.map(work => <FeatureWork work={work} />)}
    </div>
  )
}

export default FeatureWorks