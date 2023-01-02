import React, { useRef, useState } from 'react'
import { useLocation } from 'react-router'
import './style.css'
import LinkTab from './LinkTab'
import logo from './logo.svg'
import { ImMenu,ImCross } from "react-icons/im";
const Header = () => {
  const [isNavbarOpen,setIsNavbarOpen]=useState(false);
  const respNavbar=useRef();
  const items=[
    {
      id:'00',
      name: 'Home',
      address: '/'
    },
    {
      id:'01',
      name: 'Destination',
      address: 'destination'
    },
    {
      id:'02',
      name: 'Crew',
      address: 'crew'
    },
    {
      id:'03',
      name: 'Technology',
      address: 'technology'
    },
  ]
  const location=useLocation().pathname;
  let page='Home';
  if(location.includes('destination')){
    page='Destination'
  }else if(location.includes('crew')){
    page='Crew'
  }else if(location.includes('technology')){
    page='Technology'
  }else{
    page='Home'
  }
  const isActive=true;
  const togglerBtn=(e)=>{
    if(isNavbarOpen){
      respNavbar.current.ariaHidden=true
      setIsNavbarOpen(false)
    }else{
      respNavbar.current.ariaHidden=false
      setIsNavbarOpen(true)
      
    }
  }
  
  return (
    <div className="py-5">
      <nav className="flex justify-between items-center">
        <img src={logo} className='pl-10' alt=""/>
        <button onClick={togglerBtn} className='text-white toggler-btn fixed right-5 z-10'>{isNavbarOpen?<ImCross style={{width:'30px',height:'30px'}} />:<ImMenu style={{width:'30px',height:'30px'}} />}</button>
        <div className='w-1/2 items-center'>

          <div>
            <ul className='flex justify-around float-right pr-3 py-5 w-full navigation-bar' ref={respNavbar} aria-hidden='true' >
              {items.map((item)=> 
                item.name===page?
                (<LinkTab key={item.id} item={item} isActive={isActive} togglerBtn={togglerBtn} />):
                  (<LinkTab key={item.id} item={item} togglerBtn={togglerBtn} />)
                
              )
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header