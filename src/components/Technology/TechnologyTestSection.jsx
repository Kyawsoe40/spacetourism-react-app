import React from 'react'

const TechnologyTestSection = ({data}) => {
  return (
    <div className='my-10'>
        <h5 className="Bellefair-font text-gray-400 lg:text-2xl text-xl uppercase tracking-widest">The terminology...</h5>
        <h3 className="Bellefair-font text-white lg:text-4xl text-3xl uppercase">{data.name}</h3>
        <p className="Barlow-condensed-font text-white text-md px-10">{data.description}</p>
    </div>
  )
}

export default TechnologyTestSection