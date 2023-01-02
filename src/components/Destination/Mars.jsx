import React from 'react'
import DestinationCategory from './DestinationCategory'
import { datas } from './data'
import DestinationImgPart from './DestinationImgPart'
import img from './DestinationImgs/image-mars.webp'
const Mars = () => {
  return (
    <>
      <DestinationImgPart img={img} />
      <DestinationCategory data={datas[1]} />
    </>
  )
}

export default Mars