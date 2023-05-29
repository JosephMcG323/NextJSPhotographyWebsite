import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const Panorama = () => {
  return (
    
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
           <div id='gallery' className='max-w-[1240px] mx-auto'>
          <h1 style={{
            fontSize: '1.5rem',
            lineHeight: '2rem',
            textAlign: 'center',
            padding: '2',
            fontFamily: 'inherit'
          }}>Panorama Gallery</h1>
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
          <img alt="landscape" src='/mainImg/panorama/2004_1023toppitoct040025-040029 no6.jpg' />
        </Zoom>

        
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/2006_1205Coolerainbow0020-0023 copyRestyle Nature Shadowed Pond ed2 res300resized.jpg' />
        </Zoom>

        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/back road Belleek.jpg' />
        </Zoom>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/back road bellek.jpg' />
        </Zoom>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/BB long 21 ghost mood Rough Topaz.jpg' />
        </Zoom>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/Bundoran from Toppit topaz1.jpg' />
        </Zoom>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/Culca From Fort hill Untitled_Panoramaj1.jpg' />
        </Zoom>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/View from fort 2733-38.jpg' />
        </Zoom>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/Untitled_Panorama1fff 2.jpg' />
        </Zoom>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/Untitled_Panorama1.jpg' />
        </Zoom>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/Toppit Sunburs pan 1 0077 - 0079 ed.jpg' />
        </Zoom>
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/panorama/navarsunset2layers1&2 bb.jpg' />
        </Zoom>
        
    </div>
  )
}

export default Panorama