import React from 'react'
import HeroFlower from '../../components/HeroFlower'
import Flowers from '../../components/Flowers'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import Gallery from 'react-grid-gallery';

const IMAGES3Flowers =
  [    {
    src: "/mainImg/DSC00465.jpg",
    thumbnail:  "/mainImg/DSC00465.jpg",
    thumbnailWidth: 390,
    thumbnailHeight: 312,
  },
    {
      src: "/mainImg/BlueBellsLumix ed2 P1040896.jpg",
      thumbnail:  "/mainImg/BlueBellsLumix ed2 P1040896.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
        },

    {
      src: "/mainImg/DSC05579 ed1.jpg",
      thumbnail:  "/mainImg/DSC05579 ed1.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      },

  {
    src: "/mainImg/DSC04509.JPG",
    thumbnail:  "/mainImg/DSC04509.JPG",
    thumbnailWidth: 420,
    thumbnailHeight: 312,
  },
  
  {
    src: "/mainImg/DSCF4881.JPG",
    thumbnail:  "/mainImg/DSCF4881.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
  },
  {
    src: "/mainImg/BBxyzP1040886.jpg",
    thumbnail:  "/mainImg/BBxyzP1040886.jpg",
    thumbnailWidth: 244,
    thumbnailHeight: 326,
  },
  {
    src: "/mainImg/DSCF3499.jpg",
    thumbnail:  "/mainImg/DSCF3499.jpg",
    thumbnailWidth: 290,
    thumbnailHeight: 312,
  },

  {
    src: "/mainImg/Dandylion Seed 1207r300 usm 111-9 39x29in.jpg",
    thumbnail:  "/mainImg/Dandylion Seed 1207r300 usm 111-9 39x29in.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 312,
  },
  {
    src: "/mainImg/DSC04671 12x12.jpg",
    thumbnail:  "/mainImg/DSC04671 12x12.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 312,
  },
  {
    src: "/mainImg/Lillies Skuds P1040402 ed1.jpg",
    thumbnail:  "/mainImg/Lillies Skuds P1040402 ed1.jpg",
    thumbnailWidth: 390,
    thumbnailHeight: 312,
  },
  {
    src: "/mainImg/Wild-Rose-Peter-McGuinness-.jpg",
    thumbnail:  "/mainImg/Wild-Rose-Peter-McGuinness-.jpg",
    thumbnailWidth: 330,
    thumbnailHeight: 312,
  },
  {
    src: "/mainImg/Yellow Flower1 P1020853.JPG",
    thumbnail:  "/mainImg/Yellow Flower1 P1020853.JPG",
    thumbnailWidth: 390,
    thumbnailHeight: 312,
  },
  
]
const flowers = () => {
  return (
    <div><HeroFlower heading='' message=''/>
            <p className="py-2"></p>

<h1 style={{
            fontSize: '1.5rem',
            lineHeight: '2rem',
            textAlign: 'center',
            padding: '2',
            fontFamily: 'inherit'
          }}>Gallery</h1>

        <hr
          style={{
            background: 'brown',
            color: 'brown',
            borderColor: 'brown',
            width: '50%',
            margin: 'auto'
          }}
        />
            <p className="py-5"></p>

    
    <div id='galleryZoom' className='max-w-[1240px] mx-auto'>

    <Zoom className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/Bogcotton fc DSCF9482-DSCF9486 fc.jpg' />
        </Zoom>
        <Gallery images={IMAGES3Flowers} enableImageSelection = {false} />

        <Zoom className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/DSCF0950 Snowdrop lampscape usm sharpened 34x18infc.jpg' />
        </Zoom>

    </div>

    </div>
  )
}

export default flowers