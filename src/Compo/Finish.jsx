import React from 'react'
import { Link } from 'react-router-dom'

export default function Finish(props) {

 

  return (
    <div style={{backgroundColor:'white',width:'80%',margin:'0 auto',marginTop:'30px',marginBottom:'50px',border:'1px solid black',height: "350px"}} >
    <p style={{marginTop:'80px',fontSize:'120%',marginBottom:'0px'}}> .הפרטים נקלטו בהצלחה במערכת</p>
    <p style={{fontSize:'120%',marginTop:'0px'}}>נציג מטעמנו יצור איתך קשר בימים הקרובים</p>
    <p style={{fontSize:'180%',color:'blue'}}> תודה שבחרת  <br /> <span >Eyes Talk</span> </p>
    <Link to={'/'}><p style={{fontSize:'100%'}}> לחזרה לעמוד הראשי לחץ כאן </p> </Link> 
  
  
  </div>
  )
}
