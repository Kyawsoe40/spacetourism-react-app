import React from 'react'
import { datas } from './data'
import DestinationCategory from './DestinationCategory'
import DestinationImgPart from './DestinationImgPart'
import img from './DestinationImgs/image-titan.webp'
const Titan = () => {
  return (
    <>
        <DestinationImgPart img={img} />
        <DestinationCategory data={datas[3]} />
    </>
  )
}

export default Titan