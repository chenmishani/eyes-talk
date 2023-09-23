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
        <div style={{width:'100%',backgroundColor:'black',color:'white',paddingTop:'10px',paddingBottom:'15px'}}>
            <h1 style={{color:'white',fontSize:'30px',marginBottom:'30px',fontFamily:'Times New Roman Times rubik'}}>שירות לקוחות</h1>
            <div style={{display:'flex',justifyContent:'center'}}> 
            <a style={{color:'white',marginRight:'10px',marginBottom:'10px'}} href="https://wa.me/+972527899444">{whatsappLogo} </a>
            <a style={{color:'white',textDecoration:'none'}} href="https://wa.me/+972528775898">WhatsApp: 0528775898 </a>
            </div>
            <div style={{display:'flex',justifyContent:'center'}}> 
            <a style={{color:'white',marginRight:'10px',marginBottom:'10px'}} href="https://www.instagram.com/eyes_talk_yd/" target="_blank" rel="noreferrer">{instegram} </a>
            <a style={{color:'white',textDecoration:'none'}} href="https://www.instagram.com/eyes_talk_yd/" target="_blank" rel="noreferrer">Instagram: eyes_talk_yd</a>
            </div>
            <a style={{color:'white',textDecoration:'none'}} href="tel:+972528775898">0528775898</a>
            {/* <p style={{color:'white'}}>y.d.handmade.jewelry@gmail.com</p> */}
            <div style={{marginTop:'10px'}}>  
             <a style={{color:'white',textDecoration:'none'}} href="mailto:y.d.handmade.jewelry@gmail.com">y.d.handmade.jewelry@gmail.com</a>           
            </div>
            {/* <a style={{color:'white',textDecoration:'none'}} href="mailto:y.d.handmade.jewelry@gmail.com">y.d.handmade.jewelry@gmail.com</a>            */}


         </div>
         <div style={{display:'flex',justifyContent:'center'}}> 
         <p>כל הזכויות שמורות לאייס טוק 2023</p>        
         <div style={{marginTop:'18px',marginLeft:'5px'}}>{Copyright} </div>

        </div>
    </div>
  )
}
