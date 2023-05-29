import React from 'react'
import Hero2 from '../../components/Hero2'
import Portfolio from '../../components/Portfolio'

const work = () => {
  return (
    <div>
        <Hero2 heading='My Work' message = 'This is some of my recent work'></Hero2>
        <Portfolio></Portfolio>
    </div>
  )
}

export default work