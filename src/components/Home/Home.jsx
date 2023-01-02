
import React from 'react'
import './style.css'
const Home = () => {
  return (
        <div className="grid lg:grid-cols-2 grid-cols-1  gap-5  items-center mt-32 container mx-auto">
          <div className="text-center mx-auto px-10 mb-20">
            <h5 className="Barlow-condensed-font custom-lightblue md:text-3xl sm:text-2xl text-xl  uppercase text-center">So, you want to travel to  <br/>
              <span className="Bellefair-font md:text-8xl sm:text-5xl text-4xl py-5" style={{color:'#fff'}}>Space</span></h5>
            <p className='custom-lightblue Barlow-condensed-font sm:px-20 px-16'>Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className="explore-box mx-auto sm:mb-20 mb-16">
            <div className="">
              <h5 className="Barlow-condensed-font">Explore</h5>
            </div>
          </div>
        </div>
  )
}

export default Home