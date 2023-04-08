import React from 'react'
import img1 from '../public/images/trees.jpg'
import img2 from '../public/images/2004_1023toppitoct040025-040029 no6.jpg'
import img3 from '../public/images/CNV00024.jpg'
import img4 from '../public/images/ig-img-1.jpeg'

import InstagramImg from './InstagramImg'

export const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className='text-2xl font-bold'>Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4'>
            <InstagramImg socialImg={img4} />
            <InstagramImg socialImg={img4} />
            <InstagramImg socialImg={img4} />
        </div>
    </div>
  )
}
