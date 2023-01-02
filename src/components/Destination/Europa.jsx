import React from 'react'
import { datas } from './data'
import DestinationCategory from './DestinationCategory'
import DestinationImgPart from './DestinationImgPart'
import img from './DestinationImgs/image-europa.webp'
const Europa = () => {
  return (
    <>
        <DestinationImgPart img={img} />
        <DestinationCategory data={datas[2]} />
    </>
  )
}

export default Europa