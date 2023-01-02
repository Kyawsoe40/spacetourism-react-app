import React from 'react'
import { Route, Routes } from 'react-router'
import Commander from './Commander'
import FlightEngineer from './FlightEngineer'
import Pilot from './Pilot'
import MissionSpecialist from './MissionSpecialist'

const Crew = () => {

  return (
    <div className="container mx-auto " style={{paddingTop: '30px',paddingBottom: '60px'}}>
        <h5 className="Barlow-condensed-font mt-10 md:text-3xl text-2xl font-medium tracking-widest text-white mb-10 md:w-1/2 text-center"><span className='text-gray-400' >02</span> Pick your crew</h5>
        <Routes>
          <Route path='/' element={<Commander />} />
          <Route path='flightengineer' element={<FlightEngineer />} />
          <Route path='pilot' element={<Pilot />} />
          <Route path='missionspecialist' element={<MissionSpecialist />} />
        </Routes>
    </div>
  )
}

export default Crew