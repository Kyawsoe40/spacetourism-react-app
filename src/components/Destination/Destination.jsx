import React from 'react'
import { Route, Routes } from 'react-router'
import Moon from './Moon'
import Mars from './Mars'
import Europa from './Europa'
import Titan from './Titan'
import './style.css'

const Destination = () => {
 
  return (

    <div className="container mx-auto " style={{paddingTop: '30px',paddingBottom: '60px'}}>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 items-center">
        <Routes>
          <Route path='/' element={<Moon />} />
          <Route path='mars' element={<Mars />} />
          <Route path='europa' element={<Europa />} />
          <Route path='titan' element={<Titan />} />
        </Routes>
      </div>
    </div>

  )
}

export default Destination