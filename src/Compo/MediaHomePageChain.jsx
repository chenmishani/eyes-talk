import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function MediaHomePageChain(props) {

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
  {props.arrChains[props.index].cnt}
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
    
    <div className="mediaHomePageProduct">
    <div style={{ height: "100%" }}>
      <Link to={"/chain"}>
        <div
          style={{ height: "200px", marginTop: "20px" }}
          onClick={() => {
            props.func(props.index);
          }}
        >
        {props.photo}
        </div>
      </Link>
    </div>
    <div>
      <p style={{ fontSize: "100%", marginTop: "0px" }}>{props.name}</p>
    </div>
    <div>
      <p
        style={{
          fontSize: "100%",
          margin: "0 auto",
          marginTop: "0px",
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
{showCnt(props.index)}
</div>
    </div>
  </div>
  )
 
}
  

