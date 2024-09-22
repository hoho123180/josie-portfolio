import { FC } from 'react'
import styles from './FeatureWorks.module.css'
import Image from 'next/image'
import { Work } from '@/configs/works'
import Tag from '../Tag/Tag'
import Button from '../Button/Button'
import A from '../A'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { gmailLink } from '@/configs/links'

interface Prop {
  work: Work
}

const FeatureWork: FC<Prop> = ({ work }) => {
  const { title, description, image, tags, href, isWorking } = work
  const isMailLink = href.includes('mail.google.com')
  return (
    <div className={styles.featureWork}>
      <div className={styles.imageContainer}>
        <Image
          alt='title'
          src={`/images/${image}`}
          fill
        />
      </div>
      <div className={styles.content}>
        <div className={styles.contentHeader}>
          <h2> {title} </h2>
          {isWorking && <Tag title='WORKING' isWarning={isWorking} />}
        </div>
        {isWorking && <h6>The project has not yet been documented. If you'd like to learn more details, feel free to schedule a time for a verbal introduction.</h6>}
        <p>{description}</p>
        <ul className={styles.tagList}>
          {tags.map(tag => <Tag key={tag} title={tag} isButton />)}
        </ul>
        <A href={isWorking ? gmailLink : href} className={styles.buttonWrapper} data-color={isWorking ? 'accent' : ''}>
          <Button
            title={isWorking ? 'Contact to learn more detail' : 'See More'}
            type='secondary'
            size='medium'
            trailingIcon={isWorking ? undefined : faArrowRight}
          />
        </A>
      </div>
    </div>
  )
}

export default FeatureWork