import React from 'react'
import CrewLink from './CrewLink'

const CrewTextSection = ({data}) => {
  return (
        <div className="lg:w-1/2 w-full text-center md:px-20 px-10 flex lg:flex-col flex-col-reverse">
            <div>
            <h5 className="Bellefair-font text-gray-400 lg:text-3xl text-2xl tracking-widest uppercase">{data.type}</h5>
            <h3 className="Bellefair-font text-white lg:text-4xl text-3xl tracking-widest uppercase">{data.name}</h3>
            <p className="Barlow-condensed-font text-white text-md md:px-10 px-0">{data.description}</p>
            </div>
            <CrewLink />
        </div>
  )
}

export default CrewTextSection