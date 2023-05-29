import React from 'react'
import HeroFlower from '../../components/HeroFlower'
import Flowers from '../../components/Contact'
import Zoom from 'react-medium-image-zoom'
import Gallery from 'react-grid-gallery';

const IMAGES3Flowers =
  [    {
    src: "/mainImg/DSC00465.jpg",
    thumbnail:  "/mainImg/DSC00465.jpg",
    thumbnailWidth: 390,
    thumbnailHeight: 312,
    caption: "Boats (Jeshu John - designerspics.com)"
  },
    {
      src: "/mainImg/BlueBellsLumix ed2 P1040896.jpg",
      thumbnail:  "/mainImg/BlueBellsLumix ed2 P1040896.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
      caption: "Boats (Jeshu John - designerspics.com)"
    },

    {
      src: "/mainImg/DSC05579 ed1.jpg",
      thumbnail:  "/mainImg/DSC05579 ed1.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      caption: "Boats (Jeshu John - designerspics.com)"
    },

  {
    src: "/mainImg/DSC04509.JPG",
    thumbnail:  "/mainImg/DSC04509.JPG",
    thumbnailWidth: 420,
    thumbnailHeight: 312,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  
  {
    src: "/mainImg/DSCF4881.JPG",
    thumbnail:  "/mainImg/DSCF4881.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "/mainImg/BBxyzP1040886.jpg",
    thumbnail:  "/mainImg/BBxyzP1040886.jpg",
    thumbnailWidth: 244,
    thumbnailHeight: 326,
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "/mainImg/DSCF3499.jpg",
    thumbnail:  "/mainImg/DSCF3499.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 312,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
]
const contact = () => {
  return (
    <div><HeroFlower heading='Contact' message='submit below'/>
    {/* <Contact/> */}
    
    <div id='galleryZoom' className='max-w-[1240px] mx-auto'>

    <Zoom className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/Bogcotton fc DSCF9482-DSCF9486 fc.jpg' />
        </Zoom>
        <Gallery images={IMAGES3Flowers} />

        <Zoom className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/DSCF0950 Snowdrop lampscape usm sharpened 34x18infc.jpg' />
        </Zoom>

    </div>

    </div>
  )
}

export default contact