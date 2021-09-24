import Image from 'next/image'
import styles from './gallery.module.css'
import { ContentLayout } from '../components/Layouts/ContentLayout'

const Gallery = () => {
  return (
    <ContentLayout>
      <div className={styles.gallery}>
        <div className={styles.gallery_item}>
          <Image src="/images/alpagasui.png" width="150" height="150"/>
          <span>alpagasui</span>
        </div>
        <div className={styles.gallery_item}>
          <Image src="/images/GASHIMETAL.png" width="150" height="150"/>
          <span>GASHIMETAL</span>
        </div>
        <div className={styles.gallery_item}>
          <Image src="/images/samuragasui.png" width="150" height="150"/>
          <span>samuragasui</span>
        </div>
        <div className={styles.gallery_item}>
          <Image src="/images/ramengasui.jpg" width="150" height="150"/>
          <span>ramengasui</span>
        </div>
      </div>
    </ContentLayout>
  )
}

export default Gallery
