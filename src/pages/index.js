import Head from 'next/head'
import { Inter } from 'next/font/google'
import Hero from '../../components/Hero'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import { InstagramEmbed } from 'react-social-media-embed';
import React from 'react';
import Gallery from 'react-grid-gallery';
const longImgStyle = { maxWidth: '95%' }

const IMAGES =
  [{
    src: "/mainImg/Bog Cotton Pink Sky DSCF9495 dy britness r300 usm A1.jpg",
    thumbnail:  "/mainImg/Bog Cotton Pink Sky DSCF9495 dy britness r300 usm A1.jpg",
    thumbnailWidth: 300,
    thumbnailHeight: 200,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
},
  {
    src: "/mainImg/trees.jpg",
    thumbnail:  "/mainImg/trees.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },

  {
    src: "/mainImg/DSCF0253.JPG",
    thumbnail:  "/mainImg/DSCF0253.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },

  {
    src: "/mainImg/reed reflect DSC08977ed2.jpg",
    thumbnail:  "/mainImg/reed reflect DSC08977ed2.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 400,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/SunburstCoole0009.jpg",
    thumbnail:  "/mainImg/SunburstCoole0009.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/TILT LAKE TOPPIT Stitch ed1.jpg",
    thumbnail:  "/mainImg/TILT LAKE TOPPIT Stitch ed1.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/Tree Coole Moody Tree CooleDSCF2607.jpg",
    thumbnail:  "/mainImg/Tree Coole Moody Tree CooleDSCF2607.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/2004_1018rainbowekn0026.JPG",
    thumbnail:  "/mainImg/2004_1018rainbowekn0026.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/2004_1019stmichaelnunsgraves0097 ed3 oil-sepia from photo filterDP.jpg",
    thumbnail:  "/mainImg/2004_1019stmichaelnunsgraves0097 ed3 oil-sepia from photo filterDP.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/DSC03934.JPG",
    thumbnail:  "/mainImg/DSC03934.JPG",
    thumbnailWidth: 420,
    thumbnailHeight: 312,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/DSC08841.jpg",
    thumbnail:  "/mainImg/DSC08841.jpg",
    thumbnailWidth: 420,
    thumbnailHeight: 512,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },

]

const IMAGES2 =
  [
    {
      src: "/mainImg/DSC01066.JPG",
      thumbnail:  "/mainImg/DSC01066.JPG",
      thumbnailWidth: 320,
      thumbnailHeight: 312,
        caption: "Peter McGuinness - Petermcguinnessphotography.com"
    },
    {
      src: "/mainImg/lomo Infrared (free action)rose copy.jpg",
      thumbnail:  "/mainImg/lomo Infrared (free action)rose copy.jpg",
      thumbnailWidth: 370,
      thumbnailHeight: 312,
      caption: "Peter McGuinness - Petermcguinnessphotography.com"
    },
    {
      src: "/mainImg/DSCF0875.jpg",
      thumbnail:  "/mainImg/DSCF0875.jpg",
      thumbnailWidth: 220,
      thumbnailHeight: 312,
      caption: "Peter McGuinness - Petermcguinnessphotography.com"
    },
  
  {
    src: "/mainImg/DSC01045 r300usm.jpg",
    thumbnail:  "/mainImg/DSC01045 r300usm.jpg",
    thumbnailWidth: 280,
    thumbnailHeight: 400,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },

  {
    src: "/mainImg/DSCF0828 copy.jpg",
    thumbnail:  "/mainImg/DSCF0828 copy.jpg",
    thumbnailWidth: 580,
    thumbnailHeight: 400,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  
  {
    src: "/mainImg/Coole Snow Pan278-282glow 2.jpg",
    thumbnail:  "/mainImg/Coole Snow Pan278-282glow 2.jpg",
    thumbnailWidth: 495,
    thumbnailHeight: 300,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  

]



const IMAGESafterSnow =
  [
    {
      src: "/mainImg/DSC01066.JPG",
      thumbnail:  "/mainImg/DSC01066.JPG",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      caption: "Peter McGuinness - Petermcguinnessphotography.com"
    },
    {
      src: "/mainImg/lomo Infrared (free action)rose copy.jpg",
      thumbnail:  "/mainImg/lomo Infrared (free action)rose copy.jpg",
      thumbnailWidth: 420,
      thumbnailHeight: 312,
      caption: "Peter McGuinness - Petermcguinnessphotography.com"
    },
    {
      src: "/mainImg/DSCF0875.jpg",
      thumbnail:  "/mainImg/DSCF0875.jpg",
      thumbnailWidth: 320,
      thumbnailHeight: 312,
      caption: "Peter McGuinness - Petermcguinnessphotography.com"
    },

  {
    src: "/mainImg/DSC04509.JPG",
    thumbnail:  "/mainImg/DSC04509.JPG",
    thumbnailWidth: 420,
    thumbnailHeight: 312,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/CNV00024b.JPG",
    thumbnail:  "/mainImg/CNV00024b.JPG",
    thumbnailWidth: 490,
    thumbnailHeight: 312,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },


  
  {
    src: "/mainImg/DSC01045 r300usm.jpg",
    thumbnail:  "/mainImg/DSC01045 r300usm.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 400,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },

  {
    src: "/mainImg/DSCF0828 copy.jpg",
    thumbnail:  "/mainImg/DSCF0828 copy.jpg",
    thumbnailWidth: 680,
    thumbnailHeight: 400,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  
  {
    src: "/mainImg/St M&M Snow DSCF0794 SnowAction Res 300 A3.jpg",
    thumbnail:  "/mainImg/St M&M Snow DSCF0794 SnowAction Res 300 A3.jpg",
    thumbnailWidth: 610,
    thumbnailHeight: 400,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/DSCF0662ed2 copy.jpg    ",
    thumbnail:  "/mainImg/DSCF0662ed2 copy.jpg",
    thumbnailWidth: 220,
    thumbnailHeight: 412,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
  },
  {
    src: "/mainImg/DSCF4881.JPG",
    thumbnail:  "/mainImg/DSCF4881.JPG",
    thumbnailWidth: 320,
    thumbnailHeight: 412,
    caption: "Peter McGuinness - Petermcguinnessphotography.com"
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
          <img alt="landscape" src='/mainImg/panorama/25-31 topazeded2 Topaz Restyle 3.jpg' />
        </Zoom>
        <div id='gallery' className='max-w-[1240px] mx-auto'>
        <Gallery images={IMAGES} enableImageSelection={false}   />

</div>        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>

    <br />

        <Zoom className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/Stitch Coole House Morning frost0121+ 0123.jpg' />
        </Zoom>
        <Gallery images={IMAGES2} enableImageSelection = {false} />
{/* 
        <Zoom className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/Bogcotton fc DSCF9482-DSCF9486 fc.jpg' />
        </Zoom>
        <Gallery images={IMAGES3Flowers} /> */}

        <div className="py-5"overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>
        <h1 > ​​​​</h1>

        </div>

        

{/* START GRID PART WITH WHITE TULIPS */}
<div className='max-w-[1240px] mx-auto py-5 text-center'>
      <div className='grid grid-rows-none md:grid-cols-4 p-0 gap-4'>
        <div class="crop-container-lillys"  >
          
          <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/DSCF0958 nousm.jpg' width="400" height="600"
          />
        </Zoom>
    
        </div>


   


<div class="crop-container-church" >
<Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} width="100" height="200" style={longImgStyle} >
          <img alt="landscape" src='/mainImg/DSCF2988 copybuz.jpg' />
        </Zoom>   
</div>

<div class="crop-container-reeds" >

<Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'}  >
          <img alt="landscape" src='/mainImg/PortraitExample.jpg'  />
        </Zoom>
</div>
 

        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'}   >
          <img alt="landscape" src='/mainImg/CNV00022.JPG'  />
        </Zoom>   


  
        <div className='w-full h-full'>

        </div>
      </div>
   
    </div>

      </div>
{/* START GRID PART WITH WHITE TULIPS */}

      <div style={{ display: 'flex', justifyContent: 'center', height: '15vh' }}>
        </div>

      {/* <Slider slides={SliderData} /> */}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <InstagramEmbed url="https://www.instagram.com/p/CclicpoD-Rd/?hl=en" width={328} />
      </div>

    </div>
  );
}
