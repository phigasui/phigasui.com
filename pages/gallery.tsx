import Image from 'next/image'
import styles from './gallery.module.css'
import { ContentLayout } from '../components/Layouts/ContentLayout'

const images = [
  { path: '/images/alpagasui.png', name: 'alpagasui' },
  { path: '/images/GASHIMETAL.png', name: 'GASHIMETAL' },
  { path: '/images/samuragasui.png', name: 'samuragasui' },
  { path: '/images/ramengasui.jpg', name: 'ramengasui' },
]

const Gallery = () => {
  return (
    <ContentLayout>
      <div className={styles.gallery}>
        {images.map(image => (
          <div className={styles.gallery_item}>
            <Image src={image.path} width="100%" height="100%"/>
            <span>{image.name}</span>
          </div>
        ))}
      </div>
    </ContentLayout>
  )
}

export default Gallery
