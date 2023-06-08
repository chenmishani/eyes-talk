import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Order(props) {
  
  const [name,setName]=useState('')
  const [phone,setPhone]=useState(0)
  const [city,setCity]=useState('')
  const [adress,setAdress]=useState('')

  const nav=useNavigate()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4aendqg', 'template_49wue1b', form.current, '0h5gSS7mvorjFmhUw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      nav('/finish')
      props.deleteCart()
  };

  const form=useRef()
 


  return (
    <div style={{backgroundColor:'white',width:'80%',margin:'0 auto',marginTop:'30px',marginBottom:'80px',border:'1px solid black'}} >
      <p>אנא מלא את הפרטים הבאים</p>
      <div style={{marginTop:'30px',marginBottom:'30px'}} >



      <form id='myForm' ref={form} onSubmit={sendEmail} style={{display:'flex',flexDirection:'column'}} >
      <input className='inp' type="text" placeholder='שם מלא' name='user_name' required />
      <input className='inp' type="number" placeholder='מספר טלפון' name='user_number' required />
      <input className='inp' type="text" placeholder='עיר' name='user_city' required />
      <input className='inp' type="text" placeholder='כתובת' name='user_adress' required />
      <input className='inp2' type="text" name='user_product' value={props.cart.map((val)=>{return val.name})}    />
      <button type='submit' className='btn5'>send</button>

      </form>
    {/* {prodactName()} */}
    
    </div>
    </div>
  )
}
