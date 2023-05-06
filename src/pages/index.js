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


const longImgStyle = { maxWidth: '95%' }
const longImgStyleBoat = { maxWidth: '107%' }
const longImgStyleReeds = { maxWidth: '104.5%' }

const IMAGES =
  [{
    src: "/mainImg/Bog Cotton Pink Sky DSCF9495 dy britness r300 usm A1.jpg",
    thumbnail:  "/mainImg/Bog Cotton Pink Sky DSCF9495 dy britness r300 usm A1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Swan (Peter McGuinness - Petermcguinnessphotography.com)"
},
  {
    src: "/mainImg/trees.jpg",
    thumbnail:  "/mainImg/trees.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "/mainImg/DSCF0253.JPG",
    thumbnail:  "/mainImg/DSCF0253.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "/mainImg/reed reflect DSC08977ed2.jpg",
    thumbnail:  "/mainImg/reed reflect DSC08977ed2.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 400,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "/mainImg/SunburstCoole0009.jpg",
    thumbnail:  "/mainImg/SunburstCoole0009.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "/mainImg/TILT LAKE TOPPIT Stitch ed1.jpg",
    thumbnail:  "/mainImg/TILT LAKE TOPPIT Stitch ed1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "/mainImg/Tree Coole Moody Tree CooleDSCF2607.jpg",
    thumbnail:  "/mainImg/Tree Coole Moody Tree CooleDSCF2607.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "/mainImg/2004_1018rainbowekn0026.JPG",
    thumbnail:  "/mainImg/2004_1018rainbowekn0026.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "/mainImg/2004_1019stmichaelnunsgraves0097 ed3 oil-sepia from photo filterDP.jpg",
    thumbnail:  "/mainImg/2004_1019stmichaelnunsgraves0097 ed3 oil-sepia from photo filterDP.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "/mainImg/DSC03934.JPG",
    thumbnail:  "/mainImg/DSC03934.JPG",
    thumbnailWidth: 420,
    thumbnailHeight: 312,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  {
    src: "/mainImg/DSC08841.jpg",
    thumbnail:  "/mainImg/DSC08841.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 512,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

]

const IMAGES2 =
  [
    {
      src: "/mainImg/DSC01066.JPG",
      thumbnail:  "/mainImg/DSC01066.JPG",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/mainImg/lomo Infrared (free action)rose copy.jpg",
      thumbnail:  "/mainImg/lomo Infrared (free action)rose copy.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      caption: "Boats (Jeshu John - designerspics.com)"
    },
    {
      src: "/mainImg/DSCF0875.jpg",
      thumbnail:  "/mainImg/DSCF0875.jpg",
      thumbnailWidth: 320,
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
    src: "/mainImg/CNV00024b.JPG",
    thumbnail:  "/mainImg/CNV00024b.JPG",
    thumbnailWidth: 490,
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
    src: "/mainImg/DSCF0662ed2 copy.jpg    ",
    thumbnail:  "/mainImg/DSCF0662ed2 copy.jpg",
    thumbnailWidth: 220,
    thumbnailHeight: 412,
    caption: "Boats (Jeshu John - designerspics.com)"
  },
  
  {
    src: "/mainImg/DSC01045 r300usm.jpg",
    thumbnail:  "/mainImg/DSC01045 r300usm.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 400,
    tags: [{ value: "Ocean", title: "Ocean" }, { value: "People", title: "People" }],
    caption: "Boats (Jeshu John - designerspics.com)"
  },

]


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
          <img alt="landscape" src='/mainImg/Stitch Coole House Morning frost0121+ 0123.jpg' />
        </Zoom>
        <Gallery images={IMAGES2} />

        <Zoom className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/Bogcotton fc DSCF9482-DSCF9486 fc.jpg' />
        </Zoom>
        <Gallery images={IMAGES3Flowers} />

        <Zoom className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/DSCF0950 Snowdrop lampscape usm sharpened 34x18infc.jpg' />
        </Zoom>

        

{/* START GRID PART WITH WHITE TULIPS */}
<div className='max-w-[1240px] mx-auto py-5 text-center'>
      <div className='grid grid-rows-none md:grid-cols-5 p-0 gap-4'>
        <div>
          
          <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/DSCF0958 nousm.jpg' width="400" height="600"/>
        </Zoom>
    
        </div>

        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} width="100" height="200" style={longImgStyle} >
          <img alt="landscape" src='/mainImg/DSCF2988 copybuz.jpg' style={longImgStyle}/>
        </Zoom>   

        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} style={longImgStyleReeds} >
          <img alt="landscape" src='/mainImg/PortraitExample.jpg' style={longImgStyleReeds} />
        </Zoom>

        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} style={longImgStyleBoat} >
          <img alt="landscape" src='/mainImg/CNV00022.JPG' style={longImgStyleBoat}/>
        </Zoom>   


  
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1540390769625-2fc3f8b1d50c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2128&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1472791108553-c9405341e398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2437&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>

                  <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/Screen Shot 2022-01-02 at 23.40.00.png' />
        </Zoom>
        </div>
        <div className='w-full h-full'>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/Screen Shot 2022-01-02 at 23.40.44.png' />
        </Zoom>

        </div>
        <div className='w-full h-full'>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/Screen Shot 2022-01-02 at 23.39.22.png' />
        </Zoom>



        
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <Image
            src='https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2419&q=80'
            alt='/'
            width='215'
            height='217'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>

      </div>
{/* START GRID PART WITH WHITE TULIPS */}

      <div style={{ display: 'flex', justifyContent: 'center', height: '15vh' }}>
        </div>

      <Slider slides={SliderData} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/CUbHfhpswxt/" width={328} />
      </div>

    </div>
  );
}
