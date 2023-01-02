import React from 'react'

const DestinationImgPart = ({img}) => {
  return (
    <div className="text-center md:px-20 px-10 ">
          <h5 className="Barlow-condensed-font my-5 md:text-3xl text-2xl font-medium tracking-widest text-white mb-10"><span className='text-gray-400' >01</span> Pick your destination</h5>
          <div className="flex justify-center mx-auto">
            <img src={img} alt="" />
          </div>
    </div>
  )
}

export default DestinationImgPart