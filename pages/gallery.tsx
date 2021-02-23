import Image from 'next/image'

const Gallery = () => {
  return (
    <div>
      <h1>GALLERY</h1>
      <div>
        <div>
          <Image src="/images/alpagasui.png" width="100" height="100"/>
          <p>alpagasui</p>
        </div>
        <div>
          <Image src="/images/GASHIMETAL.png" width="100" height="100"/>
          <p>GASHIMETAL</p>
        </div>
        <div>
          <Image src="/images/samuragasui.png" width="100" height="100"/>
          <p>samuragasui</p>
        </div>
        <div>
          <Image src="/images/ramengasui.jpg" width="100" height="100"/>
          <p>ramengasui</p>
        </div>
      </div>
    </div>
  )
}

export default Gallery
