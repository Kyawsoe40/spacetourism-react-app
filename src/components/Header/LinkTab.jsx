import React from 'react'
import { Link } from 'react-router-dom'

const LinkTab = ({item,isActive=false,togglerBtn}) => {
  
  return (
    <Link onClick={togglerBtn} to={item.address} className={isActive?'Barlow-condensed-font text-lg link-tab active':'Barlow-condensed-font text-lg link-tab'} style={{color:'#fff'}}><p><span>{item.id} </span>{item.name}</p></Link>
  )
}

export default LinkTab