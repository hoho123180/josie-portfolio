'use client'
import { FC, useEffect, useState } from 'react';
import styles from './HeroSection.module.css';

interface Prop {

}

const DialogAnimation: FC<Prop> = ({ }) => {
  const [marquee, setMarquee] = useState('');
  const [render, setRender] = useState(0);
  const handleHover = () => {
    if (marquee !== message) return
    setRender(prev => prev + 1)
    setMarquee('')
  }
  useEffect(() => {
    if (marquee !== message) {
      if (marquee.length > message.length) setMarquee(message)
      setTimeout(() => {
        console.log(marquee)
        setMarquee(prev => prev + (message[prev.length] ?? ''))
      }, marquee === '' ? 140 : 70);
    }
  }, [render, marquee])
  return (
    <div className={styles.dialogWrapper} onMouseEnter={handleHover}>

      <div className={styles.dialog}
        style={{
          transform: marquee === '' ? 'scale(0)' : 'scale(1)',
          transition: marquee === '' ? 'transform 0s' : 'transform 0.5s'
        }}
      >
        <span>{marquee}</span>
      </div>

      {/* 佔位用的 */}
      <div className={`${styles.dialog} ${styles.hide}`}>
        <span>{message}</span>
      </div>
    </div>
  )
}

export default DialogAnimation

const message = 'Let’s collaborate!'