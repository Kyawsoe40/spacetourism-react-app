import React from 'react'
import { datas } from './data'
import DestinationCategory from './DestinationCategory'
import DestinationImgPart from './DestinationImgPart'
import img from './DestinationImgs/image-moon.webp'
const Moon = () => {

  return (
    <>
        <DestinationImgPart img={img} />
        <DestinationCategory data={datas[0]} />
    </>
  )
}

export default Moon