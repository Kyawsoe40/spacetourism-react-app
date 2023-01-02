import React from 'react'
import { Link, useLocation } from 'react-router-dom'


const DestinationNavbar = () => {
  const location=useLocation().pathname;
  let arr=[true,false,false,false]
  if(location.includes('mars')){
    arr=[false,true,false,false]
  }else if(location.includes('europa')){
    arr=[false,false,true,false]
  }else if(location.includes('titan')){
    arr=[false,false,false,true]
  }else{
    arr=[true,false,false,false]
  }
  
  return (

            <ul className="destination-bar">
              <li><Link to='../' className={arr[0]? 'link-tab Barlow-condensed-font active':'link-tab Barlow-condensed-font'}>Moon</Link></li>
              <li><Link to='../mars' className={arr[1]? 'link-tab Barlow-condensed-font active':'link-tab Barlow-condensed-font'}>Mars</Link></li>
              <li><Link to='../europa' className={arr[2]? 'link-tab Barlow-condensed-font active':'link-tab Barlow-condensed-font'}>Europa</Link></li>
              <li><Link to='../titan' className={arr[3]? 'link-tab Barlow-condensed-font active':'link-tab Barlow-condensed-font'}>Titan</Link></li>             
            </ul>
            

  )
}

export default DestinationNavbar