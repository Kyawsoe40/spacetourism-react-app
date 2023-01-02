import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TechnologyLinks = () => {
    let arr=[true,false,false]
    const techStyle={
        borderRadius:'50%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        fontSize:'22px',
        marginTop: '20px',
        marginRight:'20px'
    }
    const location=useLocation().pathname;
    if(location.includes('spaceport')){
        arr=[false,true,false]
      }else if(location.includes('capsule')){
        arr=[false,false,true]
      }else{
        arr=[true,false,false]
      }
  return (
    <div className='mx-5 flex lg:flex-col flex-row my-10'>
        <Link to='../'>
        <div style={techStyle} 
        className={arr[0]?'bg-white text-black md:w-20 md:h-20 w-16 h-16':'bg-transparent text-white border border-slate-500 hover:border-white md:w-20 md:h-20 w-16 h-16'} ><span>1</span></div>
        </Link>
        <Link to='../spaceport'>
        <div style={techStyle} 
        className={arr[1]?'bg-white text-black md:w-20 md:h-20 w-16 h-16':'bg-transparent text-white border border-slate-500 hover:border-white md:w-20 md:h-20 w-16 h-16'} ><span>2</span></div>
        </Link>
        <Link to='../capsule'>
        <div style={techStyle} 
        className={arr[2]?'bg-white text-black md:w-20 md:h-20 w-16 h-16':'bg-transparent text-white border border-slate-500 hover:border-white md:w-20 md:h-20 w-16 h-16'} ><span>3</span></div>
        </Link>
    </div>
  )
}

export default TechnologyLinks