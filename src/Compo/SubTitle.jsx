import React from 'react'
import {FaWhatsapp} from 'react-icons/fa'
import {AiOutlineInstagram} from 'react-icons/ai'
import {AiOutlineCopyright} from 'react-icons/ai'



export default function SubTitle() {

    const whatsappLogo=<FaWhatsapp size='28px'/>
    const instegram=<AiOutlineInstagram size='28px'/>
    const Copyright=<AiOutlineCopyright size='15px'/>


  return (
    <div >
        <div style={{width:'100%',backgroundColor:'black',color:'white',paddingTop:'10px',paddingBottom:'10px'}}>
            <h1 style={{color:'white',fontSize:'20px'}}>שירות לקוחות</h1>
            <div style={{display:'flex',justifyContent:'center'}}> <a style={{color:'white',margin:'12px'}} href="https://wa.me/+972527899444">{whatsappLogo} </a>
            <p>WhatsApp: 0527899444</p>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}> <a style={{color:'white',margin:'12px'}} href="https://www.instagram.com/eyes_talk_yd/" target="_blank" rel="noreferrer">{instegram} </a>
            <p>Instagram: eyes_talk_yd</p>
            </div>
            <p style={{color:'white'}}>0528775898</p>
            <p style={{color:'white'}}>y.d.handmade.jewelry@gmail.com</p>
        
         </div>
         <div style={{display:'flex',justifyContent:'center'}}> 
         <p>כל הזכויות שמורות לאייס טוק 2023</p>        
         <div style={{marginTop:'18px',marginLeft:'5px'}}>{Copyright} </div>

        </div>
    </div>
  )
}
