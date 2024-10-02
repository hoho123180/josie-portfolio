'use client'
import { HeaderLinks } from '@/configs/links';
import { Modal } from '@chakra-ui/react';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FC, useState } from 'react';
import A from '../A';
import FAIcon from '../FAIcon';
import styles from './Header.module.css';

interface Prop {

}

const NavBurger: FC<Prop> = ({ }) => {
  const [isNavModalOpen, setIsNavModalOpen] = useState(true);
  const toggleBurger = () => setIsNavModalOpen(prev => !prev)
  return (
    <>
      <div className={styles.burger} onClick={toggleBurger} >
        <div className={styles.line} />
        <div className={styles.line} />
        <div className={styles.line} />
      </div>
      <Modal isOpen={isNavModalOpen} onClose={toggleBurger}>
        <div className={`${styles.navModal} ${isNavModalOpen ? styles.show : ''}`}>
          <header>
            <div onClick={toggleBurger} className={styles.closeButton}>
              <FAIcon icon={faClose} size={36} />
            </div>
          </header>
          <div className={styles.navModalContent}>
            {HeaderLinks.map(link => (
              <A key={link.title} href={link.href} className={styles.navLinkMobile}>
                {link.title}
              </A>
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default NavBurger