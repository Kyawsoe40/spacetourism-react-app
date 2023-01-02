import React from 'react'

const TechnologyImg = ({lgImg,smallImg}) => {
  return (
    <div className='lg:w-1/2 lg:flex lg:justify-center'>
        <div className='lg:block hidden'>
            <img src={lgImg} alt='' />
        </div>
        <div className='lg:hidden block w-screen'>
            <img className='w-screen' src={smallImg} alt='' />
        </div>
    </div>
  )
}

export default TechnologyImg