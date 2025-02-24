import { gmailLink } from '@/configs/links'
import { Work } from '@/configs/works'
import { faWrench } from '@fortawesome/free-solid-svg-icons'
import Image from 'next/image'
import { FC } from 'react'
import A from '../A'
import FAIcon from '../FAIcon'
import Tag from '../Tag/Tag'
import styles from './FeatureWorks.module.css'

interface Prop {
  work: Work
}

const FeatureWork: FC<Prop> = ({ work }) => {
  const { title, description, image, tags, href, isWorking } = work
  return (
    <div className={styles.featureWork}>
      <div className={styles.imageContainer}>
        <Image alt='title' src={`/images/${image}`} fill />
        {isWorking && (
          <div className={styles.seal}>
            <span>Working...</span>
            <FAIcon icon={faWrench} size={36} />
          </div>
        )}
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h2> {title} </h2>
          {isWorking && <Tag title='WORKING' isWarning={isWorking} />}
        </div>
        {isWorking && (
          <h6>
            The project has not yet been documented. If you&apos;d like to learn
            more details, feel free to schedule a time for a verbal
            introduction.
          </h6>
        )}
        <p>{description}</p>
        <ul className={styles.tagList}>
          {tags.map(tag => (
            <Tag key={tag} title={tag} isButton />
          ))}
        </ul>
        <A href={isWorking ? gmailLink : href}>
          <button
            className={styles.button}
            data-color={isWorking ? 'accent' : ''}>
            {isWorking ? 'Contact to learn more detail' : 'See More'}
          </button>
        </A>
      </div>
    </div>
  )
}

export default FeatureWork
