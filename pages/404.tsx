import Link from 'next/link'
import styles from './errors.module.css'

const Custom404 = () => (
  <>
    <Link href="/" className={styles.top}>
      <img className={styles.image} src="/images/alpagasui.png"/>
      <span className={styles.title}>phigasui.com</span>
    </Link>
    <h2>404 - Page Not Found</h2>
  </>
)

export default Custom404
