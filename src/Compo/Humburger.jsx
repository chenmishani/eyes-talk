import React from 'react'
import { Link } from 'react-router-dom'


export default function Humburger(props) {
  return (
    
        <div className='humburger'>
          <Link to={'/Bracelets'}> <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn'>צמידים</button> </Link>
          <Link to={'/chains'}>  <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn' >שרשראות</button> </Link>
          <Link to={'/suprise'}>  <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn' >שרשרת בהפתעה</button> </Link>
          <Link to={'/sale'}>  <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn' >מבצעים</button> </Link>
          <Link to={'/contact'} > <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn'>צור קשר</button></Link>
          <Link to={'/'}> <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn'>בית</button></Link>
          
        </div>
       
    
  )
}
