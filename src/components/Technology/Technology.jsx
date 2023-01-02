import React from 'react'
import { Route, Routes } from 'react-router'
import Capsule from './Capsule'
import Spaceport from './Spaceport'
import Vehicle from './Vehicle'

const Technology = () => {
  return (
    <div  style={{paddingTop: '30px',paddingBottom: '60px'}}>
        <h5 className="Barlow-condensed-font mt-10 md:text-3xl text-2xl font-medium tracking-widest text-white mb-10 md:w-1/2 text-center"><span className='text-gray-400' >03</span> Space Launch 101</h5>
        <Routes>
            <Route path='/' element={<Vehicle />} />
            <Route path='spaceport' element={<Spaceport/>} />
            <Route path='capsule' element={<Capsule />} />
        </Routes>
    </div>
  )
}

export default Technology