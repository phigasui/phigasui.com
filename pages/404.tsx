import Link from 'next/link'
import Image from 'next/image'
import styles from './errors.module.css'
import { SEO } from '../components/SEO/SEO'

const Custom404 = () => (
  <>
    <SEO title="404 Not Found" />
    <Link href="/" className={styles.top}>
      <Image
        className={styles.image}
        src="/images/alpagasui.png"
        alt="alpagasui"
        width={48}
        height={48}
      />
      <span className={styles.title}>phigasui.com</span>
    </Link>
    <h2>404 - Page Not Found</h2>
  </>
)

export default Custom404
