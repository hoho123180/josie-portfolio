import FeatureWorks from '@/components/FeatureWorks/FeatureWorks'
import styles from './page.module.css'
import HeroSection from '@/components/HeroSection/HeroSection'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        {/* Hero Section */}
        <HeroSection />
        {/* Feature Works Section */}
        <FeatureWorks />
      </div>
    </main>
  )
}
