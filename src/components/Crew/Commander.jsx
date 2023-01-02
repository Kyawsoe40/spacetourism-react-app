import React from 'react'
import CrewImgPart from './CrewImgPart'
import CrewTextSection from './CrewTextSection'
import { datas } from './data'
import img from './Imgs/image-douglas-hurley.webp'
const Commander = () => {
  return (
    <div className="flex lg:flex-row flex-col-reverse gap-5 items-center">
        <CrewTextSection data={datas[0]} />
        <CrewImgPart img={img} />
    </div>
  )
}

export default Commander