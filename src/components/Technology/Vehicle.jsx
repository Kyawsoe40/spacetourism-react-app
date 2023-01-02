import React from 'react'
import TechnologyImg from './TechnologyImg'
import TechnologyLinks from './TechnologyLinks'
import TechnologyTestSection from './TechnologyTestSection'
import {datas} from './data'
import lgImg from './Imgs/image-launch-vehicle-portrait.jpg'
import smallImg from './Imgs/image-launch-vehicle-landscape.jpg'
const Vehicle = () => {
  return (
    <div className='flex items-center lg:ml-20 lg:flex-row flex-col-reverse gap-5'>
        <div className='lg:w-1/2 flex lg:flex-row flex-col justify-center items-center gap-3 mx-3 text-center'>
            <TechnologyLinks  />
            <TechnologyTestSection data={datas[0]} />
        </div>
        <TechnologyImg lgImg={lgImg} smallImg={smallImg} />
    </div>
  )
}

export default Vehicle