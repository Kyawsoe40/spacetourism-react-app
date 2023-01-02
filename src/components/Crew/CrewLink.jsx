import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const CrewLink = () => {
    const location=useLocation().pathname;
    let arr=[true,false,false,false]
    if(location.includes('flightengineer')){
      arr=[false,true,false,false]
    }else if(location.includes('pilot')){
      arr=[false,false,true,false]
    }else if(location.includes('missionspecialist')){
      arr=[false,false,false,true]
    }else{
      arr=[true,false,false,false]
    }
    
  return (
    <div className='text-center'>
        <div className='flex items-center justify-center gap-2 py-10'>
            <Link to='../' className={arr[0]?'text-white text-4xl':'text-gray-500 text-4xl'}>&bull;</Link>
            <Link to='../flightengineer' className={arr[1]?'text-white text-4xl':'text-gray-500 text-4xl'}>&bull;</Link>
            <Link to='../pilot' className={arr[2]?'text-white text-4xl':'text-gray-500 text-4xl'}>&bull;</Link>
            <Link to='../missionspecialist' className={arr[3]?'text-white text-4xl':'text-gray-500 text-4xl'}>&bull;</Link>

        </div>
    </div>
  )
}

export default CrewLink