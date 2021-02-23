const Sounds = () => {
  return (
    <div>
      <h1>SOUNDS</h1>
      <div>
        <SoundCloudContent trackId={241113779} />
        <SoundCloudContent trackId={94333477} />
        <SoundCloudContent trackId={92816817} />
      </div>
    </div>
  )
}

const SoundCloudContent = ({ trackId }: { trackId: number }) => (
  <div>
    <iframe width="100%" height="166" scrolling="no" frameBorder="no" allow="autoplay" src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}></iframe>
  </div>
)

export default Sounds
