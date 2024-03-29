import styles from './sounds.module.css'
import { ContentLayout } from '../components/Layouts/ContentLayout'

const trackIds = [241113779, 94333477, 92816817]

const Sounds = () => {
  return (
    <ContentLayout>
      <div className={styles.sounds}>
        {trackIds.map(trackId => <SoundCloudContent trackId={trackId} />)}
      </div>
    </ContentLayout>
  )
}

const SoundCloudContent = ({ trackId }: { trackId: number }) => (
  <div className={styles.sounds_item}>
    <iframe width="100%" height="100%" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}></iframe>
  </div>
)

export default Sounds
