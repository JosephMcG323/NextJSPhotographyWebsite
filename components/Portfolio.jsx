import React from 'react'
import Image from 'next/image'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
const Portfolio = () => {
  return (
    
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
   
   <h1 style={{
            fontSize: '1.9rem',
            lineHeight: '2rem',
            textAlign: 'center',
            padding: '2',
            fontFamily: 'inherit'
          }}>Doors of Belfast</h1>

        <hr
          style={{
            background: 'brown',
            color: 'brown',
            borderColor: 'brown',
            width: '50%',
            margin: 'auto'
          }}
        />

<div className='grid   p-4 gap-4'>
</div>
      <div className='grid   p-4 gap-4'>
   
      <div className="home5Main">
      <img alt="landscape" src='/mainImg/DadOldWork/PlaqueDoorsOfBelfast.png' />
      
                      </div>
                      <div className="home5Main1">
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/DadOldWork/DoorsOfBelfastWhite.jpg' />
        </Zoom>      
                      </div>           
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>

      


      





        </div>

        
      </div>
      <h1 style={{
            fontSize: '1.9rem',
            lineHeight: '2rem',
            textAlign: 'center',
            padding: '2',
            fontFamily: 'inherit'
          }}>St. Michaels Parish</h1>

        <hr
          style={{
            background: 'brown',
            color: 'brown',
            borderColor: 'brown',
            width: '50%',
            margin: 'auto'
          }}
        />

<div className='grid   p-4 gap-4'>
</div>
      <div className='grid grid-rows-none md:grid-cols-5 p-4 gap-4'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
                  <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/Screen Shot 2022-01-02 at 23.40.00.png' />
        </Zoom>
        </div>

        <div className='crop-container-work-char'>

        <div >
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/iScreen Shot 2022-01-02 at 23.40.44.png' />
        </Zoom>

        </div>
</div>

     
        <div >
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/iScreen Shot 2022-01-02 at 23.39.22.png' />
        </Zoom>



        
        </div>
        <div >
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/DOVE WEB DoveDSCF5567 denoise2 2.jpg' />
        </Zoom>
        </div>
        
        <div >
        <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/iSt M&M Snow DSCF0794 SnowAction Res 300 A3.png' />
        </Zoom>
        </div>
    
      </div>
      
      
   <h1 style={{
            fontSize: '1.9rem',
            lineHeight: '2rem',
            textAlign: 'center',
            padding: '2',
            fontFamily: 'inherit'
          }}>Noteable work in Northern Irealnd</h1>

        <hr
          style={{
            background: 'brown',
            color: 'brown',
            borderColor: 'brown',
            width: '50%',
            margin: 'auto'
          }}
        />

<div className='grid   p-4 gap-4'>
</div>
      <div className='grid   p-4 gap-4'>
   
      <div className="home5Main">
      <img alt="landscape" src='/mainImg/DadOldWork/Noteable NI work .png' />
      
                      </div>
                      <div className="home5Main1">
                      <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/DadOldWork/Poster PMG 3 DSC05449.95b0afdd.jpg' />
        </Zoom>      
                      </div>           
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
        </div>
      </div>

      <div className='center'>
          
          <Zoom overlayBgColorEnd={'rgba(0, 0, 0, 0.94)'} >
          <img alt="landscape" src='/mainImg/DadOldWork/DivisWoman.png' width="400" height="600"
          />
        </Zoom>
    





  

   
    </div>
    
    </div>
  )
}

export default Portfolio