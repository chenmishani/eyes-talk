import React from "react";
import './style.css'
import logo from './logo.jpg';
import instegram from './InstagramLogo.png'
import whatsapp from './whatsapp.png'
import cart from './cartlogo.jpg'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import {FaWhatsapp} from 'react-icons/fa'
import Humburger from "./Humburger";



export default function Title(props){

  const [flag,setFlag]=useState(false)
  
  const [open,setOpen]=useState(false)
  
  const nav=useNavigate()



  
  const showDiv=()=>{
    if(flag===true){
      return <div>
       <div><p style={{fontFamily: "Times New Roman"}}>0527899444 -דור</p> <p style={{fontFamily: "Times New Roman"}}>0528775898 -יובל</p></div>
      </div>
    }
  }
 
  const showCompo=()=>{
    if(props.flag===true){
      return <div> <Humburger flag={props.flag} setFlag={props.setFlag}/> </div> 
    }
  }

  const burgerIcon = <CgMenuRound size='40px' onClick={()=>{props.setFlag(!props.flag)}}/>
  const closeIcon = <CgCloseO size='40px' onClick={()=>{props.setFlag(!props.flag)}} />
  const whatsappLogo=<FaWhatsapp size='38px'/>

    return (

  
      <div className="titleDiv">

         <div className="mediaBar">

         <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
    
          
        <div style={{display:'flex',width:'40%'}}>
        <img  className='mediaCartLogo' onClick={()=>{nav('/Cart')}} src={cart} alt="cart" />
        <div className="divNum"><h1 style={{fontSize:'15px'}}>{props.num}</h1></div>
        </div>
          <div style={{width:'100%',marginTop:'40px'}}>
        <div style={{width:'100%'}}><h1 className="title">EYES  TALK</h1></div>
        <div style={{width:'100%',margin:'0 auto'}}>
          <div style={{margin:'0 auto'}}><img onClick={()=>{nav('/eyes-talk')}}className='mediaLogo' src={logo} alt="logo" /></div>
            </div>
        </div>
       
          <div>
        <div style={{width:'20%',display:'flex',justifyContent:'space-between'}}>
        <a style={{marginTop:'12px',color:'black'}} href="https://wa.me/+972527899444">{whatsappLogo}</a>
          <div style={{marginTop:'10px',marginRight:'10px'}}> {open ? closeIcon: burgerIcon} </div>   
         </div>
        
        <div>{showCompo()}</div>
      
        </div>
        </div>
        </div>

        <div className="webTitleDiv">

        <div style={{width:'254px'}}>
          <div style={{display:'flex'}}>
        <img  className='cartLogo' onClick={()=>{nav('/Cart')}} src={cart} alt="cart" />
        <div className="divNum"><h1 style={{fontSize:'20px'}}>{props.num}</h1></div>
        </div>
        </div>
       
        <div>
        <Link to={'/Bracelets'}> <button className="btn">הצמידים שלנו</button> </Link> 
        </div>
        <div className="logoDiv"> 
        <div><h1 className="title">EYES  TALK</h1></div>
        <div><img onClick={()=>{nav('/eyes-talk')}} className='logo' src={logo} alt="logo" /></div>
        </div> 
        <div>
        <Link to={'/chains'}> <button className="btn" >השרשראות שלנו</button> </Link> 
        </div>

      <div style={{width:'20%'}}>

      <div>
      <div style={{display:'flex'}}> 
     <Link to={'/contact'}> <div style={{width:'70px'}}><img style={{ width: "50px",height:'55px',marginTop:'12px' }} src={whatsapp} alt="logo" /> </div></Link>
        <div> <a href="https://www.instagram.com/eyes_talk_yd/" target="_blank" rel="noreferrer"> <img style={{ width: "120px",height:'80px' }} src={instegram} alt="logo" /> </a></div>
        <div style={{marginRight:'30px'}}><p>בס"ד</p></div>
     </div>
     <div>{showDiv()}</div>
 
      </div>
      </div>
      </div>
      </div>
    )

}







