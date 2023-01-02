import React from 'react'
import DestinationNavbar from './DestinationNavbar'

const DestinationCategory = ({data}) => {

  return (
    <div className="md:px-20 px-10">
        <div className="destination-category">
            <DestinationNavbar />
            <h2 className="Bellefair-font text-center md:text-5xl text-4xl text-white capitalize">{data.name}</h2>
            <p className="Barlow-condensed-font text-gray-400 text-md px-10 pb-20">{data.paragraph}</p>
            <div className="destination-time pt-20 flex md:flex-row flex-col md:justify-around justify-center" style={{borderTop: '2px solid #3B424F'}}>
                <div className='text-center py-3'>
                    <h3 className="Barlow-condensed-font text-gray-400 text-xl uppercase">Avg. distance</h3> 
                    <h5 className="Bellefair-font text-white md:text-3xl text-2xl uppercase tracking-wider">{data.distance}</h5>
                </div>
                <div className='text-center py-3'>
                    <h3 className="Barlow-condensed-font text-gray-400 text-xl uppercase">Est. travel time</h3> 
                    <h5 className="Bellefair-font text-white md:text-3xl text-2xl uppercase tracking-wider">{data.travelTime}</h5>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DestinationCategory