import React, { useState } from "react";
import { AiOutlinePlusCircle } from "react-icons/ai"
import { AiOutlineMinusCircle } from "react-icons/ai"

export default function ChainsList(props) {

  const plus =  <AiOutlinePlusCircle size="18px" />;
  const minus = <AiOutlineMinusCircle size="18px" />;
  
  const checkFlag=()=>{
  if(props.cnt>1){
    setFlag2(true)
  }
}

const [flag,setFlag]=useState(false)
const [flag2,setFlag2]=useState(false)



  const showCnt=()=>{
    if(flag==false){
      return <button className="btn2"
      onClick={() => {
        props.add(props.index);
      }}
    >
      הוספה לסל
    </button>
    }
    else {
      return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ marginTop: '5px' }} onClick={() => { props.add(props.index) }}> {plus}</div>
          <div style={{ marginLeft: '5px', marginRight: '5px', fontSize: '20px', border: '1px solid black', width: '25px' }}>{props.cnt}</div>
          <div style={{ marginTop: '5px' }} onClick={() => { props.delete(props.index); }}>{minus}</div>
        </div>

      )
  }
  }
  
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        border: "1px solid #adcbd3",
        width: "40%",
        margin: "0 auto",
        marginTop: "10px",
        marginBottom:'20px'
      }}
    >
      <div>
        <p style={{ fontSize: "100%", marginTop: "20px" }}>{props.name} </p>
      </div>

      <div style={{ height: "100%" }}>
        
          <div
            style={{
              height: "100%",
              width: "80%",
              margin: "0 auto",
            }}
            onClick={() => {
             
            }}
          >
            {props.photo}
          </div>
       
      </div>

      <div>
        <p
          style={{
            fontSize: "130%",
            margin: "0 auto",
            marginTop: "20px",
            marginBottom: "10px",
            fontFamily:"Times New Roman Times serif"
          }}
        >{`₪ ${props.price} `}</p>
      </div>
      <div>
       <div
           onClick={() => {
            setFlag(true)
          }}
        >
          {showCnt()}
          </div>
      </div>
    
    </div>
   
  )
 
}
