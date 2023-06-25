import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ChainsList(props) {

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
      return <div>
          <button style={{width:'10px',border:'0px',background:'white',fontSize:'20px',margin:'10px'}} onClick={()=>{props.delete(props.name,props.index)}}>
      -
    </button>
      <button className="btn2" style={{width:'40px'}}>
  {props.cnt}
    </button>
    <button style={{width:'10px',border:'0px',background:'white',fontSize:'20px',margin:'5px'}} onClick={() => {
        props.add(props.index);
      }}>
        +
    </button>
  
    </div>
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
      }}
    >
      <div>
        <p style={{ fontSize: "100%", marginTop: "20px" }}>{props.name} </p>
      </div>

      <div style={{ height: "100%" }}>
        <Link to={"/chain"}>
          <div
            style={{
              height: "100%",
              width: "80%",
              margin: "0 auto",
            }}
            onClick={() => {
              props.func(props.index);
            }}
          >
            {props.photo}
          </div>
        </Link>
      </div>

      <div>
        <p
          style={{
            fontSize: "130%",
            margin: "0 auto",
            marginTop: "20px",
            marginBottom: "10px",
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
      {/* {checkFlag()}    */}
    </div>
   
  )
 
}
