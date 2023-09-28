import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Order(props) {
  
  const [cities, setCities] = useState([
    'גבעתיים',
    'רמת גן',
    'תל אביב',
    'חולון',
    'ראשון לציון',
    'עתלית',
    'רחובות',
    'הרצליה',
    'חיפה',
    'באר שבע',
    'אילת',
    'קיסריה',
    'לוד',
    'רמלה',
    'באר יעקב',
    'גבעת שמואל',
    'אור יהודה',
    'עכו',
    'נתניה',
    'פתח תקווה',
    'בת ים',
    'חדרה',
    'רעננה',
    'מודיעין',
    'ראש העין',
    'הוד השרון',
    'רמת השרון',
    'עפולה',
    'קריית גת',
    'יבנה',
    'כרמיאל',
    'נתיבות',
    'קריית אונו',
    'דימונה',
    'שדרות',
    'בית שאן',
    'אריאל',
    'נשר',
    'קריית שמונה',
    ]);

    const [searchInput, setSearchInput] = useState('');
    const [showCityList, setShowCityList] = useState(true);

    const filterCities = () => {
      const inputLowerCase = searchInput.toLowerCase();
      return cities.filter(city =>
        city.toLowerCase().includes(inputLowerCase) && city.toLowerCase() !== inputLowerCase
      );
    };

    const handleCityClick = (city) => {
      setSearchInput(city);
    };

   const nav=useNavigate()

  

  const sendEmail = (e) => {
    e.preventDefault();
  
      const minLengthRequirements = {
      user_name: 1, 
      user_number: 10, 
      user_city: 3, 
      user_adress: 3, 
    };
  
    
    const formElements = e.target.elements;
    let isValid = true;
  
    for (const key in minLengthRequirements) {
      if (minLengthRequirements.hasOwnProperty(key)) {
        const minLength = minLengthRequirements[key];
        const inputValue = formElements[key].value.trim();
  
        if (inputValue.length < minLength) {
          isValid = false;
          console.error(`${key} input is too short. Minimum length: ${minLength}`);
        }
        
      }
    }
  
    if (isValid) {
      // Send the email
      emailjs
        .sendForm('service_4aendqg', 'template_49wue1b', form.current, '0h5gSS7mvorjFmhUw')
        .then((result) => {
          console.log(result.text);
        })
        .catch((error) => {
          console.error(error.text);
        });
  
      e.target.reset();
      nav('/finish');
      props.deleteCart();
    } 
  };

  const form=useRef()
 


  return (
    <div style={{backgroundColor:'white',width:'80%',margin:'0 auto',marginTop:'30px',marginBottom:'80px',border:'1px solid black'}} >
      <p>אנא מלא את הפרטים הבאים</p>
      <div style={{marginTop:'30px',marginBottom:'30px'}} >



      <form id='myForm' ref={form} onSubmit={sendEmail} style={{display:'flex',flexDirection:'column'}} >
      <input className='inp' type="text" placeholder='שם מלא' name='user_name' required />
      <input className='inp' type="number" placeholder='מספר טלפון' name='user_number' required />
      <div>
      
      <input className='inp' type="text" placeholder='עיר' name='user_city' required value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}/>
         
          {searchInput && (
        <ul>
          {filterCities().map((city, index) => (
           <li style={{width:'150px'}} key={index} onClick={() => handleCityClick(city)}>
           {city}
         </li>
          ))}
        </ul>
      )}  
    </div>

      <input className='inp' type="text" placeholder='כתובת' name='user_adress' required />
      <input style={{display:'none'}} className='inp2' type="text" name='user_product' value={props.cart.map((val)=>{return val.name})}    />
      <button type='submit' className='btn5'>המשך</button>

      </form>
    
    
    </div>
    </div>
  )
}
