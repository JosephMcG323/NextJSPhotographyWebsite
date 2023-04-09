import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from '../../components/Hero'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { InstagramEmbed } from 'react-social-media-embed';
import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-grid-gallery';
import { SliderData } from '../../components/SliderData'
import Slider from '../../components/Slider'



const IMAGES =
  [{
    src: "DSC06179.JPG",
    thumbnail:  "DSC06179.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
},
  {
    src: "trees.jpg",
    thumbnail:  "trees.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "DSCF0253.JPG",
    thumbnail:  "DSCF0253.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "reed reflect DSC08977ed2.jpg",
    thumbnail:  "reed reflect DSC08977ed2.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "SunburstCoole0009.jpg",
    thumbnail:  "SunburstCoole0009.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "TILT LAKE TOPPIT Stitch ed1.jpg",
    thumbnail:  "TILT LAKE TOPPIT Stitch ed1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "Tree Coole Moody Tree CooleDSCF2607.jpg",
    thumbnail:  "Tree Coole Moody Tree CooleDSCF2607.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "2004_1018rainbowekn0026.JPG",
    thumbnail:  "2004_1018rainbowekn0026.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "2004_1019stmichaelnunsgraves0097 ed3 oil-sepia from photo filterDP.jpg",
    thumbnail:  "2004_1019stmichaelnunsgraves0097 ed3 oil-sepia from photo filterDP.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "DSC03934.JPG",
    thumbnail:  "DSC03934.JPG",
    thumbnailWidth: 420,
    thumbnailHeight: 312,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "DSC08841.jpg",
    thumbnail:  "DSC08841.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 512,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

]

const IMAGES2 =
  [
    {
      src: "DSC01066.JPG",
      thumbnail:  "DSC01066.JPG",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "lomo Infrared (free action)rose copy.jpg",
      thumbnail:  "lomo Infrared (free action)rose copy.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "DSCF0875.jpg",
      thumbnail:  "DSCF0875.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 312,
      caption: "Boats (Jeshu John - designerspics.com)"
    },

  {
    src: "DSC04509.JPG",
    thumbnail:  "DSC04509.JPG",
    thumbnailWidth: 420,
    thumbnailHeight: 312,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "CNV00024b.JPG",
    thumbnail:  "CNV00024b.JPG",
    thumbnailWidth: 490,
    thumbnailHeight: 312,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "DSCF4881.JPG",
    thumbnail:  "DSCF4881.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "DSCF0662ed2 copy.jpg    ",
    thumbnail:  "DSCF0662ed2 copy.jpg",
    thumbnailWidth: 220,
    thumbnailHeight: 412,
    caption: "Boats (Jeshu John - designerspics.com)"
  },

]
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>

      <Head>

        <title>Photography</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Hero heading='Peter McGuinness Photography' message='' />
      <div id='galleryZoom' className='max-w-[1240px] mx-auto'>
        <p className="py-5"></p>

        <div id='gallery' className='max-w-[1240px] mx-auto'>
          <h1 style={{
            fontSize: '1.5rem',
            lineHeight: '2rem',
            textAlign: 'center',
            padding: '2',
            fontFamily: 'inherit'
          }}>Gallery</h1>
        </div>

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


        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='https://petermcguinnessphotography.com/static/media/25-31%20topazeded2%20Topaz%20Restyle%203.8d77f0fb.jpg' />
        </Zoom>
        <Gallery images={IMAGES} />
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        
        <Zoom className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='Stitch Coole House Morning frost0121+ 0123.jpg' />
        </Zoom>
        <Gallery images={IMAGES2} />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', height: '15vh' }}>
        </div>

      <Slider slides={SliderData} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
      </div>

    </div>
  );
}
