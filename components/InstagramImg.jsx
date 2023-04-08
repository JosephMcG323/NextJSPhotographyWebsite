import React from 'react'
import Image from 'next/image'
import { FaInstagram } from 'react-icons/fa';
import img4 from '../public/images/ig-img-1.jpeg'



const InstagramImg = (socialImg) => {
  return (
    <div className='relative'>
      <Image
        src={img4}
        className='w-full h-full'
        width={500}
        height={500}      />
      {/* Overlay */}
      <div className='flex justify-center w-full h-full items-center absolute top-0 left-0 right-0 bottom-0 hover:bg-black/50 group'>
      <p className='text-gray-300 hidden group-hover:block'>
        <FaInstagram size={30} className='z-10' />
      </p>
      </div>
    </div>
    )
}

export default InstagramImg