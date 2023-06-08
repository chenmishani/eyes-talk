import React from 'react'
import { Link } from 'react-router-dom'


export default function Humburger() {
  return (
    
        <div className='humburger'>
          <Link to={'/Bracelets'}> <button className='humburgerBtn'>צמידים</button> </Link>
          <Link to={'/chains'}>  <button className='humburgerBtn' style={{marginRight:'10px'}}>שרשראות</button> </Link>
          <Link to={'/contact'} > <button className='humburgerBtn'>צור קשר</button></Link>
          <Link to={'/eyes-talk'}> <button className='humburgerBtn'>בית</button></Link>
          
        </div>
       
    
  )
}
