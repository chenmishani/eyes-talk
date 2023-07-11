import React,{ useState } from "react";
import './style.css'
import logo from './photos2/logo.mp4';
import instegram from './photos2/InstagramLogo.png'
import whatsapp from './photos2/whatsapp.png'
import { useNavigate,Link } from "react-router-dom";
import {CgMenuRound} from 'react-icons/cg'
import {CgCloseO} from 'react-icons/cg'
import {FaWhatsapp} from 'react-icons/fa'
import {BsBasket} from 'react-icons/bs'
import Humburger from "./Humburger";



export default function Title(props){

  const [flag,setFlag]=useState(false)
  
  const [open,setOpen]=useState(false)
  
  const nav=useNavigate()

  const showNun=()=>{
    if(props.num<1){
      return <p></p>
    }
    else{
      return <h1 style={{fontSize:'15px'}}>{props.num}</h1>
    }
  }

  
  const showDiv=()=>{
    if(flag===true){
      return <div>
       <div><p style={{fontFamily: "Times New Roman"}}>0527899444 -דור</p> <p style={{fontFamily: "Times New Roman"}}>0528775898 -יובל</p></div>
      </div>
    }
  }
 
  const showCompo=()=>{
    if(props.flag===true){
      return <div> <Humburger flag={props.flag} setFlag={props.setFlag}/>
      </div> 
    }
  }

  const burgerIcon = <CgMenuRound size='30px' onClick={()=>{props.setFlag(!props.flag)}}/>
  const closeIcon = <CgCloseO size='30px' onClick={()=>{props.setFlag(!props.flag)}} />
  const whatsappLogo=<FaWhatsapp size='28px'/>
  const cart=<BsBasket size='23px'/>

    return (

  
      <div className="titleDiv">

         <div className="mediaBar">
         <div className="bar3">
        <div style={{display:'flex',width:'24%'}}>
        <div className='cartLogo' onClick={()=>{nav('/Cart')}}>{cart} </div>
        <div className="divNum">{showNun()}</div>
        </div> 
        <div>
        <div ><h1 className="title" style={{fontSize:'25px'}}>EYES  TALK</h1></div>
        </div>
        <div>     
        <div style={{width:'20%',display:'flex',justifyContent:'space-between'}}>
        <a style={{marginTop:'12px',color:'black'}} href="https://wa.me/+972527899444">{whatsappLogo}</a>
        <div> <a href="https://www.instagram.com/eyes_talk_yd/" target="_blank" rel="noreferrer"> <img style={{ width:"25px",height:'25px',marginTop:'13px'}} src={instegram} alt="logo" /> </a></div>
          <div style={{marginTop:'10px',marginRight:'10px'}}> {open ? closeIcon: burgerIcon} </div>   
         </div>
         <div>{showCompo()}</div>
         </div>
         </div>
         
         <div>
        <div style={{margin:'0 auto'}}>
        <div onClick={()=>{nav('/')}} style={{margin:'0 auto'}} >
        <video style={{width:'40%',marginTop:'50px'}} autoPlay loop muted playsInline>
        <source src={logo} type="video/mp4" />
        </video>
            </div> 
        </div>
        </div>
        
        
      
        </div>
       

        <div className="webTitleDiv">

        <div style={{width:'650px'}}>
          <div style={{display:'flex'}}>
       <div className='cartLogo' onClick={()=>{nav('/Cart')}}>{cart} </div>
        <div className="divNum">{showNun()}</div>
        </div>
        </div>
       
        <div>
        <Link to={'/Bracelets'}> <button className="btn">הצמידים שלנו</button> </Link> 
        </div>
        <div className="logoDiv"> 
        <div><h1 className="title">EYES  TALK</h1></div>
       <Link to={'/'}> <div>
       <video style={{width:'45%'}} autoPlay loop muted playsInline>
        <source src={logo} type="video/mp4" />
        </video>
          </div></Link>
        </div> 
        <div>
        <Link to={'/chains'}> <button className="btn" >השרשראות שלנו</button> </Link> 
        </div>

      <div style={{width:'20%'}}>

      <div>
      <div style={{display:'flex'}}> 
     <Link to={'/contact'}> <div style={{width:'70px'}}><img style={{ width: "50px",height:'55px',marginTop:'12px' }} src={whatsapp} alt="logo" /> </div></Link>
        <div> <a href="https://www.instagram.com/eyes_talk_yd/" target="_blank" rel="noreferrer"> <img style={{ width: "60px",height:'60px',marginTop:'10px',marginRight:'5px' }} src={instegram} alt="logo" /> </a></div>
        <div style={{marginRight:'30px'}}><p>בס"ד</p></div>
     </div>
     <div>{showDiv()}</div>
 
      </div>
      </div>
      </div>
      </div>
    )

}







