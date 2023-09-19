import React from 'react'
import { Link } from 'react-router-dom'


export default function Humburger(props) {


  const check=()=>{

    if(props.login==true){
      return  <div className='humburger' id='hum'>
      <Link to={'/Bracelets'}> <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn'>צמידים</button> </Link>
      <Link to={'/chains'}>  <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn' >שרשראות</button> </Link>
      <Link to={'/suprise'}>  <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn' >שרשרת בהפתעה</button> </Link>
      <Link to={'/sale'}>  <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn' >מבצעים</button> </Link>
      <Link to={'/contact'} > <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn'>צור קשר</button></Link>
      <Link to={'/'}> <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn'>בית</button></Link>
      <Link to={'/'}> <div id='myButton'> <button onClick={()=>{props.setFlag(!props.flag)}}className='humburgerBtn' >יצירת שרשראות</button></div></Link>
           
    </div>   
    }
else{
  return <div className='humburger' id='hum'>
  <Link to={'/Bracelets'}> <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn'>צמידים</button> </Link>
  <Link to={'/chains'}>  <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn' >שרשראות</button> </Link>
  <Link to={'/suprise'}>  <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn' >שרשרת בהפתעה</button> </Link>
  <Link to={'/sale'}>  <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn' >מבצעים</button> </Link>
  <Link to={'/contact'} > <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn'>צור קשר</button></Link>
  <Link to={'/'}> <button onClick={()=>{props.setFlag(!props.flag)}} className='humburgerBtn'>בית</button></Link>
  <Link to={'/Terms'}> <button className='humburgerBtn'>תקנון</button></Link>

</div>
}
  }

  

  return (   
    check()
  )
}
